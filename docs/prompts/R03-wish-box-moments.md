# R03 – Wish Box Moments

- Lovable-Projekt-ID: `1659ee90-67b3-4339-94a8-c4f1cfb0f8fa`
- Lage: Note 5. Admin-Übernahme, KI ohne Limit, erfundene „echte“ Zitate.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R03-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R03-01 · SOFORT: Admin-Übernahme schließen
Priorität: KRITISCH · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: claim_admin_if_none() macht den ersten angemeldeten Nutzer zum Admin. Setze die Funktion per Migration außer Kraft, lege den Admin über die E-Mail {ADMIN_EMAIL} fest und entferne den Aufruf in src/routes/admin.tsx.

Fertig, wenn: Fremde Nutzer können sich nicht zum Admin machen; Admin ist {ADMIN_EMAIL}. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R03-02 · KI-Funktionen absichern
Priorität: KRITISCH · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: writeGreetingCard und suggestGifts (src/lib/greeting.functions.ts, gifts.functions.ts) haben weder Login noch Limit. Verlange Anmeldung oder höchstens 10 Aufrufe pro Stunde und IP, begrenze Eingabelängen.

Fertig, wenn: Limit greift, Test vorhanden. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R03-03 · Erfundene Zitate entfernen
Priorität: KRITISCH · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In src/routes/index.tsx (MOMENTS) stehen erfundene Namen, Zitate und Stockbilder unter „Echte Reaktionen aus der Wish-Box-Community“. Ersetze sie durch „So könnte es aussehen“ ohne Namen oder zeige nur echte, freigegebene Einsendungen. Streiche „Echte Reaktionen“. Die Galerie mischt Beispiele hinter echte Uploads: kennzeichne Beispiele als „Beispiel“.

Fertig, wenn: Nirgends mehr „echt“, wo es Beispiele sind. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R03-04 · Community-Uploads erst nach Freigabe
Priorität: wichtig · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Neue community_moments (Foto und Video bis 50 MB) erscheinen sofort öffentlich. Setze approved=false als Standard, zeige sie erst nach Freigabe im Admin, prüfe Dateityp serverseitig statt nach Endung, Größe begrenzen.

Fertig, wenn: Neue Uploads sind unsichtbar bis zur Freigabe. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R03-05 · Rabattcode, Empfehlungsbonus, Fotowürfel
Priorität: wichtig · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Der 15-%-Rabattcode wird erzeugt, aber im Warenkorb gibt es kein Feld zum Einlösen. Baue das Feld (serverseitig geprüft, cartTotals mit Rabatt). Entferne den Empfehlungsbonus und die Fantasie-Domain wishbox.app oder baue ihn wirklich. Speichere beim Fotowürfel Fotos und Widmung am Warenkorb-Artikel statt nur als Daten-URL im Browser. Im Hero-Würfel ein Beispielfoto je Seite einsetzen.

Fertig, wenn: Code lässt sich einlösen, Fotos gehören zum Artikel, Hero-Würfel nicht mehr dunkel. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R03-06 · Beispielprodukte ersetzen
Priorität: Verbesserung · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ersetze die 25 Beispielprodukte mit example.com-Links nach und nach durch echte Produkte mit Foto und echtem Shop-Link; bis dahin deutlich als „Beispiel“ kennzeichnen. Ergänze og:image und Tests.

Fertig, wenn: Keine unmarkierten Platzhalterprodukte. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R03-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Wish Box Moments. Aktuelle Note ca. 5,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 7,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. SOFORT: Admin-Übernahme schließen: claim_admin_if_none() macht den ersten angemeldeten Nutzer zum Admin. Setze die Funktion per Migration außer Kraft, lege den Admin über die E-Mail {ADMIN_EMAIL} fest und entferne den Aufruf in src/routes/admin.tsx.
2. KI-Funktionen absichern: writeGreetingCard und suggestGifts (src/lib/greeting.functions.ts, gifts.functions.ts) haben weder Login noch Limit. Verlange Anmeldung oder höchstens 10 Aufrufe pro Stunde und IP, begrenze Eingabelängen.
3. Erfundene Zitate entfernen: In src/routes/index.tsx (MOMENTS) stehen erfundene Namen, Zitate und Stockbilder unter „Echte Reaktionen aus der Wish-Box-Community“. Ersetze sie durch „So könnte es aussehen“ ohne Namen oder zeige nur echte, freigegebene Einsendungen. Streiche „Echte Reaktionen“. Die Galerie mischt Beispiele hinter echte Uploads: kennzeichne Beispiele als „Beispiel“.
4. Community-Uploads erst nach Freigabe: Neue community_moments (Foto und Video bis 50 MB) erscheinen sofort öffentlich. Setze approved=false als Standard, zeige sie erst nach Freigabe im Admin, prüfe Dateityp serverseitig statt nach Endung, Größe begrenzen.
5. Rabattcode, Empfehlungsbonus, Fotowürfel: Der 15-%-Rabattcode wird erzeugt, aber im Warenkorb gibt es kein Feld zum Einlösen. Baue das Feld (serverseitig geprüft, cartTotals mit Rabatt). Entferne den Empfehlungsbonus und die Fantasie-Domain wishbox.app oder baue ihn wirklich. Speichere beim Fotowürfel Fotos und Widmung am Warenkorb-Artikel statt nur als Daten-URL im Browser. Im Hero-Würfel ein Beispielfoto je Seite einsetzen.
6. Beispielprodukte ersetzen: Ersetze die 25 Beispielprodukte mit example.com-Links nach und nach durch echte Produkte mit Foto und echtem Shop-Link; bis dahin deutlich als „Beispiel“ kennzeichnen. Ergänze og:image und Tests.

PHASE 3 – Ausbau Richtung 9,5:
- Stripe-Checkout mit Webhook, Bestellstatus, Bestätigungsmail, Rechnung als PDF.
- Moderationswarteschlange für Community-Uploads (Freigeben/Ablehnen/Melden), Dateitypprüfung auf dem Server.
- Fotowürfel: Bestellvorlage mit Fotos, Widmung und Vorschau im Warenkorb, Export für die Produktion.
- End-to-End-Test: Geschenk finden → Warenkorb → Bezahlung (Testmodus).

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Echte Produkte, Händler und Versandbedingungen festlegen.; Widerrufs-/Versandangaben und Datenschutz für Foto-Uploads prüfen.
```
