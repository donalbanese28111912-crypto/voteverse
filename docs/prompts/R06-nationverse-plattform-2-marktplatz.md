# R06 – NationVerse Plattform 2 – Marktplatz

- Lovable-Projekt-ID: `8671a75d-1895-40d2-b60a-e6d0690f4360`
- Lage: Note 7,5 (eigene Einschätzung). Katalogtausch und Bilder werden gerade umgesetzt.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R06-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R06-01 · Katalogtausch und Bilder prüfen
Priorität: KRITISCH · Status: offen

```
Projekt: NationVerse Plattform 2 – Marktplatz. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Prüfe, dass 150 Nationen + 3 kosmische Coins im Katalog stehen, dass Äthiopien, Venezuela, Jemen, Kirgisistan, Laos, Tadschikistan, Barbados, Südsudan dabei sind (Belize, Lesotho, Kap Verde, Gambia, Zentralafrikanische Republik, Seychellen, Guinea-Bissau, Komoren entfernt) und dass Kroatien das Schachbrettwappen zeigt. Berichte die Zahl der Originalbilder und fehlenden Motive.

Fertig, wenn: Katalog stimmt, Zahlen im Bericht. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R06-02 · Diskretion prüfen
Priorität: KRITISCH · Status: offen

```
Projekt: NationVerse Plattform 2 – Marktplatz. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Suche in UI, Texten, Metadaten und Tests nach Stufenpreisen, Kurven, Verkaufszahlen, freien Plätzen, Stimmrechtszahlen und 88.888. Nichts davon darf sichtbar sein. Interne Konstanten dürfen bleiben.

Fertig, wenn: Keine Stufen-, Kurven- oder Verkaufsangaben im UI. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R06-03 · Coin-Bilder der 24 fehlenden Nationen einbinden
Priorität: wichtig · Status: offen

```
Projekt: NationVerse Plattform 2 – Marktplatz. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Binde die gelieferten Coin-Bilder ein (Dateiname = Land), setze das Metall je Bild, Rückseite folgt der Farbe. Fehlende bleiben als Rohling „Motiv folgt“.

Fertig, wenn: Fehlzähler sinkt auf die tatsächlich noch fehlenden Coins. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R06-04 · Angebote, Gegenangebote, Laufband testen
Priorität: wichtig · Status: offen

```
Projekt: NationVerse Plattform 2 – Marktplatz. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Teste Angebote (Nation, Menge, Preis, Laufzeit, Mindestkaufmenge), Gegenangebote, Selbstkauf-Sperre und das Laufband (nur neue Angebote, 10 Minuten Verzögerung). Beispieldaten bleiben „BEISPIEL“. Behebe Fehler, ergänze Tests.

Fertig, wenn: Alle Abläufe bestehen, Tests grün. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R06-05 · Link zu Plattform 1
Priorität: Verbesserung · Status: offen

```
Projekt: NationVerse Plattform 2 – Marktplatz. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ersetze den Platzhalter-Link zu Plattform 1 durch {URL_PLATTFORM_1}.

Fertig, wenn: Link führt zu Plattform 1. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R06-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt NationVerse Plattform 2 – Marktplatz. Aktuelle Note ca. 7,5 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Katalogtausch und Bilder prüfen: Prüfe, dass 150 Nationen + 3 kosmische Coins im Katalog stehen, dass Äthiopien, Venezuela, Jemen, Kirgisistan, Laos, Tadschikistan, Barbados, Südsudan dabei sind (Belize, Lesotho, Kap Verde, Gambia, Zentralafrikanische Republik, Seychellen, Guinea-Bissau, Komoren entfernt) und dass Kroatien das Schachbrettwappen zeigt. Berichte die Zahl der Originalbilder und fehlenden Motive.
2. Diskretion prüfen: Suche in UI, Texten, Metadaten und Tests nach Stufenpreisen, Kurven, Verkaufszahlen, freien Plätzen, Stimmrechtszahlen und 88.888. Nichts davon darf sichtbar sein. Interne Konstanten dürfen bleiben.
3. Coin-Bilder der 24 fehlenden Nationen einbinden: Binde die gelieferten Coin-Bilder ein (Dateiname = Land), setze das Metall je Bild, Rückseite folgt der Farbe. Fehlende bleiben als Rohling „Motiv folgt“.
4. Angebote, Gegenangebote, Laufband testen: Teste Angebote (Nation, Menge, Preis, Laufzeit, Mindestkaufmenge), Gegenangebote, Selbstkauf-Sperre und das Laufband (nur neue Angebote, 10 Minuten Verzögerung). Beispieldaten bleiben „BEISPIEL“. Behebe Fehler, ergänze Tests.
5. Link zu Plattform 1: Ersetze den Platzhalter-Link zu Plattform 1 durch {URL_PLATTFORM_1}.

PHASE 3 – Ausbau Richtung 9,5:
- Backend für Angebote und Gegenangebote (Tabellen mit RLS), Verifizierung des VIP-Status über Plattform 1 als Schnittstelle.
- Benachrichtigung bei Gegenangebot, Angebotsablauf und Erinnerungen.
- Tests: kein Stufen-/Kurven-/Verkaufsdatum im UI, Selbstkauf-Sperre, Mindestmenge.
- Lighthouse 90+, mobile Prüfung aller Marktplatz-Seiten.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Abwicklung/Treuhand rechtlich prüfen.; Echte Adresse und Betreiberangaben festlegen.
```
