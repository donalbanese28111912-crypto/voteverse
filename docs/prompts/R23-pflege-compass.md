# R23 – Pflege Compass

- Lovable-Projekt-ID: `040da1aa-e2f3-4089-b40f-3d8be32812be`
- Lage: Note 7,5. Quellen und Stand pro Bundesland fehlen; lang-Attribut fest „en“.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R23-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R23-01 · Quelle und Stand je Bundesland
Priorität: KRITISCH · Status: offen

```
Projekt: Pflege Compass. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In bundeslaender.ts haben die 16 Behörden weder Link noch Quelle noch Datum. Ergänze je Bundesland url, quelle und stand und zeige sie im Fahrplan; entferne wertende Hinweise ohne Beleg („oft lange Laufzeiten“, „zügige Bearbeitung“).

Fertig, wenn: Jede Behördenangabe hat Quelle und Datum. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R23-02 · Fristen belegen
Priorität: KRITISCH · Status: offen

```
Projekt: Pflege Compass. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Gib Zeitangaben („3–9 Monate“) und die Widerspruchsfrist in roadmap.ts eine Quelle oder den Zusatz „Richtwert, bitte bei der Behörde prüfen“.

Fertig, wenn: Keine Frist ohne Quelle oder Richtwert-Hinweis. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R23-03 · Sprache und Schreibrichtung
Priorität: wichtig · Status: offen

```
Projekt: Pflege Compass. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In __root.tsx ist html lang="en" fest. Setze lang dynamisch zur gewählten Sprache, dir="rtl" bei Arabisch, Persisch, Hebräisch, Urdu.

Fertig, wenn: lang/dir passen zur Sprache. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R23-04 · Fortschritt speichern, Header
Priorität: wichtig · Status: offen

```
Projekt: Pflege Compass. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Der Fahrplan-Fortschritt in fahrplan.tsx geht beim Neuladen verloren: für angemeldete Nutzer in der Datenbank, sonst localStorage mit try/catch. Header-Button auf „Beratung“ kürzen (whitespace-nowrap), 390 px prüfen, leere Fläche der Hero-Karte füllen.

Fertig, wenn: Fortschritt bleibt erhalten, Header bricht nicht um. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R23-05 · Schriften lokal, Beratung ehrlich
Priorität: Verbesserung · Status: offen

```
Projekt: Pflege Compass. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Google Fonts lokal einbinden (Datenschutz). Auf der Beratungsseite klar sagen, dass keine Terminbuchung stattfindet, und Preise oder den Weg zur Preisauskunft nennen. KI-Modell openai/gpt-6-astra in dokument-check.functions.ts prüfen.

Fertig, wenn: Keine externen Schriften, Beratungsablauf klar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
