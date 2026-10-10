# R13 – Puna Beauty Hub

- Lovable-Projekt-ID: `99152909-69ec-49ca-8ec7-4402c5e0b9a5`
- Lage: Note 5,5. Tote Buttons, erfundene Anbieterinnen ohne Kennzeichnung.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R13-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R13-01 · Tote Buttons verdrahten
Priorität: KRITISCH · Status: offen

```
Projekt: Puna Beauty Hub. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Auf der Startseite (src/routes/index.tsx) hat der Mobilmenü-Button keine Funktion, „Launch vormerken“ hat keinen Handler und das Vormerk-Formular speichert nichts. Baue ein Menü (Sheet) mit allen Links, lege waitlist_signups an (E-Mail, Einwilligung, Zeitstempel) und verdrahte beides. Das Foto-Hochladen speichern und in der Suche nutzen oder das Büroklammer-Symbol entfernen.

Fertig, wenn: Alle Buttons der Startseite tun etwas; Vormerkungen werden gespeichert. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R13-02 · Demo-Anbieterinnen kennzeichnen
Priorität: KRITISCH · Status: offen

```
Projekt: Puna Beauty Hub. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Alle Anbieterinnen im Katalog (z. B. Amira K., 4,9 / 128 Bewertungen), Zitate und der „Gerade gebucht“-Ticker in src/data/puna.ts sind erfunden. Kennzeichne sie sichtbar als „Beispiel“ oder blende sie aus, bis echte Daten vorliegen.

Fertig, wenn: Keine unmarkierten erfundenen Bewertungen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R13-03 · Metadaten und Sprache
Priorität: wichtig · Status: offen

```
Projekt: Puna Beauty Hub. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In __root.tsx lang="de", twitter:site „@Lovable“ entfernen, og:image, deutsche 404- und Fehlerseite.

Fertig, wenn: Metadaten korrekt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R13-04 · Navigation aufräumen
Priorität: wichtig · Status: offen

```
Projekt: Puna Beauty Hub. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Der Header hat 15 Links. Reduziere auf 5–6 Hauptlinks plus „Mehr“; Dashboard und Partnerbereich nur nach Login (site-header.tsx).

Fertig, wenn: Header übersichtlich, mobil ohne Überlauf. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R13-05 · Support-Chat, Sprachen, Tests
Priorität: Verbesserung · Status: offen

```
Projekt: Puna Beauty Hub. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Der Support-Chat gibt eine feste Antwort: ehrlich als „automatische Antwort“ kennzeichnen. 16 Sprachen sind gelistet, aber nur der Chat in 4 verfügbar: Liste auf tatsächlich verfügbare reduzieren. Tests für den Buchungsfluss ergänzen.

Fertig, wenn: Keine Sprache beworben, die nicht funktioniert; Tests laufen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
