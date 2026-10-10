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
