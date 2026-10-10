# R19 – Kühlschrank WG Hub

- Lovable-Projekt-ID: `1b3db8a4-fa97-48fe-bff7-09c7b2ec23b4`
- Lage: Note 6. Likes, Kommentare, Teilen und Ton sind Attrappen; nur 9 von 30 Porträts.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R19-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R19-01 · Votes und Likes absichern
Priorität: KRITISCH · Status: offen

```
Projekt: Kühlschrank WG Hub. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: cast_vote und toggle_quote_like prüfen nicht, ob Figur oder Zitat existieren. Validiere, dass character_id und quote_id aus einer festen Liste stammen, begrenze Aufrufe pro voter-ID und Minute.

Fertig, wenn: Ungültige IDs werden abgelehnt, Limit greift. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R19-02 · Erfundene Reel-Zahlen und Likes
Priorität: wichtig · Status: offen

```
Projekt: Kühlschrank WG Hub. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Speichere Reel-Likes pro Reel über eine RPC toggle_reel_like mit voter-ID und zeige echte Zählungen in src/components/ReelsFeed.tsx; entferne die erfundene Zahl 48.210. Kommentar-Button verdrahten oder entfernen; Ton-Button durch „Ton folgt“ ersetzen.

Fertig, wenn: Keine erfundenen Zähler; keine tote Bedienung. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R19-03 · Teilen und Episodenlinks
Priorität: wichtig · Status: offen

```
Projekt: Kühlschrank WG Hub. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Teilen kopiert /#episode-id, aber kein Anker wird ausgewertet; Episodenkarten in bewohner.$id.tsx führen alle auf „/“. Baue /episode/$id mit eigenem Titel, Beschreibung und og:image und verlinke dorthin.

Fertig, wenn: Teilen-Link öffnet die richtige Episode. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R19-04 · Porträts und Mobil
Priorität: Verbesserung · Status: offen

```
Projekt: Kühlschrank WG Hub. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Erzeuge/ergänze Porträts für die 21 Figuren ohne Bild in src/data/portraits.ts (Emoji bleibt Reserve). Prüfe ReelsFeed.tsx bei 390 px (w-full max-w-[360px]). Der „● LIVE“-Badge bei Standbildern irreführend: ändern.

Fertig, wenn: Alle Figuren haben ein Porträt, kein Überlauf mobil. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R19-05 · Barrierefreiheit und Metadaten
Priorität: Verbesserung · Status: offen

```
Projekt: Kühlschrank WG Hub. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ticker in SiteHeader.tsx pausierbar bei Hover/Fokus und bei prefers-reduced-motion aus; Tab-Panels für die Live-Tabs; og:image, canonical, deutsche 404.

Fertig, wenn: WCAG 2.2.2 erfüllt, Metadaten vollständig. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R19-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Kühlschrank WG Hub. Aktuelle Note ca. 6,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 7,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Votes und Likes absichern: cast_vote und toggle_quote_like prüfen nicht, ob Figur oder Zitat existieren. Validiere, dass character_id und quote_id aus einer festen Liste stammen, begrenze Aufrufe pro voter-ID und Minute.
2. Erfundene Reel-Zahlen und Likes: Speichere Reel-Likes pro Reel über eine RPC toggle_reel_like mit voter-ID und zeige echte Zählungen in src/components/ReelsFeed.tsx; entferne die erfundene Zahl 48.210. Kommentar-Button verdrahten oder entfernen; Ton-Button durch „Ton folgt“ ersetzen.
3. Teilen und Episodenlinks: Teilen kopiert /#episode-id, aber kein Anker wird ausgewertet; Episodenkarten in bewohner.$id.tsx führen alle auf „/“. Baue /episode/$id mit eigenem Titel, Beschreibung und og:image und verlinke dorthin.
4. Porträts und Mobil: Erzeuge/ergänze Porträts für die 21 Figuren ohne Bild in src/data/portraits.ts (Emoji bleibt Reserve). Prüfe ReelsFeed.tsx bei 390 px (w-full max-w-[360px]). Der „● LIVE“-Badge bei Standbildern irreführend: ändern.
5. Barrierefreiheit und Metadaten: Ticker in SiteHeader.tsx pausierbar bei Hover/Fokus und bei prefers-reduced-motion aus; Tab-Panels für die Live-Tabs; og:image, canonical, deutsche 404.

PHASE 3 – Ausbau Richtung 9,5:
- Echte Videos/Audio für Reels statt Standbilder, Porträts für alle 30 Figuren, Episodenseiten mit Teilen.
- Moderation für Zitate, Spam-Schutz für Votes, Tests für RPCs.
- Barrierefreiheit: Untertitel, Pause für Ticker, Kontrast.
- Lighthouse 90+, og:image je Episode.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Videomaterial und Stimmen liefern.; Rechte an Figuren und Inhalten klären.
```
