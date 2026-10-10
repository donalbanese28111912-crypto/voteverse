# R14 – Puna Beauty Shop

- Lovable-Projekt-ID: `6d31424e-e2a1-4e0c-91a3-8c84330a7972`
- Lage: Note 6,5. Bestellung und Preise werden nicht gespeichert.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R14-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R14-01 · Bestellung speichern
Priorität: KRITISCH · Status: offen

```
Projekt: Puna Beauty Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: „Bestellung anfragen“ leert nur den Warenkorb, das Abo liegt nur im localStorage. Speichere in einer Tabelle orders (Positionen, Kontaktdaten, Einwilligung), zeige eine Bestätigung, Abos erst nach Bestätigung durch den Shop.

Fertig, wenn: Bestellung in orders, Bestätigung sichtbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R14-02 · Preisverwaltung serverseitig
Priorität: KRITISCH · Status: offen

```
Projekt: Puna Beauty Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Preise werden nur im Browser des Admins gespeichert, Kunden sehen sie nie. Verschiebe sie in eine Tabelle price_entries mit Admin-RLS (wie im Handwerker Shop) und lade sie in src/lib/store.tsx.

Fertig, wenn: Preisänderung ist für alle Besucher sichtbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R14-03 · Admin aus der öffentlichen Navigation
Priorität: wichtig · Status: offen

```
Projekt: Puna Beauty Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Preise, Bewertungen verwalten, Produkte verwalten stehen in der öffentlichen Navigation (site-chrome.tsx). Zugang nur über /admin nach Login; Mobilmenü (Sheet) ergänzen.

Fertig, wenn: Besucher sehen keine Admin-Links. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R14-04 · Hauttyp-Finder begrenzen
Priorität: wichtig · Status: offen

```
Projekt: Puna Beauty Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: recommendRoutine in finder.functions.ts auf Login oder 5 Aufrufe pro Stunde und IP begrenzen.

Fertig, wenn: Limit greift. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R14-05 · Hero und Metadaten
Priorität: Verbesserung · Status: offen

```
Projekt: Puna Beauty Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Geister-Schriftzug aus src/assets/hero.jpg entfernen, og:image ergänzen, offene Roadmap-Punkte (Foto-Upload-Test, echte Bewertungen) abarbeiten.

Fertig, wenn: Hero sauber, og:image gesetzt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
