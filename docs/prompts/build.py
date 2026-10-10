#!/usr/bin/env python3
"""Erzeugt INDEX.md und je Projekt eine Datei aus data/ und status.csv.
Status-Quelle ist status.csv (Spalten: id;status;gesendet_am;notiz). Danach `python3 docs/prompts/build.py` ausführen."""
import csv, os, re, sys
here = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(here, "data"))
from part3 import P  # noqa

STATUSES = ["offen", "gesendet", "erledigt", "übersprungen"]
master = open(os.path.join(here, "master-prompt.txt"), encoding="utf-8").read().strip()
status_path = os.path.join(here, "status.csv")
status = {}
if os.path.exists(status_path):
    for r in csv.DictReader(open(status_path, encoding="utf-8"), delimiter=";"):
        status[r["id"]] = r

def slug(s):
    s = s.lower().replace("ä","ae").replace("ö","oe").replace("ü","ue").replace("ß","ss")
    return re.sub(r"[^a-z0-9]+","-",s).strip("-")[:40]

WRAP = ("Projekt: {name}. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. "
        "Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {{ADMIN_EMAIL}} vorher durch den echten Wert ersetzen.\n\n"
        "Auftrag: {text}\n\nFertig, wenn: {done} Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.")

rows = []  # (id, rank, name, title, prio, kind)
for p in sorted(P, key=lambda x: x["rank"]):
    rk = f"R{p['rank']:02d}"
    rows.append((f"{rk}-M", p["rank"], p["name"], "Master-Prompt (Grundregeln) zuerst senden", 2, p))
    for i, q in enumerate(p["prompts"], 1):
        rows.append((f"{rk}-{i:02d}", p["rank"], p["name"], q["title"], q["prio"], (p, q)))

# status.csv ergänzen, nichts überschreiben
for r in rows:
    status.setdefault(r[0], dict(id=r[0], status="offen", gesendet_am="", notiz=""))
with open(status_path, "w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["id","status","gesendet_am","notiz"], delimiter=";")
    w.writeheader()
    for r in rows: w.writerow(status[r[0]])

PRIO = {1: "KRITISCH", 2: "wichtig", 3: "Verbesserung"}
out = ["# Prompt-Bibliothek – Rangliste aller Lovable-Projekte", "",
 "Stand wird aus `status.csv` erzeugt (`python3 docs/prompts/build.py`). Reihenfolge: dringendste Projekte oben.",
 "Status: offen / gesendet / erledigt / übersprungen. Fragen an Claude: „Welcher Prompt fehlt noch?“, „Gib mir den nächsten Prompt“, „R03-02 ist gesendet“.", "",
 "Vor dem Senden: `{ADMIN_EMAIL}`, `{URL_PLATTFORM_1}`, `{URL_PLATTFORM_2}` durch echte Werte ersetzen. Pro Projekt zuerst den Master-Prompt (`R##-M`), dann die Einzel-Prompts in Reihenfolge der Dringlichkeit.", ""]
tot = {s:0 for s in STATUSES}
for r in rows: tot[status[r[0]]["status"]] = tot.get(status[r[0]]["status"],0)+1
out += [f"**Gesamt:** {len(rows)} Prompts – " + ", ".join(f"{k}: {v}" for k,v in tot.items()), ""]
out += ["## Rangliste der Projekte", "", "| Rang | Projekt | Lovable-ID | Note/Lage | Prompts | offen |", "|---|---|---|---|---|---|"]
for p in sorted(P, key=lambda x: x["rank"]):
    rk = f"R{p['rank']:02d}"
    ids = [r[0] for r in rows if r[0].startswith(rk+"-")]
    offen = sum(1 for i in ids if status[i]["status"]=="offen")
    out.append(f"| {rk} | [{p['name']}]({rk}-{slug(p['name'])}.md){' (LIVE)' if p['live'] else ''} | `{p['pid'][:8]}` | {p['note']} | {len(ids)} | {offen} |")
out += ["", "## Alle Prompts mit Status", "", "| ID | Projekt | Prompt | Priorität | Status | gesendet am | Notiz |", "|---|---|---|---|---|---|---|"]
for r in rows:
    s = status[r[0]]
    out.append(f"| {r[0]} | {r[2]} | {r[3]} | {PRIO[r[4]]} | {s['status']} | {s['gesendet_am']} | {s['notiz']} |")
open(os.path.join(here,"INDEX.md"),"w",encoding="utf-8").write("\n".join(out)+"\n")

for p in sorted(P, key=lambda x: x["rank"]):
    rk = f"R{p['rank']:02d}"
    lines = [f"# {rk} – {p['name']}", "", f"- Lovable-Projekt-ID: `{p['pid']}`", f"- Lage: {p['note']}", f"- Veröffentlicht: {'JA (live)' if p['live'] else 'nein'}", "",
             "Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.", "",
             f"## {rk}-M · Master-Prompt (Grundregeln)", f"Status: {status[rk+'-M']['status']}", "", "Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).", ""]
    for i, q in enumerate(p["prompts"], 1):
        pid = f"{rk}-{i:02d}"
        full = WRAP.format(name=p["name"], text=q["text"], done=q["done"])
        lines += [f"## {pid} · {q['title']}", f"Priorität: {PRIO[q['prio']]} · Status: {status[pid]['status']}", "", "```", full, "```", ""]
    open(os.path.join(here, f"{rk}-{slug(p['name'])}.md"),"w",encoding="utf-8").write("\n".join(lines))
print(len(rows), "Prompts,", len(P), "Projekte")
