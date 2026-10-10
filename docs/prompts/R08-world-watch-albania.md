# R08 – World Watch Albania

- Lovable-Projekt-ID: `adb2e067-5745-4d77-afe4-7720b9e49b27`
- Lage: Note 6. Alles wird ungeprüft veröffentlicht, Admin-Automatik, Zähler-Missbrauch.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R08-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R08-01 · Freigabe und Mindestrelevanz wirksam machen
Priorität: KRITISCH · Status: offen

```
Projekt: World Watch Albania. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In src/lib/ingest.server.ts sind min_relevance und auto_publish wirkungslos (void-Zeilen). Speichere neue Artikel nur als published, wenn auto_publish an und relevance >= min_relevance ist, sonst als pending. Strittige Kategorien (kosovo, illyrians, dardanians, pelasgians, serbia, history) immer zuerst als pending.

Fertig, wenn: Neue Artikel unter der Schwelle sind pending; strittige Themen immer pending; Test. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R08-02 · Admin-Automatik und Zähler absichern
Priorität: KRITISCH · Status: offen

```
Projekt: World Watch Albania. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: handle_new_user macht den ersten Nutzer zum Admin: entfernen, Admin über {ADMIN_EMAIL}. Begrenze increment_article_metric pro IP und Artikel.

Fertig, wenn: Admin nur {ADMIN_EMAIL}; Zähler lassen sich nicht beliebig erhöhen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R08-03 · Meldefunktion für Gäste
Priorität: wichtig · Status: offen

```
Projekt: World Watch Albania. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: „Artikel melden“ scheitert für nicht angemeldete Besucher. Baue report_article(article_id, reason) als Funktion mit Limit pro IP, erlaubt für anon, und passe reportArticle in src/lib/db.ts an.

Fertig, wenn: Gäste können melden, Missbrauch ist limitiert. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R08-04 · Katalog-Artikel nicht als frische Meldungen zeigen
Priorität: wichtig · Status: offen

```
Projekt: World Watch Albania. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Artikel mit origin='catalog' sehen unter „Latest reports“ wie frische Meldungen aus („vor 6 Stunden“, Read original). Kennzeichne sie als „Hintergrund“, ohne Zeitangabe und ohne Original-Button, und zeige sie nicht unter „Latest reports“.

Fertig, wenn: Keine Katalogeinträge in den aktuellen Meldungen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R08-05 · Bilder, Quellenbewertung, Urheberrecht
Priorität: wichtig · Status: offen

```
Projekt: World Watch Albania. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Verlagsbilder nicht per Hotlink: nur Bilder mit nachgewiesener Lizenz, sonst Platzhalter (ArticleCard.tsx, article.$slug.tsx). Ersetze die automatische Quellenbewertung in src/lib/source-profile.ts durch ein Admin-Feld trust in sources; ohne Wert „Nicht bewertet“.

Fertig, wenn: Keine Hotlink-Bilder, keine automatische Vertrauensstufe. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R08-06 · Artikel-SEO und robuster Abruf
Priorität: Verbesserung · Status: offen

```
Projekt: World Watch Albania. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Lade den echten Titel im Loader von article.$slug.tsx für title, og:title, og:image, canonical. Timeout 10 s je Feed (AbortSignal.timeout) und höchstens 20 KI-Aufrufe je Lauf; Schrift nicht unter 12 px.

Fertig, wenn: Artikelseiten haben echte Metadaten; Abruf bricht nicht ab. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
