---
name: prompt-tracker
description: Verwaltet die Prompt-Bibliothek für alle Lovable-Projekte (docs/prompts). Nutze ihn, wenn der Nutzer fragt, welcher Prompt noch fehlt, welcher als Nächstes gesendet werden soll, einen Prompt (z. B. R03-02) sehen oder als gesendet/erledigt markieren will, oder den Stand der Rangliste wissen möchte.
---

# Prompt-Tracker

Quelle des Stands: `docs/prompts/status.csv` (Spalten `id;status;gesendet_am;notiz`). Status: offen, gesendet, erledigt, übersprungen. Übersicht: `docs/prompts/INDEX.md`. Prompt-Texte: `docs/prompts/R##-*.md`, Master-Prompt: `docs/prompts/master-prompt.txt`.

## Ablauf
1. Lies `status.csv` und `INDEX.md`. Antworte auf Deutsch.
2. **„Welcher Prompt fehlt noch / was ist als Nächstes dran?“** → Nenne den ersten Prompt mit Status „offen“ in der Reihenfolge der Rangliste (Rang aufsteigend, innerhalb eines Projekts erst `R##-M`, dann die Nummern; Priorität KRITISCH zuerst). Gib den Prompt-Text komplett im Chat aus (Codeblock), mit ID, Projektname und Lovable-ID. Frage nach {ADMIN_EMAIL}, {URL_PLATTFORM_1}, {URL_PLATTFORM_2}, falls der Text sie enthält und sie nicht bekannt sind; ersetze sie dann.
3. **„R03-02 ist gesendet / erledigt“** → Aktualisiere die Zeile in `status.csv` (Status, Datum von heute in `gesendet_am`, optional Notiz), führe `python3 docs/prompts/build.py` aus, zeige die neue Zählung (offen/gesendet/erledigt), committe und pushe.
4. **„Stand“** → Zähle pro Status und pro Projekt, nenne die 5 dringendsten offenen Prompts.
5. Wenn der Nutzer will, schicke den Prompt direkt mit `mcp__Lovable__send_message` an das Projekt (nur nach seiner ausdrücklichen Bestätigung für genau diesen Prompt), setze danach „gesendet“ und prüfe später das Ergebnis mit `get_message`.
6. Wird ein Prompt vom Agenten gemeldet als erledigt, bestätige das erst nach Prüfung des Berichts; sonst „gesendet“ lassen.
7. Neue Funde oder neue Projekte: Prompt in `docs/prompts/data/part*.py` ergänzen, `build.py` ausführen.

## Regeln
- Den Master-Prompt (`R##-M`) pro Projekt zuerst senden, danach die Einzel-Prompts.
- Nichts als „erledigt“ markieren, was nicht geprüft wurde.
- Impressum, AGB und Datenschutz bleiben in allen Prompts unangetastet.
