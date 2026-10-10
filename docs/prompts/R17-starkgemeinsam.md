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

## R17-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt StarkGemeinsam. Aktuelle Note ca. 6,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,0+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Newsletter wirklich speichern: src/components/brand/Newsletter.tsx ruft nur preventDefault. Speichere E-Mail und Einwilligung in newsletter_signups (anon darf nur einfügen, Unique auf E-Mail), zeige Bestätigung; dasselbe Formular auf /contact.
2. Shopify-Ausfall abfangen: Die Startseite lädt Produkte im Loader (ensureQueryData); bei Shopify-Fehler (auch 402) fällt die ganze Seite in die Fehlerseite. Fange Fehler in index.tsx und shop.tsx ab und zeige die Seite ohne Produktraster mit Hinweis.
3. Tote Navigation und Platzhalter: Blende Search, Account, Wishlist und das gesperrte Herz in Layout.tsx aus, bis sie funktionieren; Abstand zwischen STORIES und SEARCH, Kontrast der hellgrauen Links. Platzhaltertexte („werden vor Launch ergänzt“) durch echte Kontaktadresse ersetzen, Social-Links nur verlinken, wenn sie existieren.
4. Bilder kennzeichnen, echte Produktfotos: Kennzeichne generierte Bilder sichtbar als „Konzept-Artwork“. Ersetze in ProductGrid.tsx die GarmentPreview durch das erste Shopify-Produktfoto, sobald vorhanden; Produktbild der Produktseite mit sinnvollem alt statt nur sr-only-Text.
5. SEO und Tests: og:image und Produkt-Schema (JSON-LD) in product.$handle.tsx, Vitest-Tests für Voting und Loader-Fehlerfall.

PHASE 3 – Ausbau Richtung 9,5:
- Shopify-Checkout freischalten (wenn Launch), Newsletter-Anbindung, Wunschliste und Suche funktionsfähig.
- Fehlertolerante Loader, Produktfotos aus Shopify, Produkt-Schema, Sitemap.
- Voting mit Konto, Tests, Lighthouse 90+.
- Nachhaltigkeitsangaben mit Beleg oder entfernen.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Echte Produkte, Preise, Fotos und Social-Kanäle bereitstellen.; Impact-Aussagen belegen.
```
