# R04 – Eagle Diaspora Connect

- Lovable-Projekt-ID: `da528ec7-484d-4420-bbc9-1e5de97da7e3`
- Lage: Note 5. Profile und „anonyme“ Autoren in der Datenbank offen lesbar; Notification-Spam.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R04-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R04-01 · Profile datenschutzkonform absichern
Priorität: KRITISCH · Status: offen

```
Projekt: Eagle Diaspora Connect. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die Tabelle profiles ist laut Migration für alle lesbar (USING (true)). Beschränke den Lesezugriff auf angemeldete Nutzer und nur bei searchable=true. Verberge Herkunft und Stadt datenbankseitig (Ansicht oder Funktion), wenn show_origin oder show_city falsch sind. Passe src/routes/menschen.tsx und profil.$id.tsx an.

Fertig, wenn: Anonyme Besucher sehen keine Profile; versteckte Felder sind per API nicht lesbar; Tests. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R04-02 · Anonyme Beiträge wirklich anonym
Priorität: KRITISCH · Status: offen

```
Projekt: Eagle Diaspora Connect. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: author_id ist bei anonymen Beiträgen und Fragen öffentlich lesbar. Entferne es aus dem öffentlichen Lesezugriff und liefere es nur an Autor und Moderation über eine Ansicht.

Fertig, wenn: author_id ist für Fremde nicht abrufbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R04-03 · Notification-Spam verhindern, Admin-Test-Mail
Priorität: KRITISCH · Status: offen

```
Projekt: Eagle Diaspora Connect. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: notifications erlaubt Insert mit WITH CHECK (true): Jeder kann anderen Benachrichtigungen schicken. Erlaube nur serverseitige Einträge per Trigger bei echter Aktion (Antwort, Nachricht). Eine Migration vergibt Admin/Moderator an moderation@eagle-diaspora.test: entferne das und vergib Rollen für {ADMIN_EMAIL}.

Fertig, wenn: Nutzer können keine fremden Benachrichtigungen anlegen; Admin nur {ADMIN_EMAIL}. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R04-04 · Demo-Inhalte kennzeichnen
Priorität: wichtig · Status: offen

```
Projekt: Eagle Diaspora Connect. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Demo-Communities, Beiträge, Fragen, Events und Mitgliederzahlen (z. B. 8.420) sind erfunden. Zeige überall sichtbar „Beispielinhalt“ (is_demo) auf Startseite, Feed und Communities und nenne keine erfundenen Mitgliederzahlen.

Fertig, wenn: Jeder Demo-Inhalt trägt ein sichtbares Label. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R04-05 · Lesbarkeit für Nicht-Muttersprachler
Priorität: wichtig · Status: offen

```
Projekt: Eagle Diaspora Connect. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Schriften unter 12 px (z. B. Mobil-Navigation 9 px) auf mindestens 13 px erhöhen, Kontrast der Hero-Buttons auf 4,5:1, Emoji-Icons durch lucide ersetzen, Chips mit aria-pressed, einfache Sprache für den Slogan.

Fertig, wenn: Kontrast und Schriftgrößen bestehen die Prüfung; keine Emoji-Icons in Navigation. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R04-06 · Behörden-Lotse mehrsprachig, Passwort zurücksetzen, Tests
Priorität: Verbesserung · Status: offen

```
Projekt: Eagle Diaspora Connect. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Mache lotse.tsx sprachwählbar (Albanisch, Türkisch, Arabisch, Ukrainisch, Englisch) mit offizieller Quelle und Stand-Datum je Antwort. Ergänze Passwort-zurücksetzen, E-Mail-Bestätigung, Vitest-Tests für feed-rank.ts und eine roadmap.md.

Fertig, wenn: Lotse in fünf Sprachen, Passwort-Reset funktioniert, Tests laufen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R04-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Eagle Diaspora Connect. Aktuelle Note ca. 5,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 7,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Profile datenschutzkonform absichern: Die Tabelle profiles ist laut Migration für alle lesbar (USING (true)). Beschränke den Lesezugriff auf angemeldete Nutzer und nur bei searchable=true. Verberge Herkunft und Stadt datenbankseitig (Ansicht oder Funktion), wenn show_origin oder show_city falsch sind. Passe src/routes/menschen.tsx und profil.$id.tsx an.
2. Anonyme Beiträge wirklich anonym: author_id ist bei anonymen Beiträgen und Fragen öffentlich lesbar. Entferne es aus dem öffentlichen Lesezugriff und liefere es nur an Autor und Moderation über eine Ansicht.
3. Notification-Spam verhindern, Admin-Test-Mail: notifications erlaubt Insert mit WITH CHECK (true): Jeder kann anderen Benachrichtigungen schicken. Erlaube nur serverseitige Einträge per Trigger bei echter Aktion (Antwort, Nachricht). Eine Migration vergibt Admin/Moderator an moderation@eagle-diaspora.test: entferne das und vergib Rollen für {ADMIN_EMAIL}.
4. Demo-Inhalte kennzeichnen: Demo-Communities, Beiträge, Fragen, Events und Mitgliederzahlen (z. B. 8.420) sind erfunden. Zeige überall sichtbar „Beispielinhalt“ (is_demo) auf Startseite, Feed und Communities und nenne keine erfundenen Mitgliederzahlen.
5. Lesbarkeit für Nicht-Muttersprachler: Schriften unter 12 px (z. B. Mobil-Navigation 9 px) auf mindestens 13 px erhöhen, Kontrast der Hero-Buttons auf 4,5:1, Emoji-Icons durch lucide ersetzen, Chips mit aria-pressed, einfache Sprache für den Slogan.
6. Behörden-Lotse mehrsprachig, Passwort zurücksetzen, Tests: Mache lotse.tsx sprachwählbar (Albanisch, Türkisch, Arabisch, Ukrainisch, Englisch) mit offizieller Quelle und Stand-Datum je Antwort. Ergänze Passwort-zurücksetzen, E-Mail-Bestätigung, Vitest-Tests für feed-rank.ts und eine roadmap.md.

PHASE 3 – Ausbau Richtung 9,5:
- Meldeweg und Moderations-Dashboard (Meldungen, Sperren, Verwarnungen), Blockieren von Nutzern.
- E-Mail-Bestätigung und Passwort-Reset, Konto löschen mit Datenexport.
- Oberflächen-Mehrsprachigkeit (mindestens DE, EN, TR, SQ, AR inkl. RTL) mit Sprachumschalter.
- Tests für Feed-Ranking, RLS-Regeln (anonym darf keine Profile lesen) und Anmeldung.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Moderationsteam und Regeln festlegen.; Datenschutzkonzept und Löschfristen mit Fachperson abstimmen.
```
