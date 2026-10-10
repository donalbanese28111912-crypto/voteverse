# R24 – PunaKI Handwerker Shop

- Lovable-Projekt-ID: `a2ddadf7-7c49-4271-8b85-aee53581c8ce`
- Lage: Note 7,5. Kein Weg vom Warenkorb zum Betrieb (Checkout gesperrt).
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R24-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R24-01 · Anfrageformular im Checkout
Priorität: KRITISCH · Status: offen

```
Projekt: PunaKI Handwerker Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ergänze auf /checkout ein Anfrageformular (Name, Firma, E-Mail, Telefon, Wunschtermin), das Warenkorb und Personalisierung in einer Tabelle speichert, mit Bestätigungsseite, Einwilligung und Spam-Schutz (Honeypot, Limit pro IP).

Fertig, wenn: Anfrage wird gespeichert und bestätigt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R24-02 · SEO und Produkt-Schema
Priorität: wichtig · Status: offen

```
Projekt: PunaKI Handwerker Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In __root.tsx og:image, canonical; auf /produkt/$id JSON-LD Product ohne Preisangabe, solange Musterpreise gelten.

Fertig, wenn: Metadaten und Schema vorhanden. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R24-03 · Hero und Bilder
Priorität: wichtig · Status: offen

```
Projekt: PunaKI Handwerker Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Hero auf /: Adler-Stempel verkleinern, „Punaki Original Collection“ mit mindestens 4,5:1 Kontrast, 390 px prüfen. Rund 500 JPGs in src/assets zu WebP in passender Größe, lazy laden.

Fertig, wenn: Hero lesbar, Bilder optimiert. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R24-04 · Suche und Beschreibung
Priorität: Verbesserung · Status: offen

```
Projekt: PunaKI Handwerker Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Such-Lupe im Header als echtes Suchfeld, das q in /shop setzt. Projektbeschreibung auf die tatsächliche Artikelzahl (48) aktualisieren.

Fertig, wenn: Suche funktioniert, Beschreibung stimmt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
