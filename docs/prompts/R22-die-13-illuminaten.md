# R22 – Die 13 Illuminaten

- Lovable-Projekt-ID: `6c716278-3374-4c7f-9733-f210a19e9eef`
- Lage: Note 7. Chronik mobil kaum bedienbar, Navigation bricht um, Orakel ohne Limit.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R22-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R22-01 · Chronik mobil bedienbar
Priorität: KRITISCH · Status: offen

```
Projekt: Die 13 Illuminaten. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Das 24-Spalten-Raster in chronik.tsx ist bei 390 px unbenutzbar (Felder ca. 14 px). Ersetze es mobil durch ein horizontal scrollbares Band oder Kapitelgruppen je Buch mit mindestens 40 px Touch-Fläche; Karten-Orte per Tastatur bedienbar mit aria-label.

Fertig, wenn: Kapitel mobil antippbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R22-02 · Navigation
Priorität: wichtig · Status: offen

```
Projekt: Die 13 Illuminaten. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die Desktop-Navigation (12 Punkte) bricht schon bei 1920 px um, auch das Logo. In site-chrome.tsx erst ab xl anzeigen, in 4 Gruppen (Welt, Figuren, Krieg, Mehr) gliedern, Logo darf nicht umbrechen.

Fertig, wenn: Navigation einzeilig. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R22-03 · Orakel und RLS
Priorität: wichtig · Status: offen

```
Projekt: Die 13 Illuminaten. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: askOracle auf 10 Fragen pro Stunde und IP, Beispiele aus allen vier Bänden. Dokumentiere und prüfe die RLS-Policies von characters, houses, war_days, products (anon nur lesen) und lege sie als Migration im Repo ab (drizzle/schema.ts ist leer).

Fertig, wenn: Limit greift, Policies im Repo. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R22-04 · Kompass erweitern
Priorität: Verbesserung · Status: offen

```
Projekt: Die 13 Illuminaten. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Gewichte im Kompass (kompass.tsx) alle 48 Figuren, ergänze Fragen, zeige einen Zweitplatz.

Fertig, wenn: Alle Figuren erreichbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R22-05 · Namen, Metadaten
Priorität: Verbesserung · Status: offen

```
Projekt: Die 13 Illuminaten. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Klär die Schreibweise des Helden (Jesus Alba de Zeus / zeus-alba-del-alexander) in Daten und Profil, deutsche 404 und og:image, Kleinschrift 0,7 rem erhöhen.

Fertig, wenn: Eine Schreibweise, Metadaten gesetzt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
