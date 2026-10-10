# R10 – Lucky Star Numbers

- Lovable-Projekt-ID: `58ea6980-e37b-4a97-bceb-7efcf3e55f84`
- Lage: Note 6. Chat ohne Limit, irreführende Begriffe, kein 18+-Gate.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R10-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R10-01 · Chat und Lernspeicher absichern
Priorität: KRITISCH · Status: offen

```
Projekt: Lucky Star Numbers. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: /api/chat hat kein Login, kein Limit und bis zu 50 Werkzeugschritte. Verlange Login oder höchstens 20 Nachrichten pro Stunde und IP, begrenze stepCountIs auf 8, begrenze das Feld personal. Verlange Login oder Signatur für logCombinations und runEvaluation in learning.functions.ts, damit niemand die globale Statistik fälscht.

Fertig, wenn: Chat und Lernspeicher nur mit Limit/Login; Test. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R10-02 · Irreführende Begriffe entschärfen
Priorität: KRITISCH · Status: offen

```
Projekt: Lucky Star Numbers. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ersetze „Analyse-Score x/100“, „Personal AI“, „KI-Optimierung“, „Historisch beste Strategie“, „Gelernte Gewichtung“ durch neutrale Begriffe („Datenabgleich“, „Vergangenheitsvergleich“) und setze neben jeden Score „sagt nichts über Gewinnchancen“. Kennzeichne die gelernte Gewichtung als nicht aussagekräftig.

Fertig, wenn: Keine Begriffe mehr, die Gewinnchancen suggerieren. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R10-03 · 18+-Hinweis
Priorität: KRITISCH · Status: offen

```
Projekt: Lucky Star Numbers. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Führe beim ersten Besuch ein 18+-Banner mit Bestätigung und Link zu check-dein-spiel.de ein; BZgA-Hotline 0800 1 372 700 bleibt im Footer.

Fertig, wenn: Banner erscheint einmal, Bestätigung wird gemerkt (mit try/catch bei localStorage). Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R10-04 · Navigation und Hero
Priorität: wichtig · Status: offen

```
Projekt: Lucky Star Numbers. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Fasse die 22 Navigationspunkte in AppShell.tsx in 6 Gruppen zusammen (Start, Tipps, Analyse, Scheine, Lucky, Konto). Verschiebe den schwebenden Lucky-Button so, dass er auf 390 px nichts verdeckt. Entscheide im Hero eine Hauptaktion.

Fertig, wenn: Navigation läuft nicht über; kein verdeckter Inhalt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R10-05 · Zähler, Sprache, Tests
Priorität: Verbesserung · Status: offen

```
Projekt: Lucky Star Numbers. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Besucherzähler über eine Serverfunktion mit Limit statt direktem UPDATE für anon. lang="de" und deutsche 404 in __root.tsx. Ergänze Tests für Backtesting-Texte und Limits.

Fertig, wenn: Zähler nicht manipulierbar, lang gesetzt, Tests laufen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R10-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Lucky Star Numbers. Aktuelle Note ca. 6,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 7,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Chat und Lernspeicher absichern: /api/chat hat kein Login, kein Limit und bis zu 50 Werkzeugschritte. Verlange Login oder höchstens 20 Nachrichten pro Stunde und IP, begrenze stepCountIs auf 8, begrenze das Feld personal. Verlange Login oder Signatur für logCombinations und runEvaluation in learning.functions.ts, damit niemand die globale Statistik fälscht.
2. Irreführende Begriffe entschärfen: Ersetze „Analyse-Score x/100“, „Personal AI“, „KI-Optimierung“, „Historisch beste Strategie“, „Gelernte Gewichtung“ durch neutrale Begriffe („Datenabgleich“, „Vergangenheitsvergleich“) und setze neben jeden Score „sagt nichts über Gewinnchancen“. Kennzeichne die gelernte Gewichtung als nicht aussagekräftig.
3. 18+-Hinweis: Führe beim ersten Besuch ein 18+-Banner mit Bestätigung und Link zu check-dein-spiel.de ein; BZgA-Hotline 0800 1 372 700 bleibt im Footer.
4. Navigation und Hero: Fasse die 22 Navigationspunkte in AppShell.tsx in 6 Gruppen zusammen (Start, Tipps, Analyse, Scheine, Lucky, Konto). Verschiebe den schwebenden Lucky-Button so, dass er auf 390 px nichts verdeckt. Entscheide im Hero eine Hauptaktion.
5. Zähler, Sprache, Tests: Besucherzähler über eine Serverfunktion mit Limit statt direktem UPDATE für anon. lang="de" und deutsche 404 in __root.tsx. Ergänze Tests für Backtesting-Texte und Limits.

PHASE 3 – Ausbau Richtung 9,5:
- Funktionen: Erwartungswert-Rechner, Beliebtheits-Filter (seltener gewählte Kombinationen), Realitätscheck (Strategie gegen Zufall im Rückvergleich), Monatslimit für Einsätze.
- Numerologie/Astrologie klar als Unterhaltung kennzeichnen, nicht als bessere Zahlen.
- 18+-Gate, Spielerschutz-Hinweise, Link zu check-dein-spiel.de, Pause-Funktion.
- Navigation auf 6 Gruppen, Tests für Rückvergleich und Limits.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Rechtliche Prüfung (Glücksspielwerbung, Gewinnaussagen).; Entscheiden, ob Tippgemeinschaft angeboten wird (Erlaubnispflicht prüfen).
```
