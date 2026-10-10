# R16 – BASTION OF FREEDOM – Pi Dash Nise I

- Lovable-Projekt-ID: `01371116-ea5c-4cb2-a166-af00da8063af`
- Lage: Note 7. Warteliste meldet Erfolg trotz Speicherfehler; Demo-Auktion irreführend.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R16-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R16-01 · Warteliste zeigt falschen Erfolg
Priorität: KRITISCH · Status: offen

```
Projekt: BASTION OF FREEDOM – Pi Dash Nise I. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In src/components/bastion/waiting-list.tsx fängt catch Fehler nur mit console.info ab und zeigt trotzdem „Platz notiert“. Zeige Erfolg erst, wenn joinWaitingList wirklich gelingt, sonst „Bitte erneut versuchen“ mit erhaltenen Eingaben. Prüfe waiting-list.functions.ts: .inputValidator statt .validator.

Fertig, wenn: Bei Speicherfehler erscheint die Fehlermeldung; Test. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R16-02 · Spam- und Datenschutz
Priorität: KRITISCH · Status: offen

```
Projekt: BASTION OF FREEDOM – Pi Dash Nise I. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: waiting_list und concierge_requests: Unique-Index auf lower(email), Honeypot, 5 Anfragen pro Stunde und IP, Einwilligungs-Checkbox mit Link zur Datenschutzseite und Spalte consented_at.

Fertig, wenn: Doppelte E-Mails und Spam werden abgelehnt, Einwilligung gespeichert. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R16-03 · Demo-Auktion entschärfen
Priorität: wichtig · Status: offen

```
Projekt: BASTION OF FREEDOM – Pi Dash Nise I. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die Gebote steigen alle 12 Sekunden von selbst um 250 €, der Countdown startet bei jedem Aufruf neu. Beschrifte die Auktion als „Vorschau“ und stoppe Auto-Gebote und Neustart, bis es echte Daten gibt.

Fertig, wenn: Keine automatischen Gebote mehr. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R16-04 · Metadaten, Sprache, Zertifikatsprüfung
Priorität: wichtig · Status: offen

```
Projekt: BASTION OF FREEDOM – Pi Dash Nise I. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Absolute canonical-URLs und og:image in allen head-Funktionen, html lang passend zur gewählten Sprache. verify_certificate auf 10 Abfragen pro Minute und IP begrenzen.

Fertig, wenn: Metadaten vollständig, Limit greift. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R16-05 · Startseite aufräumen
Priorität: Verbesserung · Status: offen

```
Projekt: BASTION OF FREEDOM – Pi Dash Nise I. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Das Kaiser-Bild erscheint zweimal; Futter-Band mit neutralem Platzhalter statt Wiederholung. Gold-auf-Schwarz-Kleingedrucktes im Kontrast auf 4,5:1, Navigation auf Hauptpunkte reduzieren.

Fertig, wenn: Kein doppeltes Bild, Kontrast bestanden. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
