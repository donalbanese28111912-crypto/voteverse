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

## R15-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Voteverse (Rankly). Aktuelle Note ca. 6,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,0+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Erfundene Stimmen entfernen: base_up/base_down in ranking_items und a_base/b_base in battles enthalten Startwerte (z. B. 184.320 Stimmen für Tokio; „1.508.440 Stimmen“ auf der Startseite ist deren Summe). Setze auf 0, entferne die Beispielzahlen aus drizzle/migrations/0000_rankly_core.sql, zeige bei 0 Stimmen „Noch keine Stimmen“. Prüfe auch die runden Trending-Zahlen.
2. Abstimmungsschutz härten: guest_cast_vote: lehne Stimmen ab, wenn ip_hash null ist, begrenze auf 10 Stimmen pro Minute und IP, verlange ab 10 Stimmen ein Captcha. Prüfe, dass Nutzer hinter gemeinsamer IP nicht fälschlich gesperrt werden.
3. Wortfilter korrigieren: Entferne „mut“, „kar“, „kurve“, „behindert“, „transe“ aus BAD_WORDS in src/lib/moderation.ts und prüfe Beleidigungen nur im Satzkontext.
4. Ergebnisse und Tagesfrage: Zeige in PollCard Balken und Prozente erst nach der eigenen Stimme oder ab 5 Stimmen. Ersetze die Schablonen-Tagesfrage durch eine redaktionelle. Korrigiere Plurale und „Über 1.000 Duelle“ in src/routes/index.tsx anhand der echten Zahlen.
5. Navigation und SEO: Kopfzeile in site-header.tsx auf 5 Hauptpunkte plus „Mehr“. Eigene title, description, og:image für rankings.$slug, battles.$slug, fragen.$slug, kategorie.$slug; /sitemap.xml; prüfe, dass /points und /pro bei abgeschalteten Zahlungen gesperrt sind.

PHASE 3 – Ausbau Richtung 9,5:
- Optionale Konten (E-Mail) für Stimmenzählung ohne Mehrfachstimmen; Gäste mit schwächerem Gewicht.
- Moderations-Dashboard (Meldungen, Wortlisten pflegen), redaktionelle Tagesfrage mit Planung.
- Echte Ergebnis-Zeitverläufe, Sitemap, Detailseiten-SEO, Tests für Abstimmungslimits.
- Navigation vereinfachen, Lighthouse 90+.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Redaktion/Moderationsregeln festlegen.; Datenschutz für Gast-IDs und IP-Hash prüfen.
```
