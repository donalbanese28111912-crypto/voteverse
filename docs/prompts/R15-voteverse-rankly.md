# R15 – Voteverse (Rankly)

- Lovable-Projekt-ID: `2808a071-54ef-4329-9855-668d486a677f`
- Lage: Note 6. Erfundene Startstimmen, schwacher Abstimmungsschutz, Wortfilter sperrt harmlose Wörter.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R15-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R15-01 · Erfundene Stimmen entfernen
Priorität: KRITISCH · Status: offen

```
Projekt: Voteverse (Rankly). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: base_up/base_down in ranking_items und a_base/b_base in battles enthalten Startwerte (z. B. 184.320 Stimmen für Tokio; „1.508.440 Stimmen“ auf der Startseite ist deren Summe). Setze auf 0, entferne die Beispielzahlen aus drizzle/migrations/0000_rankly_core.sql, zeige bei 0 Stimmen „Noch keine Stimmen“. Prüfe auch die runden Trending-Zahlen.

Fertig, wenn: Keine Stimmenzahl ohne echte Stimmen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R15-02 · Abstimmungsschutz härten
Priorität: KRITISCH · Status: offen

```
Projekt: Voteverse (Rankly). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: guest_cast_vote: lehne Stimmen ab, wenn ip_hash null ist, begrenze auf 10 Stimmen pro Minute und IP, verlange ab 10 Stimmen ein Captcha. Prüfe, dass Nutzer hinter gemeinsamer IP nicht fälschlich gesperrt werden.

Fertig, wenn: Neue Gast-ID umgeht das Limit nicht; Test. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R15-03 · Wortfilter korrigieren
Priorität: wichtig · Status: offen

```
Projekt: Voteverse (Rankly). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Entferne „mut“, „kar“, „kurve“, „behindert“, „transe“ aus BAD_WORDS in src/lib/moderation.ts und prüfe Beleidigungen nur im Satzkontext.

Fertig, wenn: Harmlose Wörter werden nicht gesperrt; Tests. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R15-04 · Ergebnisse und Tagesfrage
Priorität: wichtig · Status: offen

```
Projekt: Voteverse (Rankly). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Zeige in PollCard Balken und Prozente erst nach der eigenen Stimme oder ab 5 Stimmen. Ersetze die Schablonen-Tagesfrage durch eine redaktionelle. Korrigiere Plurale und „Über 1.000 Duelle“ in src/routes/index.tsx anhand der echten Zahlen.

Fertig, wenn: Keine „0 %“-Wand, Zahlen stimmen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R15-05 · Navigation und SEO
Priorität: Verbesserung · Status: offen

```
Projekt: Voteverse (Rankly). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Kopfzeile in site-header.tsx auf 5 Hauptpunkte plus „Mehr“. Eigene title, description, og:image für rankings.$slug, battles.$slug, fragen.$slug, kategorie.$slug; /sitemap.xml; prüfe, dass /points und /pro bei abgeschalteten Zahlungen gesperrt sind.

Fertig, wenn: Detailseiten mit Metadaten, Sitemap vorhanden. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
