# R17 – StarkGemeinsam

- Lovable-Projekt-ID: `1f056417-f555-42ee-b272-53e4a3f5d238`
- Lage: Note 6. Newsletter ist eine Attrappe; Shopify-Ausfall kippt die Startseite.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R17-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R17-01 · Newsletter wirklich speichern
Priorität: KRITISCH · Status: offen

```
Projekt: StarkGemeinsam. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: src/components/brand/Newsletter.tsx ruft nur preventDefault. Speichere E-Mail und Einwilligung in newsletter_signups (anon darf nur einfügen, Unique auf E-Mail), zeige Bestätigung; dasselbe Formular auf /contact.

Fertig, wenn: Anmeldungen landen in der Tabelle. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R17-02 · Shopify-Ausfall abfangen
Priorität: KRITISCH · Status: offen

```
Projekt: StarkGemeinsam. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die Startseite lädt Produkte im Loader (ensureQueryData); bei Shopify-Fehler (auch 402) fällt die ganze Seite in die Fehlerseite. Fange Fehler in index.tsx und shop.tsx ab und zeige die Seite ohne Produktraster mit Hinweis.

Fertig, wenn: Seite bleibt bei Shopify-Fehler nutzbar; Test. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R17-03 · Tote Navigation und Platzhalter
Priorität: wichtig · Status: offen

```
Projekt: StarkGemeinsam. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Blende Search, Account, Wishlist und das gesperrte Herz in Layout.tsx aus, bis sie funktionieren; Abstand zwischen STORIES und SEARCH, Kontrast der hellgrauen Links. Platzhaltertexte („werden vor Launch ergänzt“) durch echte Kontaktadresse ersetzen, Social-Links nur verlinken, wenn sie existieren.

Fertig, wenn: Keine toten Menüpunkte, keine Platzhaltersätze. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R17-04 · Bilder kennzeichnen, echte Produktfotos
Priorität: wichtig · Status: offen

```
Projekt: StarkGemeinsam. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Kennzeichne generierte Bilder sichtbar als „Konzept-Artwork“. Ersetze in ProductGrid.tsx die GarmentPreview durch das erste Shopify-Produktfoto, sobald vorhanden; Produktbild der Produktseite mit sinnvollem alt statt nur sr-only-Text.

Fertig, wenn: Kennzeichnung sichtbar, Fotos werden bevorzugt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R17-05 · SEO und Tests
Priorität: Verbesserung · Status: offen

```
Projekt: StarkGemeinsam. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: og:image und Produkt-Schema (JSON-LD) in product.$handle.tsx, Vitest-Tests für Voting und Loader-Fehlerfall.

Fertig, wenn: Metadaten und Tests vorhanden. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
