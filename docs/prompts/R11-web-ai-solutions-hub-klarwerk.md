# R11 – Web & AI Solutions Hub (Klarwerk)

- Lovable-Projekt-ID: `47b36b47-16ba-4c2b-b9b4-61d7f5a18df8`
- Lage: Note 7. Kontaktformular und Buchung speichern nichts – Leads gehen verloren.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R11-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R11-01 · Kontaktformular mit echter Speicherung
Priorität: KRITISCH · Status: offen

```
Projekt: Web & AI Solutions Hub (Klarwerk). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: kontakt.tsx setzt nur sent=true. Verbinde es mit einer Server-Funktion, die die Anfrage in einer Tabelle leads speichert (RLS: nur Admin liest), Einwilligung und Honeypot enthält und eine E-Mail an {ADMIN_EMAIL} sendet. Zeige im Admin-Bereich eine Lead-Liste.

Fertig, wenn: Anfrage landet in leads und im Postfach; Fehler werden angezeigt, nicht verschluckt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R11-02 · Terminbuchung speichern
Priorität: KRITISCH · Status: offen

```
Projekt: Web & AI Solutions Hub (Klarwerk). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Der BookingDialog (booking-dialog.tsx) simuliert nur. Speichere Name, E-Mail, Datum, Uhrzeit in leads, verhindere Doppelbuchungen, sende Bestätigungsmail.

Fertig, wenn: Buchung gespeichert und bestätigt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R11-03 · KI-Beratung schützen
Priorität: wichtig · Status: offen

```
Projekt: Web & AI Solutions Hub (Klarwerk). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: recommend in advisor.functions.ts ist ohne Login und Limit aufrufbar. Rate-Limit 5 pro Stunde und IP, Honeypot, Eingabelängen begrenzen; Modell prüfen (openai/gpt-6-astra).

Fertig, wenn: Limit greift; Modell funktioniert oder ist ersetzt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R11-04 · Beispieldaten ehrlich kennzeichnen
Priorität: wichtig · Status: offen

```
Projekt: Web & AI Solutions Hub (Klarwerk). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Der Trigger create_sample_project legt für jeden neuen Kunden ein Beispielprojekt mit erfundenem Fortschritt (55 %) an: entfernen oder als „Beispiel“ kennzeichnen. Demos sichtbar als „Demo mit Beispieldaten“, erfundene Wartezeiten und Preise in site-data.ts durch neutrale Platzhalter ersetzen.

Fertig, wenn: Keine erfundenen Kundenprojekte oder Wartezeiten. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R11-05 · Sprache und Hero
Priorität: Verbesserung · Status: offen

```
Projekt: Web & AI Solutions Hub (Klarwerk). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: lang="de" in __root.tsx, deutsche 404- und Fehlerseite, Impressum und Datenschutz im Footer als echte Links (site-shell.tsx), Hero rechts mit Produktbild oder Demo-Vorschau.

Fertig, wenn: Footer-Links funktionieren, Hero gefüllt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
