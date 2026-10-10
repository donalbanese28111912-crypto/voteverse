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

## R13-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Puna Beauty Hub. Aktuelle Note ca. 5,5 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 7,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Tote Buttons verdrahten: Auf der Startseite (src/routes/index.tsx) hat der Mobilmenü-Button keine Funktion, „Launch vormerken“ hat keinen Handler und das Vormerk-Formular speichert nichts. Baue ein Menü (Sheet) mit allen Links, lege waitlist_signups an (E-Mail, Einwilligung, Zeitstempel) und verdrahte beides. Das Foto-Hochladen speichern und in der Suche nutzen oder das Büroklammer-Symbol entfernen.
2. Demo-Anbieterinnen kennzeichnen: Alle Anbieterinnen im Katalog (z. B. Amira K., 4,9 / 128 Bewertungen), Zitate und der „Gerade gebucht“-Ticker in src/data/puna.ts sind erfunden. Kennzeichne sie sichtbar als „Beispiel“ oder blende sie aus, bis echte Daten vorliegen.
3. Metadaten und Sprache: In __root.tsx lang="de", twitter:site „@Lovable“ entfernen, og:image, deutsche 404- und Fehlerseite.
4. Navigation aufräumen: Der Header hat 15 Links. Reduziere auf 5–6 Hauptlinks plus „Mehr“; Dashboard und Partnerbereich nur nach Login (site-header.tsx).
5. Support-Chat, Sprachen, Tests: Der Support-Chat gibt eine feste Antwort: ehrlich als „automatische Antwort“ kennzeichnen. 16 Sprachen sind gelistet, aber nur der Chat in 4 verfügbar: Liste auf tatsächlich verfügbare reduzieren. Tests für den Buchungsfluss ergänzen.

PHASE 3 – Ausbau Richtung 9,5:
- Buchungsfluss mit echten Anbieterinnen (Verfügbarkeit, Bestätigung, Absage), Bewertungen nur nach Buchung.
- Vormerkliste mit Export, Hochladen von Inspirationsfotos mit Speicherung.
- Sprachen: nur tatsächlich verfügbare, mit Umschalter; Tests für Buchung.
- Navigation auf 5–6 Punkte, Dashboard nach Login.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Echte Anbieterinnen gewinnen, Preise und Leistungen festlegen.; Zahlungs- und Stornobedingungen prüfen.
```
