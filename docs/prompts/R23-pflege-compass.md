# R23 – Pflege Compass

- Lovable-Projekt-ID: `040da1aa-e2f3-4089-b40f-3d8be32812be`
- Lage: Note 7,5. Quellen und Stand pro Bundesland fehlen; lang-Attribut fest „en“.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R23-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R23-01 · Quelle und Stand je Bundesland
Priorität: KRITISCH · Status: offen

```
Projekt: Pflege Compass. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In bundeslaender.ts haben die 16 Behörden weder Link noch Quelle noch Datum. Ergänze je Bundesland url, quelle und stand und zeige sie im Fahrplan; entferne wertende Hinweise ohne Beleg („oft lange Laufzeiten“, „zügige Bearbeitung“).

Fertig, wenn: Jede Behördenangabe hat Quelle und Datum. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R23-02 · Fristen belegen
Priorität: KRITISCH · Status: offen

```
Projekt: Pflege Compass. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Gib Zeitangaben („3–9 Monate“) und die Widerspruchsfrist in roadmap.ts eine Quelle oder den Zusatz „Richtwert, bitte bei der Behörde prüfen“.

Fertig, wenn: Keine Frist ohne Quelle oder Richtwert-Hinweis. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R23-03 · Sprache und Schreibrichtung
Priorität: wichtig · Status: offen

```
Projekt: Pflege Compass. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In __root.tsx ist html lang="en" fest. Setze lang dynamisch zur gewählten Sprache, dir="rtl" bei Arabisch, Persisch, Hebräisch, Urdu.

Fertig, wenn: lang/dir passen zur Sprache. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R23-04 · Fortschritt speichern, Header
Priorität: wichtig · Status: offen

```
Projekt: Pflege Compass. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Der Fahrplan-Fortschritt in fahrplan.tsx geht beim Neuladen verloren: für angemeldete Nutzer in der Datenbank, sonst localStorage mit try/catch. Header-Button auf „Beratung“ kürzen (whitespace-nowrap), 390 px prüfen, leere Fläche der Hero-Karte füllen.

Fertig, wenn: Fortschritt bleibt erhalten, Header bricht nicht um. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R23-05 · Schriften lokal, Beratung ehrlich
Priorität: Verbesserung · Status: offen

```
Projekt: Pflege Compass. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Google Fonts lokal einbinden (Datenschutz). Auf der Beratungsseite klar sagen, dass keine Terminbuchung stattfindet, und Preise oder den Weg zur Preisauskunft nennen. KI-Modell openai/gpt-6-astra in dokument-check.functions.ts prüfen.

Fertig, wenn: Keine externen Schriften, Beratungsablauf klar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R23-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Pflege Compass. Aktuelle Note ca. 7,5 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Quelle und Stand je Bundesland: In bundeslaender.ts haben die 16 Behörden weder Link noch Quelle noch Datum. Ergänze je Bundesland url, quelle und stand und zeige sie im Fahrplan; entferne wertende Hinweise ohne Beleg („oft lange Laufzeiten“, „zügige Bearbeitung“).
2. Fristen belegen: Gib Zeitangaben („3–9 Monate“) und die Widerspruchsfrist in roadmap.ts eine Quelle oder den Zusatz „Richtwert, bitte bei der Behörde prüfen“.
3. Sprache und Schreibrichtung: In __root.tsx ist html lang="en" fest. Setze lang dynamisch zur gewählten Sprache, dir="rtl" bei Arabisch, Persisch, Hebräisch, Urdu.
4. Fortschritt speichern, Header: Der Fahrplan-Fortschritt in fahrplan.tsx geht beim Neuladen verloren: für angemeldete Nutzer in der Datenbank, sonst localStorage mit try/catch. Header-Button auf „Beratung“ kürzen (whitespace-nowrap), 390 px prüfen, leere Fläche der Hero-Karte füllen.
5. Schriften lokal, Beratung ehrlich: Google Fonts lokal einbinden (Datenschutz). Auf der Beratungsseite klar sagen, dass keine Terminbuchung stattfindet, und Preise oder den Weg zur Preisauskunft nennen. KI-Modell openai/gpt-6-astra in dokument-check.functions.ts prüfen.

PHASE 3 – Ausbau Richtung 9,5:
- Quelle, Link und Stand je Bundesland und je Frist; Prüfhinweis „Stand prüfen“ mit Datum.
- Fortschritt in Datenbank, lang/dir je Sprache, lokale Schriften, Header mobil.
- Tests für Fristen und Sprachwechsel erweitern, End-to-End-Test Beratungsanfrage.
- Barrierefreiheit-Audit, einfache Sprache als Option.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Fachliche Prüfung der Angaben durch Anerkennungsstelle oder Fachberatung.; Geprüfte Übersetzungen beauftragen.
```
