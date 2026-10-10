# R10 – Lucky Star Numbers

- Lovable-Projekt-ID: `58ea6980-e37b-4a97-bceb-7efcf3e55f84`
- Lage: Note 6. Chat ohne Limit, irreführende Begriffe, kein 18+-Gate.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R10-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R10-01 · Chat und Lernspeicher absichern
Priorität: KRITISCH · Status: offen

```
Projekt: Lucky Star Numbers. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: /api/chat hat kein Login, kein Limit und bis zu 50 Werkzeugschritte. Verlange Login oder höchstens 20 Nachrichten pro Stunde und IP, begrenze stepCountIs auf 8, begrenze das Feld personal. Verlange Login oder Signatur für logCombinations und runEvaluation in learning.functions.ts, damit niemand die globale Statistik fälscht.

Fertig, wenn: Chat und Lernspeicher nur mit Limit/Login; Test. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R10-02 · Irreführende Begriffe entschärfen
Priorität: KRITISCH · Status: offen

```
Projekt: Lucky Star Numbers. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ersetze „Analyse-Score x/100“, „Personal AI“, „KI-Optimierung“, „Historisch beste Strategie“, „Gelernte Gewichtung“ durch neutrale Begriffe („Datenabgleich“, „Vergangenheitsvergleich“) und setze neben jeden Score „sagt nichts über Gewinnchancen“. Kennzeichne die gelernte Gewichtung als nicht aussagekräftig.

Fertig, wenn: Keine Begriffe mehr, die Gewinnchancen suggerieren. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R10-03 · 18+-Hinweis
Priorität: KRITISCH · Status: offen

```
Projekt: Lucky Star Numbers. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Führe beim ersten Besuch ein 18+-Banner mit Bestätigung und Link zu check-dein-spiel.de ein; BZgA-Hotline 0800 1 372 700 bleibt im Footer.

Fertig, wenn: Banner erscheint einmal, Bestätigung wird gemerkt (mit try/catch bei localStorage). Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R10-04 · Navigation und Hero
Priorität: wichtig · Status: offen

```
Projekt: Lucky Star Numbers. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Fasse die 22 Navigationspunkte in AppShell.tsx in 6 Gruppen zusammen (Start, Tipps, Analyse, Scheine, Lucky, Konto). Verschiebe den schwebenden Lucky-Button so, dass er auf 390 px nichts verdeckt. Entscheide im Hero eine Hauptaktion.

Fertig, wenn: Navigation läuft nicht über; kein verdeckter Inhalt. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R10-05 · Zähler, Sprache, Tests
Priorität: Verbesserung · Status: offen

```
Projekt: Lucky Star Numbers. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Besucherzähler über eine Serverfunktion mit Limit statt direktem UPDATE für anon. lang="de" und deutsche 404 in __root.tsx. Ergänze Tests für Backtesting-Texte und Limits.

Fertig, wenn: Zähler nicht manipulierbar, lang gesetzt, Tests laufen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
