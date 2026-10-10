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

## R22-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Die 13 Illuminaten. Aktuelle Note ca. 7,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Chronik mobil bedienbar: Das 24-Spalten-Raster in chronik.tsx ist bei 390 px unbenutzbar (Felder ca. 14 px). Ersetze es mobil durch ein horizontal scrollbares Band oder Kapitelgruppen je Buch mit mindestens 40 px Touch-Fläche; Karten-Orte per Tastatur bedienbar mit aria-label.
2. Navigation: Die Desktop-Navigation (12 Punkte) bricht schon bei 1920 px um, auch das Logo. In site-chrome.tsx erst ab xl anzeigen, in 4 Gruppen (Welt, Figuren, Krieg, Mehr) gliedern, Logo darf nicht umbrechen.
3. Orakel und RLS: askOracle auf 10 Fragen pro Stunde und IP, Beispiele aus allen vier Bänden. Dokumentiere und prüfe die RLS-Policies von characters, houses, war_days, products (anon nur lesen) und lege sie als Migration im Repo ab (drizzle/schema.ts ist leer).
4. Kompass erweitern: Gewichte im Kompass (kompass.tsx) alle 48 Figuren, ergänze Fragen, zeige einen Zweitplatz.
5. Namen, Metadaten: Klär die Schreibweise des Helden (Jesus Alba de Zeus / zeus-alba-del-alexander) in Daten und Profil, deutsche 404 und og:image, Kleinschrift 0,7 rem erhöhen.

PHASE 3 – Ausbau Richtung 9,5:
- Mobile Chronik, gruppierte Navigation, Kompass mit allen 48 Figuren.
- RLS-Policies als Migration im Repo, Tests für Benennung und Kapitelszenen.
- Bilder zu Figuren und Häusern, Lighthouse 90+, deutsche Fehlerseiten.
- Fanartikel klar als Konzept oder mit echten Preisen.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Bildmaterial für Figuren liefern.; Umgang mit realen Institutionen und religiösen Figuren entscheiden.
```
