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

## R14-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Puna Beauty Shop. Aktuelle Note ca. 6,5 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,0+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Bestellung speichern: „Bestellung anfragen“ leert nur den Warenkorb, das Abo liegt nur im localStorage. Speichere in einer Tabelle orders (Positionen, Kontaktdaten, Einwilligung), zeige eine Bestätigung, Abos erst nach Bestätigung durch den Shop.
2. Preisverwaltung serverseitig: Preise werden nur im Browser des Admins gespeichert, Kunden sehen sie nie. Verschiebe sie in eine Tabelle price_entries mit Admin-RLS (wie im Handwerker Shop) und lade sie in src/lib/store.tsx.
3. Admin aus der öffentlichen Navigation: Preise, Bewertungen verwalten, Produkte verwalten stehen in der öffentlichen Navigation (site-chrome.tsx). Zugang nur über /admin nach Login; Mobilmenü (Sheet) ergänzen.
4. Hauttyp-Finder begrenzen: recommendRoutine in finder.functions.ts auf Login oder 5 Aufrufe pro Stunde und IP begrenzen.
5. Hero und Metadaten: Geister-Schriftzug aus src/assets/hero.jpg entfernen, og:image ergänzen, offene Roadmap-Punkte (Foto-Upload-Test, echte Bewertungen) abarbeiten.

PHASE 3 – Ausbau Richtung 9,5:
- Bestellabwicklung: Bestellliste im Admin mit Status, Bestätigungsmail, Rechnung als PDF.
- Preise und Bestände serverseitig, Gutscheine geprüft; Bewertungen nur nach Kauf.
- Tests für Warenkorb, Gutschein, Preisänderung; og:image, Lighthouse 90+.
- Hauttyp-Finder mit Hinweis „kein medizinischer Rat“.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Zahlungs- und Versandanbieter wählen.; Kennzeichnung/Kosmetikrecht prüfen lassen.
```
