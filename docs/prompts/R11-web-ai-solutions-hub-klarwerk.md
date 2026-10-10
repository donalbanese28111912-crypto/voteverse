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

## R11-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Web & AI Solutions Hub (Klarwerk). Aktuelle Note ca. 7,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

PHASE 1 – Grundregeln (Sicherheit, Ehrlichkeit, Bedienung, Technik):
Qualitäts-Grundregeln für dieses Projekt. Prüfe jeden Punkt, behebe Abweichungen und berichte kurz, was geändert wurde und was fehlt. Ändere nichts an Impressum, AGB und Datenschutz.

1. Sicherheit
- Kein Nutzer wird automatisch Admin ("erster Registrierter"). Entferne solche Funktionen (z. B. claim_admin_if_none, handle_new_user-Automatik) per Migration. Der Admin wird fest über die E-Mail-Adresse {ADMIN_EMAIL} vergeben; prüfe, ob bereits fremde Admins existieren.
- Alle Admin-Seiten und Serverfunktionen verlangen Login und Admin-Rolle (has_role) serverseitig, nicht nur im Browser.
- KI-Funktionen und öffentliche API-Endpunkte (Chat, Orakel, Finder, Empfehlungen) brauchen Login oder ein Limit (z. B. 10 bis 20 Aufrufe pro Stunde und IP), eine Obergrenze für Eingabelänge und Dateigröße und akzeptieren vom Client nur die Rollen user und assistant.
- Zeilenzugriffsregeln (RLS) prüfen: keine offenen Lesezugriffe auf Personendaten, keine WITH CHECK (true) bei Einträgen, die andere betreffen. Geheime Schlüssel nur serverseitig.
- Formulare mit öffentlichem Insert: Honeypot, Limit pro IP, eindeutige E-Mail, Einwilligungs-Checkbox mit Zeitstempel.

2. Ehrlichkeit
- Erfundene Zahlen, Zitate, Bewertungen, Kundennamen, Anbieter, Live-Ticker nur mit sichtbarem Label "Beispiel" oder entfernen. Nie "echte" Reaktionen oder "über X Kunden" ohne echte Daten.
- Funktionen, die nichts speichern oder tun (tote Buttons, Newsletter-Attrappe), entweder verdrahten oder ausblenden bzw. klar "folgt" nennen. Kein Erfolg anzeigen, wenn das Speichern fehlschlug.
- Aussagen zu Preisen, Versand, Zahlung, Sicherheit, Daten in der EU nur, wenn sie stimmen. Keine Gewinn-, Rendite- oder Wirkungsversprechen.

3. Aussehen und Bedienung
- Mobil (390 px) zuerst: Navigation als Menü (Sheet) mit gruppierten Punkten, maximal 6 Hauptpunkte, nichts läuft über oder bricht um. Touch-Ziele mindestens 44 px.
- Schrift mindestens 13 px für Fließtext (Mikrotexte nie unter 11 px), Kontrast mindestens 4,5:1, besonders Gold/Grau auf Hintergrundbildern.
- Emojis als UI-Icons durch lucide-Icons ersetzen. Klickbare Karten, Karten-Orte und Chips per Tastatur bedienbar (tabIndex, Enter, aria-pressed, aria-expanded).
- Laufende Animationen und Ticker: Pause bei Hover/Fokus und prefers-reduced-motion beachten.

4. Technik und SEO
- <html lang> passend zur Sprache (de), deutsche 404- und Fehlerseite, keine Reste wie twitter:site "@Lovable" oder alte Domains/Marken.
- Jede Route mit eigenem Titel (max. 60 Zeichen), Beschreibung (max. 155), absoluter canonical-URL und og:image; Login- und Admin-Seiten noindex. Detailseiten mit echten Titeln aus den Daten.
- Große Bilder zu WebP in passender Größe, lazy laden.
- Tests (Vitest) für die wichtigsten Regeln und Abläufe, ein test-Script in package.json; alle Tests müssen bestehen.
- AGENTS.md und roadmap.md auf den aktuellen Stand bringen.

Am Ende: Seiten auf Computer und Handy im Browser durchklicken und kurz berichten.

PHASE 2 – Projektaufgaben in dieser Reihenfolge:
1. Kontaktformular mit echter Speicherung: kontakt.tsx setzt nur sent=true. Verbinde es mit einer Server-Funktion, die die Anfrage in einer Tabelle leads speichert (RLS: nur Admin liest), Einwilligung und Honeypot enthält und eine E-Mail an {ADMIN_EMAIL} sendet. Zeige im Admin-Bereich eine Lead-Liste.
2. Terminbuchung speichern: Der BookingDialog (booking-dialog.tsx) simuliert nur. Speichere Name, E-Mail, Datum, Uhrzeit in leads, verhindere Doppelbuchungen, sende Bestätigungsmail.
3. KI-Beratung schützen: recommend in advisor.functions.ts ist ohne Login und Limit aufrufbar. Rate-Limit 5 pro Stunde und IP, Honeypot, Eingabelängen begrenzen; Modell prüfen (openai/gpt-6-astra).
4. Beispieldaten ehrlich kennzeichnen: Der Trigger create_sample_project legt für jeden neuen Kunden ein Beispielprojekt mit erfundenem Fortschritt (55 %) an: entfernen oder als „Beispiel“ kennzeichnen. Demos sichtbar als „Demo mit Beispieldaten“, erfundene Wartezeiten und Preise in site-data.ts durch neutrale Platzhalter ersetzen.
5. Sprache und Hero: lang="de" in __root.tsx, deutsche 404- und Fehlerseite, Impressum und Datenschutz im Footer als echte Links (site-shell.tsx), Hero rechts mit Produktbild oder Demo-Vorschau.

PHASE 3 – Ausbau Richtung 9,5:
- Lead-Pipeline im Admin (neu, kontaktiert, Angebot, gewonnen), E-Mail-Bestätigung an Interessenten.
- Echte Demo-Vorschau im Hero, Preisrechner mit PDF-Angebot gespeichert, Kundenportal-Erinnerungen.
- Blog/Ratgeber mit 3 Beiträgen, strukturierte Daten, Lighthouse 90+.
- Playwright-Test: Kontakt → Lead → Admin-Ansicht.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Echte Kundenreferenzen und Leistungsbeschreibungen liefern.; Impressum/Datenschutz-Links prüfen lassen.
```
