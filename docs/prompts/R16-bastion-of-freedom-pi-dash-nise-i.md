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

## R16-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt BASTION OF FREEDOM – Pi Dash Nise I. Aktuelle Note ca. 7,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Warteliste zeigt falschen Erfolg: In src/components/bastion/waiting-list.tsx fängt catch Fehler nur mit console.info ab und zeigt trotzdem „Platz notiert“. Zeige Erfolg erst, wenn joinWaitingList wirklich gelingt, sonst „Bitte erneut versuchen“ mit erhaltenen Eingaben. Prüfe waiting-list.functions.ts: .inputValidator statt .validator.
2. Spam- und Datenschutz: waiting_list und concierge_requests: Unique-Index auf lower(email), Honeypot, 5 Anfragen pro Stunde und IP, Einwilligungs-Checkbox mit Link zur Datenschutzseite und Spalte consented_at.
3. Demo-Auktion entschärfen: Die Gebote steigen alle 12 Sekunden von selbst um 250 €, der Countdown startet bei jedem Aufruf neu. Beschrifte die Auktion als „Vorschau“ und stoppe Auto-Gebote und Neustart, bis es echte Daten gibt.
4. Metadaten, Sprache, Zertifikatsprüfung: Absolute canonical-URLs und og:image in allen head-Funktionen, html lang passend zur gewählten Sprache. verify_certificate auf 10 Abfragen pro Minute und IP begrenzen.
5. Startseite aufräumen: Das Kaiser-Bild erscheint zweimal; Futter-Band mit neutralem Platzhalter statt Wiederholung. Gold-auf-Schwarz-Kleingedrucktes im Kontrast auf 4,5:1, Navigation auf Hauptpunkte reduzieren.

PHASE 3 – Ausbau Richtung 9,5:
- Echte Warteliste mit Bestätigungsmail (Double-Opt-in), Admin-Export, Concierge-Anfragen mit Status.
- Zertifikatsregister mit echten Seriennummern, Abfrage mit Limit; Lagerbestand aus Datenbank.
- Auktion erst bei echten Daten; bis dahin Vorschau-Modus.
- Mehrsprachigkeit mit lang pro Sprache, Lighthouse 90+, Tests für Warteliste.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Echte Fotos, Lagerbestand, Seriennummern liefern.; Auktionsrecht und Datenschutz prüfen.
```
