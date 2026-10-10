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

## R24-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt PunaKI Handwerker Shop. Aktuelle Note ca. 7,5 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Anfrageformular im Checkout: Ergänze auf /checkout ein Anfrageformular (Name, Firma, E-Mail, Telefon, Wunschtermin), das Warenkorb und Personalisierung in einer Tabelle speichert, mit Bestätigungsseite, Einwilligung und Spam-Schutz (Honeypot, Limit pro IP).
2. SEO und Produkt-Schema: In __root.tsx og:image, canonical; auf /produkt/$id JSON-LD Product ohne Preisangabe, solange Musterpreise gelten.
3. Hero und Bilder: Hero auf /: Adler-Stempel verkleinern, „Punaki Original Collection“ mit mindestens 4,5:1 Kontrast, 390 px prüfen. Rund 500 JPGs in src/assets zu WebP in passender Größe, lazy laden.
4. Suche und Beschreibung: Such-Lupe im Header als echtes Suchfeld, das q in /shop setzt. Projektbeschreibung auf die tatsächliche Artikelzahl (48) aktualisieren.

PHASE 3 – Ausbau Richtung 9,5:
- Anfrage-/Bestellabwicklung im Admin mit Status, Angebots-PDF mit Nummer, Bestätigungsmail.
- Bilder zu WebP, Produkt-Schema, og:image, Lighthouse 90+.
- Tests für Konfigurator, Größenberater, PDF-Angebot.
- Suche im Header, Hero-Kontrast, Partnerbereich mit Freigabe.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Echte Preise und Lieferanten festlegen.; Zahlung und Abwicklung wählen.
```
