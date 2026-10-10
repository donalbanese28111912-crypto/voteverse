# R01 – PunaKI – dein SmartHandwerker

- Lovable-Projekt-ID: `52a1eaf2-119b-4197-9a30-739f35d61ab2`
- Lage: VERÖFFENTLICHT. Note 6,5. Erfundene Zahlen wirken echt; Notfall-KI ohne Limit; Altmarke projob im Code.
- Veröffentlicht: JA (live)

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R01-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R01-01 · Erfundene Zahlen, Ticker und Erfolgsgeschichte entfernen oder kennzeichnen
Priorität: KRITISCH · Status: offen

```
Projekt: PunaKI – dein SmartHandwerker. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In src/lib/mock-data.ts und auf der Startseite (src/routes/index.tsx) stehen erfundene Angaben: „über 400 Handwerksbetriebe“, „rund 2.100 Aufträge“, Ticker-Meldungen und eine Erfolgsgeschichte mit Fantasiename, Zitat und Unsplash-Foto. Entferne sie. Alternativ zeige sie nur mit deutlich sichtbarem Label „Beispiel“ oder mit echten Werten aus der Datenbank. Sprich nirgends von Kunden, Betrieben oder Aufträgen, die nicht belegt sind.

Fertig, wenn: Keine unbelegte Zahl, kein Fantasiename ohne „Beispiel“-Label mehr auf der Startseite. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R01-02 · KI-Funktionen begrenzen (Notfall und Analyse)
Priorität: KRITISCH · Status: offen

```
Projekt: PunaKI – dein SmartHandwerker. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die öffentliche KI-Funktion auf /notfall und analysiereAuftrag in src/lib/ki-analyse.functions.ts haben kein Limit. Begrenze auf 10 Aufrufe pro Stunde und IP, Bilder auf höchstens 4 MB und prüfe Dateityp und Länge der Eingaben. Bei Überschreitung eine verständliche deutsche Meldung.

Fertig, wenn: Elfter Aufruf in einer Stunde wird abgelehnt, großes Bild wird abgelehnt, Test vorhanden. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R01-03 · Altmarke und Alt-Domain ersetzen, Metadaten
Priorität: wichtig · Status: offen

```
Projekt: PunaKI – dein SmartHandwerker. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ersetze projob-smartmeister-ai.lovable.app und presse@projob.ai in index.tsx und allen anderen Dateien durch die aktuelle PunaKI-Adresse. Setze og:image auf public/punaki-social.png der Live-Domain, canonical absolut, deutsche 404- und Fehlerseite in __root.tsx.

Fertig, wenn: Suche nach „projob“ im Code ergibt keine Treffer mehr; og:image zeigt auf die aktuelle Domain. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R01-04 · Newsletter speichern und Mobilmenü
Priorität: wichtig · Status: offen

```
Projekt: PunaKI – dein SmartHandwerker. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Der Newsletter-Kasten auf der Startseite speichert nichts. Lege eine Tabelle newsletter_signups mit E-Mail, Einwilligung, Zeitstempel und Double-Opt-in-Status an (anon darf nur einfügen, Unique auf E-Mail) und verdrahte das Formular. Ergänze unter md ein Mobilmenü (Sheet) mit allen Header-Links.

Fertig, wenn: Anmeldung landet in der Tabelle, Bestätigung sichtbar, Menü auf 390 px bedienbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R01-05 · Express-Suche und Startmodus konsistent machen, Hero-Video
Priorität: Verbesserung · Status: offen

```
Projekt: PunaKI – dein SmartHandwerker. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die Express-Suche zeigt Mock-Betriebe und sagt „nur Vorschau“, während launch-mode.ts alles freigibt. Zeige entweder echte Betriebe aus der Datenbank oder einen klaren Demo-Hinweis. Lade das Hero-Video nur einmal, ersetze die zweite Video-Sektion in AktuellesSektion durch ein Standbild, Logo im Hero ohne weißen Kasten.

Fertig, wenn: Keine widersprüchlichen Aussagen zum Startmodus; Video wird einmal geladen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
