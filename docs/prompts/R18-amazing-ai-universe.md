# R18 – AMAZING AI UNIVERSE

- Lovable-Projekt-ID: `c6f44b72-aea1-4665-b40c-6f4cf893eb63`
- Lage: Note 6. Navigation läuft über; Zahlen widersprechen sich; Admin- und Wettbewerbsrecht klären.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R18-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R18-01 · Admin-Rechte und Checkout prüfen
Priorität: KRITISCH · Status: offen

```
Projekt: AMAZING AI UNIVERSE. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: useIsAdmin sichert /admin nur im Browser. Prüfe die RLS-Policies von products, sponsors, point_packages, transactions: alle Admin-Schreibzugriffe nur über RPCs mit has_role. Sperre den Checkout serverseitig, solange der Kauf deaktiviert ist (Stripe-Webhook existiert trotz „coming soon“).

Fertig, wenn: Admin-Schreibzugriffe nur mit Rolle; Kauf serverseitig gesperrt; Test. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R18-02 · Navigation und Icons
Priorität: wichtig · Status: offen

```
Projekt: AMAZING AI UNIVERSE. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die Hauptnavigation (Layout.tsx, 20+ Punkte) wird rechts abgeschnitten. Gruppiere in sechs Menüs (Entdecken, Wettbewerb, Figuren, Welt, Mitmachen, Mehr), ersetze Emoji-Icons durch lucide-Icons, Subtext lesbarer (nicht weit gesperrt in Grau).

Fertig, wenn: Navigation läuft bei keiner Breite über. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R18-03 · Zahlen und Marke vereinheitlichen
Priorität: wichtig · Status: offen

```
Projekt: AMAZING AI UNIVERSE. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Startseite „100+ Nationen“, Ranking „340 Figuren, 170 Reiche“, Plan „334 Figuren, 167 Reiche“: lege eine Konstante in src/data/universe.ts an und nutze sie überall. Beende den Rebrand von „Mr & Mrs“ zu „Amazing AI Universe“ in Texten und Metadaten.

Fertig, wenn: Alle Zahlen kommen aus einer Quelle, eine Marke. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R18-04 · Sprache und Metadaten
Priorität: Verbesserung · Status: offen

```
Projekt: AMAZING AI UNIVERSE. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: lang aus der gewählten Sprache serverseitig (Cookie), Titel und Beschreibung mindestens für Deutsch und Englisch; ca. 1.400 JPG-Dateien zu WebP, aus dem Storage laden; Tests für Tageslimit und Stimmenzählung.

Fertig, wenn: Metadaten pro Sprache, kleinere Ladegröße. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R18-05 · Recht klären (kein Code)
Priorität: KRITISCH · Status: offen

```
Projekt: AMAZING AI UNIVERSE. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Vor einer Aktivierung bezahlter Stimmen klären: Verbraucherrecht, Jugendschutz, Glücksspielrecht für bezahlte Stimmen im Wettbewerb und Markenähnlichkeit zu „Mister/Miss Universe“. Bis dahin Kauf von Stimmen im Code gesperrt lassen.

Fertig, wenn: Rechtliche Einschätzung liegt vor (durch den Betreiber). Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
