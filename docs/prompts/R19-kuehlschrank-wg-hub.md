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
