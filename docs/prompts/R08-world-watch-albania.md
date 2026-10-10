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

## R08-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt World Watch Albania. Aktuelle Note ca. 6,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,0+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Freigabe und Mindestrelevanz wirksam machen: In src/lib/ingest.server.ts sind min_relevance und auto_publish wirkungslos (void-Zeilen). Speichere neue Artikel nur als published, wenn auto_publish an und relevance >= min_relevance ist, sonst als pending. Strittige Kategorien (kosovo, illyrians, dardanians, pelasgians, serbia, history) immer zuerst als pending.
2. Admin-Automatik und Zähler absichern: handle_new_user macht den ersten Nutzer zum Admin: entfernen, Admin über {ADMIN_EMAIL}. Begrenze increment_article_metric pro IP und Artikel.
3. Meldefunktion für Gäste: „Artikel melden“ scheitert für nicht angemeldete Besucher. Baue report_article(article_id, reason) als Funktion mit Limit pro IP, erlaubt für anon, und passe reportArticle in src/lib/db.ts an.
4. Katalog-Artikel nicht als frische Meldungen zeigen: Artikel mit origin='catalog' sehen unter „Latest reports“ wie frische Meldungen aus („vor 6 Stunden“, Read original). Kennzeichne sie als „Hintergrund“, ohne Zeitangabe und ohne Original-Button, und zeige sie nicht unter „Latest reports“.
5. Bilder, Quellenbewertung, Urheberrecht: Verlagsbilder nicht per Hotlink: nur Bilder mit nachgewiesener Lizenz, sonst Platzhalter (ArticleCard.tsx, article.$slug.tsx). Ersetze die automatische Quellenbewertung in src/lib/source-profile.ts durch ein Admin-Feld trust in sources; ohne Wert „Nicht bewertet“.
6. Artikel-SEO und robuster Abruf: Lade den echten Titel im Loader von article.$slug.tsx für title, og:title, og:image, canonical. Timeout 10 s je Feed (AbortSignal.timeout) und höchstens 20 KI-Aufrufe je Lauf; Schrift nicht unter 12 px.

PHASE 3 – Ausbau Richtung 9,5:
- Redaktionsansicht: Pending-Artikel prüfen, freigeben, ablehnen, Notiz; Quellenverwaltung mit Vertrauensstufe.
- Zusammenfassung aus Volltext nur, wenn Lizenz erlaubt; sonst Titel, Kurztext und Link.
- Monitoring für Abruf und KI-Kosten (Zähler, Tageslimit, Alarm bei Fehlern).
- Tests für Relevanzschwelle, Pending-Regel, Meldefunktion.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Redaktionelle Linie für strittige Themen festlegen.; Lizenzen für Bilder und Texte prüfen.
```
