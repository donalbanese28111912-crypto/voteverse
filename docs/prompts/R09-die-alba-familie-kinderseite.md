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

## R09-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Die Alba Familie (Kinderseite). Aktuelle Note ca. 6,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,0+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. KI-Endpunkte absichern: /api/chat und /api/bedtime haben kein Login, kein Limit und keine Größenbegrenzung; /api/chat übernimmt Nachrichten mit beliebiger Rolle (auch system). Begrenze auf 20 Anfragen pro Stunde und IP, akzeptiere nur die Rollen user und assistant, höchstens 20 Nachrichten und 500 Zeichen je Nachricht, und filtere die KI-Ausgabe auf kindgerechte Inhalte.
2. Eltern-Hinweis und Löschfunktion: Texte von Kindern werden in chat_threads gespeichert. Zeige im Fragenbereich einen klaren Hinweis für Eltern (was gespeichert wird, warum) und biete „Alle Gespräche löschen“ an (src/components/alba/FragenChat.tsx).
3. Leichter Markdown-Renderer: Ersetze die schweren Streamdown-Plugins (mermaid, math, code, CJK) in FragenChat.tsx durch einen einfachen Markdown-Renderer für Chat-Antworten.
4. Videos, Quiz, Hero: Binde die YouTube-Videos ein oder zeige Vorschaulinks statt „Bald verfügbar“ (HomePage.tsx). Erweitere src/lib/quiz.ts auf mindestens 40 Fragen und 36 Sticker mit Abschluss-Zertifikat. Verschiebe den Titel im Hero so, dass er die Gesichter der Kinder nicht verdeckt, und erhöhe den Kontrast des Untertextes.
5. Zweisprachig und kindgerechte 404: Übersetze Quiz, Gute Nacht und Atelier ins Englische (analog /en) mit hreflang. 404- und Fehlerseite deutsch und kindgerecht.

PHASE 3 – Ausbau Richtung 9,5:
- Elternbereich: Einwilligung, Einsicht in Gespräche, Löschen, Altersgerechte Filter der KI-Ausgabe mit Testsatz.
- Inhaltsfilter-Test mit 30 kritischen Eingaben (Gewalt, Selbstverletzung, persönliche Daten) und sicherer Antwort.
- Mehrsprachigkeit der Unterseiten (DE/EN), Barrierefreiheit für Kinder (große Schrift, Vorlesen).
- Performance: Bilder zu WebP, Chat ohne schwere Plugins.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Datenschutz für Kinderdaten (Einwilligung der Eltern) rechtlich prüfen.; Echte Videos liefern.
```
