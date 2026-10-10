# R21 – One Plis (Echoes of Pelasgia)

- Lovable-Projekt-ID: `74177c7b-704b-4dfc-b006-9be1d710e8e8`
- Lage: Note 7. Suche mit toten Treffern, keine mobile Navigation, Orakel ohne Limit.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R21-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R21-01 · Suche reparieren
Priorität: KRITISCH · Status: offen

```
Projekt: One Plis (Echoes of Pelasgia). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In src/routes/search.tsx sind nur Personentreffer verlinkt. Mache jeden Treffer klickbar (Region → /illyria/$slug, Ereignis → /chronicle, Artefakt → /finds usw.), entferne den Startwert „Teuta“ und ignoriere Diakritika (Arbër = Arber).

Fertig, wenn: Alle Treffertypen führen zu einer Seite. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R21-02 · Mobile Navigation und Hell/Dunkel
Priorität: KRITISCH · Status: offen

```
Projekt: One Plis (Echoes of Pelasgia). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Baue in AppShell.tsx und auf der Startseite ein Mobilmenü (Sheet) mit allen Navigationsgruppen (ca. 30 Seiten) und speichere den Hell/Dunkel-Modus in localStorage (mit try/catch).

Fertig, wenn: Alle Seiten mobil erreichbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R21-03 · Orakel begrenzen
Priorität: wichtig · Status: offen

```
Projekt: One Plis (Echoes of Pelasgia). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: askOracle in src/lib/oracle.functions.ts: 10 Fragen pro Stunde und IP, nur die 20 relevantesten Archivzeilen an die KI senden statt des gesamten Kontexts.

Fertig, wenn: Limit greift, Kontext klein. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R21-04 · Name und Zeitraum vereinheitlichen
Priorität: wichtig · Status: offen

```
Projekt: One Plis (Echoes of Pelasgia). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ein Titel (One Plis / ILIR / Echoes of Pelasgia / Das Lied von Pelasgia) und eine Zeitspanne (1000 v. Chr.–1000 n. Chr., 10.000 v. Chr., 11.000 Jahre) in __root.tsx, Menü und Startseite; deutsche 404; og:image.

Fertig, wenn: Name und Zeitraum überall gleich. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R21-05 · Tastatur, Story-Schmiede, Tests
Priorität: Verbesserung · Status: offen

```
Projekt: One Plis (Echoes of Pelasgia). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Karten-Orte (map.tsx) und Registerkarten (registry.tsx) per Tastatur bedienbar (tabIndex, Enter, aria-expanded), Evidenz zusätzlich als Text; forge.tsx lädt Stimmen als Zählansicht statt aller Zeilen mit user_id; Herkunft von illyricum-reference-map.png prüfen; Vitest für consistency.ts und Zeitscheiben.

Fertig, wenn: Bedienung per Tastatur, keine user_id im Browser. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
