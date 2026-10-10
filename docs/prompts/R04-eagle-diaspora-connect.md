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
