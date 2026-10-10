# R21 – One Plis (Echoes of Pelasgia)

- Lovable-Projekt-ID: `74177c7b-704b-4dfc-b006-9be1d710e8e8`
- Lage: Note 7. Suche mit toten Treffern, keine mobile Navigation, Orakel ohne Limit.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R21-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R21-01 · Suche reparieren
Priorität: KRITISCH · Status: offen

```
Projekt: One Plis (Echoes of Pelasgia). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In src/routes/search.tsx sind nur Personentreffer verlinkt. Mache jeden Treffer klickbar (Region → /illyria/$slug, Ereignis → /chronicle, Artefakt → /finds usw.), entferne den Startwert „Teuta“ und ignoriere Diakritika (Arbër = Arber).

Fertig, wenn: Alle Treffertypen führen zu einer Seite. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R21-02 · Mobile Navigation und Hell/Dunkel
Priorität: KRITISCH · Status: offen

```
Projekt: One Plis (Echoes of Pelasgia). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Baue in AppShell.tsx und auf der Startseite ein Mobilmenü (Sheet) mit allen Navigationsgruppen (ca. 30 Seiten) und speichere den Hell/Dunkel-Modus in localStorage (mit try/catch).

Fertig, wenn: Alle Seiten mobil erreichbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R21-03 · Orakel begrenzen
Priorität: wichtig · Status: offen

```
Projekt: One Plis (Echoes of Pelasgia). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: askOracle in src/lib/oracle.functions.ts: 10 Fragen pro Stunde und IP, nur die 20 relevantesten Archivzeilen an die KI senden statt des gesamten Kontexts.

Fertig, wenn: Limit greift, Kontext klein. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R21-04 · Name und Zeitraum vereinheitlichen
Priorität: wichtig · Status: offen

```
Projekt: One Plis (Echoes of Pelasgia). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ein Titel (One Plis / ILIR / Echoes of Pelasgia / Das Lied von Pelasgia) und eine Zeitspanne (1000 v. Chr.–1000 n. Chr., 10.000 v. Chr., 11.000 Jahre) in __root.tsx, Menü und Startseite; deutsche 404; og:image.

Fertig, wenn: Name und Zeitraum überall gleich. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R21-05 · Tastatur, Story-Schmiede, Tests
Priorität: Verbesserung · Status: offen

```
Projekt: One Plis (Echoes of Pelasgia). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Karten-Orte (map.tsx) und Registerkarten (registry.tsx) per Tastatur bedienbar (tabIndex, Enter, aria-expanded), Evidenz zusätzlich als Text; forge.tsx lädt Stimmen als Zählansicht statt aller Zeilen mit user_id; Herkunft von illyricum-reference-map.png prüfen; Vitest für consistency.ts und Zeitscheiben.

Fertig, wenn: Bedienung per Tastatur, keine user_id im Browser. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R21-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt One Plis (Echoes of Pelasgia). Aktuelle Note ca. 7,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Suche reparieren: In src/routes/search.tsx sind nur Personentreffer verlinkt. Mache jeden Treffer klickbar (Region → /illyria/$slug, Ereignis → /chronicle, Artefakt → /finds usw.), entferne den Startwert „Teuta“ und ignoriere Diakritika (Arbër = Arber).
2. Mobile Navigation und Hell/Dunkel: Baue in AppShell.tsx und auf der Startseite ein Mobilmenü (Sheet) mit allen Navigationsgruppen (ca. 30 Seiten) und speichere den Hell/Dunkel-Modus in localStorage (mit try/catch).
3. Orakel begrenzen: askOracle in src/lib/oracle.functions.ts: 10 Fragen pro Stunde und IP, nur die 20 relevantesten Archivzeilen an die KI senden statt des gesamten Kontexts.
4. Name und Zeitraum vereinheitlichen: Ein Titel (One Plis / ILIR / Echoes of Pelasgia / Das Lied von Pelasgia) und eine Zeitspanne (1000 v. Chr.–1000 n. Chr., 10.000 v. Chr., 11.000 Jahre) in __root.tsx, Menü und Startseite; deutsche 404; og:image.
5. Tastatur, Story-Schmiede, Tests: Karten-Orte (map.tsx) und Registerkarten (registry.tsx) per Tastatur bedienbar (tabIndex, Enter, aria-expanded), Evidenz zusätzlich als Text; forge.tsx lädt Stimmen als Zählansicht statt aller Zeilen mit user_id; Herkunft von illyricum-reference-map.png prüfen; Vitest für consistency.ts und Zeitscheiben.

PHASE 3 – Ausbau Richtung 9,5:
- Suche mit Diakritik-Toleranz und allen Treffertypen, mobile Navigation, gespeicherter Modus.
- Konsistenzprüfung der Zeitleiste als Test, ein Weltmodell (Name, Zeitraum) zentral.
- Tastaturbedienung für Karte und Register, Orakel mit Limit und kleinem Kontext.
- Studio-Import und Story-Schmiede mit angemeldeten Tests, Lighthouse 90+.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Quellen und Rechte der Karten prüfen.; Weltmodell (Name, Zeitraum) endgültig festlegen.
```
