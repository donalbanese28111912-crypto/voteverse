# R12 – ClipCraft: Dein Ideenpilot

- Lovable-Projekt-ID: `bb718471-2b36-492a-a824-443df130df72`
- Lage: Note 7. Limit umgehbar über ai_usage; Preissektion und Zahlung fehlen.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R12-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R12-01 · Nutzungslimit absichern
Priorität: KRITISCH · Status: offen

```
Projekt: ClipCraft: Dein Ideenpilot. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die Tabelle ai_usage erlaubt INSERT für jeden Nutzer mit freiem amount; mit negativem Wert lässt sich das Monatslimit zurücksetzen. Entferne die INSERT-Policy für authenticated und schreibe die Nutzung nur serverseitig mit dem Service-Role-Client in ideas.functions.ts, comments.functions.ts, scripts.functions.ts. Verbiete negative Werte per Check-Constraint.

Fertig, wenn: Client kann ai_usage nicht schreiben; Test mit negativem amount scheitert. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R12-02 · Prompt-Injection über Kommentare
Priorität: wichtig · Status: offen

```
Projekt: ClipCraft: Dein Ideenpilot. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In comments.functions.ts steht der Kommentartext ungefiltert im Prompt. Kürze und kapsle ihn und weise das Modell an, Anweisungen im Kommentar zu ignorieren.

Fertig, wenn: Kommentar mit Anweisung verändert das Verhalten nicht; Test. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R12-03 · Preissektion und Zahlung
Priorität: wichtig · Status: offen

```
Projekt: ClipCraft: Dein Ideenpilot. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Füge der Landing eine Preissektion (Free, Pro, Team aus src/lib/plans.ts) und ein Produktbild des Ideen-Generators hinzu. Aktiviere Stripe-Zahlung für Pro und Team mit Webhook, der user_plans setzt, und schalte die Buttons auf /tarife frei.

Fertig, wenn: Kauf möglich, Plan wird gesetzt, Preise auf der Landing. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R12-04 · Datenschutz-Aussage belegen
Priorität: wichtig · Status: offen

```
Projekt: ClipCraft: Dein Ideenpilot. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Belege oder entferne „Daten liegen sicher in der EU“ in src/routes/index.tsx.

Fertig, wenn: Keine unbelegte Aussage. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R12-05 · Tests und Metadaten
Priorität: Verbesserung · Status: offen

```
Projekt: ClipCraft: Dein Ideenpilot. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ergänze Vitest-Tests für plans.ts (Limits) und die Server-Funktionen, ein test-Script, eigene head-Metadaten auf /, /auth, /onboarding, Fortschrittsbalken für Kommentar-Analysen im Dashboard und auf /tarife.

Fertig, wenn: Tests laufen, jede Route hat Metadaten. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R12-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt ClipCraft: Dein Ideenpilot. Aktuelle Note ca. 7,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Nutzungslimit absichern: Die Tabelle ai_usage erlaubt INSERT für jeden Nutzer mit freiem amount; mit negativem Wert lässt sich das Monatslimit zurücksetzen. Entferne die INSERT-Policy für authenticated und schreibe die Nutzung nur serverseitig mit dem Service-Role-Client in ideas.functions.ts, comments.functions.ts, scripts.functions.ts. Verbiete negative Werte per Check-Constraint.
2. Prompt-Injection über Kommentare: In comments.functions.ts steht der Kommentartext ungefiltert im Prompt. Kürze und kapsle ihn und weise das Modell an, Anweisungen im Kommentar zu ignorieren.
3. Preissektion und Zahlung: Füge der Landing eine Preissektion (Free, Pro, Team aus src/lib/plans.ts) und ein Produktbild des Ideen-Generators hinzu. Aktiviere Stripe-Zahlung für Pro und Team mit Webhook, der user_plans setzt, und schalte die Buttons auf /tarife frei.
4. Datenschutz-Aussage belegen: Belege oder entferne „Daten liegen sicher in der EU“ in src/routes/index.tsx.
5. Tests und Metadaten: Ergänze Vitest-Tests für plans.ts (Limits) und die Server-Funktionen, ein test-Script, eigene head-Metadaten auf /, /auth, /onboarding, Fortschrittsbalken für Kommentar-Analysen im Dashboard und auf /tarife.

PHASE 3 – Ausbau Richtung 9,5:
- Stripe-Abo mit Webhook, Rechnungen, Plan-Wechsel, Kündigung.
- Plattform-Analytics-Schnittstelle als austauschbares Modul (Abruf, Speicherung), bis Zugänge vorliegen als „folgt“.
- Tests für Limits, KI-Funktionen (gemockt), Zahlungsstatus.
- Landing mit Preisen, Beispiel-Ausgabe, FAQ, Lighthouse 90+.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): EU-Datenhaltung und Auftragsverarbeitung prüfen.; Entwicklerzugänge der Plattformen beantragen.
```
