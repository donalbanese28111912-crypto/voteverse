# R09 – Die Alba Familie (Kinderseite)

- Lovable-Projekt-ID: `8db5c140-f94b-4caa-ac02-540f0d1ffdd0`
- Lage: Note 6. Kinderseite: KI ohne Limit, Prompt-Injection möglich, Kinderfragen werden gespeichert.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R09-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R09-01 · KI-Endpunkte absichern
Priorität: KRITISCH · Status: offen

```
Projekt: Die Alba Familie (Kinderseite). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: /api/chat und /api/bedtime haben kein Login, kein Limit und keine Größenbegrenzung; /api/chat übernimmt Nachrichten mit beliebiger Rolle (auch system). Begrenze auf 20 Anfragen pro Stunde und IP, akzeptiere nur die Rollen user und assistant, höchstens 20 Nachrichten und 500 Zeichen je Nachricht, und filtere die KI-Ausgabe auf kindgerechte Inhalte.

Fertig, wenn: system-Nachrichten vom Client werden ignoriert; Limits greifen; Test. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R09-02 · Eltern-Hinweis und Löschfunktion
Priorität: KRITISCH · Status: offen

```
Projekt: Die Alba Familie (Kinderseite). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Texte von Kindern werden in chat_threads gespeichert. Zeige im Fragenbereich einen klaren Hinweis für Eltern (was gespeichert wird, warum) und biete „Alle Gespräche löschen“ an (src/components/alba/FragenChat.tsx).

Fertig, wenn: Hinweis sichtbar, Löschen entfernt alle Threads des Geräts. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R09-03 · Leichter Markdown-Renderer
Priorität: wichtig · Status: offen

```
Projekt: Die Alba Familie (Kinderseite). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ersetze die schweren Streamdown-Plugins (mermaid, math, code, CJK) in FragenChat.tsx durch einen einfachen Markdown-Renderer für Chat-Antworten.

Fertig, wenn: Kleinere Ladegröße, Antworten bleiben formatiert. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R09-04 · Videos, Quiz, Hero
Priorität: wichtig · Status: offen

```
Projekt: Die Alba Familie (Kinderseite). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Binde die YouTube-Videos ein oder zeige Vorschaulinks statt „Bald verfügbar“ (HomePage.tsx). Erweitere src/lib/quiz.ts auf mindestens 40 Fragen und 36 Sticker mit Abschluss-Zertifikat. Verschiebe den Titel im Hero so, dass er die Gesichter der Kinder nicht verdeckt, und erhöhe den Kontrast des Untertextes.

Fertig, wenn: Videos sichtbar, Quiz erweitert, Hero lesbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R09-05 · Zweisprachig und kindgerechte 404
Priorität: Verbesserung · Status: offen

```
Projekt: Die Alba Familie (Kinderseite). Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Übersetze Quiz, Gute Nacht und Atelier ins Englische (analog /en) mit hreflang. 404- und Fehlerseite deutsch und kindgerecht.

Fertig, wenn: Alle Unterseiten in DE und EN, 404 kindgerecht. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
