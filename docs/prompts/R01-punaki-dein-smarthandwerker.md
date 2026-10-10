# R01 – PunaKI – dein SmartHandwerker

- Lovable-Projekt-ID: `52a1eaf2-119b-4197-9a30-739f35d61ab2`
- Lage: VERÖFFENTLICHT. Note 6,5. Erfundene Zahlen wirken echt; Notfall-KI ohne Limit; Altmarke projob im Code.
- Veröffentlicht: JA (live)

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R01-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R01-01 · Erfundene Zahlen, Ticker und Erfolgsgeschichte entfernen oder kennzeichnen
Priorität: KRITISCH · Status: offen

```
Projekt: PunaKI – dein SmartHandwerker. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In src/lib/mock-data.ts und auf der Startseite (src/routes/index.tsx) stehen erfundene Angaben: „über 400 Handwerksbetriebe“, „rund 2.100 Aufträge“, Ticker-Meldungen und eine Erfolgsgeschichte mit Fantasiename, Zitat und Unsplash-Foto. Entferne sie. Alternativ zeige sie nur mit deutlich sichtbarem Label „Beispiel“ oder mit echten Werten aus der Datenbank. Sprich nirgends von Kunden, Betrieben oder Aufträgen, die nicht belegt sind.

Fertig, wenn: Keine unbelegte Zahl, kein Fantasiename ohne „Beispiel“-Label mehr auf der Startseite. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R01-02 · KI-Funktionen begrenzen (Notfall und Analyse)
Priorität: KRITISCH · Status: offen

```
Projekt: PunaKI – dein SmartHandwerker. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die öffentliche KI-Funktion auf /notfall und analysiereAuftrag in src/lib/ki-analyse.functions.ts haben kein Limit. Begrenze auf 10 Aufrufe pro Stunde und IP, Bilder auf höchstens 4 MB und prüfe Dateityp und Länge der Eingaben. Bei Überschreitung eine verständliche deutsche Meldung.

Fertig, wenn: Elfter Aufruf in einer Stunde wird abgelehnt, großes Bild wird abgelehnt, Test vorhanden. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R01-03 · Altmarke und Alt-Domain ersetzen, Metadaten
Priorität: wichtig · Status: offen

```
Projekt: PunaKI – dein SmartHandwerker. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ersetze projob-smartmeister-ai.lovable.app und presse@projob.ai in index.tsx und allen anderen Dateien durch die aktuelle PunaKI-Adresse. Setze og:image auf public/punaki-social.png der Live-Domain, canonical absolut, deutsche 404- und Fehlerseite in __root.tsx.

Fertig, wenn: Suche nach „projob“ im Code ergibt keine Treffer mehr; og:image zeigt auf die aktuelle Domain. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R01-04 · Newsletter speichern und Mobilmenü
Priorität: wichtig · Status: offen

```
Projekt: PunaKI – dein SmartHandwerker. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Der Newsletter-Kasten auf der Startseite speichert nichts. Lege eine Tabelle newsletter_signups mit E-Mail, Einwilligung, Zeitstempel und Double-Opt-in-Status an (anon darf nur einfügen, Unique auf E-Mail) und verdrahte das Formular. Ergänze unter md ein Mobilmenü (Sheet) mit allen Header-Links.

Fertig, wenn: Anmeldung landet in der Tabelle, Bestätigung sichtbar, Menü auf 390 px bedienbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R01-05 · Express-Suche und Startmodus konsistent machen, Hero-Video
Priorität: Verbesserung · Status: offen

```
Projekt: PunaKI – dein SmartHandwerker. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die Express-Suche zeigt Mock-Betriebe und sagt „nur Vorschau“, während launch-mode.ts alles freigibt. Zeige entweder echte Betriebe aus der Datenbank oder einen klaren Demo-Hinweis. Lade das Hero-Video nur einmal, ersetze die zweite Video-Sektion in AktuellesSektion durch ein Standbild, Logo im Hero ohne weißen Kasten.

Fertig, wenn: Keine widersprüchlichen Aussagen zum Startmodus; Video wird einmal geladen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R01-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt PunaKI – dein SmartHandwerker. Aktuelle Note ca. 6,5 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,0+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Erfundene Zahlen, Ticker und Erfolgsgeschichte entfernen oder kennzeichnen: In src/lib/mock-data.ts und auf der Startseite (src/routes/index.tsx) stehen erfundene Angaben: „über 400 Handwerksbetriebe“, „rund 2.100 Aufträge“, Ticker-Meldungen und eine Erfolgsgeschichte mit Fantasiename, Zitat und Unsplash-Foto. Entferne sie. Alternativ zeige sie nur mit deutlich sichtbarem Label „Beispiel“ oder mit echten Werten aus der Datenbank. Sprich nirgends von Kunden, Betrieben oder Aufträgen, die nicht belegt sind.
2. KI-Funktionen begrenzen (Notfall und Analyse): Die öffentliche KI-Funktion auf /notfall und analysiereAuftrag in src/lib/ki-analyse.functions.ts haben kein Limit. Begrenze auf 10 Aufrufe pro Stunde und IP, Bilder auf höchstens 4 MB und prüfe Dateityp und Länge der Eingaben. Bei Überschreitung eine verständliche deutsche Meldung.
3. Altmarke und Alt-Domain ersetzen, Metadaten: Ersetze projob-smartmeister-ai.lovable.app und presse@projob.ai in index.tsx und allen anderen Dateien durch die aktuelle PunaKI-Adresse. Setze og:image auf public/punaki-social.png der Live-Domain, canonical absolut, deutsche 404- und Fehlerseite in __root.tsx.
4. Newsletter speichern und Mobilmenü: Der Newsletter-Kasten auf der Startseite speichert nichts. Lege eine Tabelle newsletter_signups mit E-Mail, Einwilligung, Zeitstempel und Double-Opt-in-Status an (anon darf nur einfügen, Unique auf E-Mail) und verdrahte das Formular. Ergänze unter md ein Mobilmenü (Sheet) mit allen Header-Links.
5. Express-Suche und Startmodus konsistent machen, Hero-Video: Die Express-Suche zeigt Mock-Betriebe und sagt „nur Vorschau“, während launch-mode.ts alles freigibt. Zeige entweder echte Betriebe aus der Datenbank oder einen klaren Demo-Hinweis. Lade das Hero-Video nur einmal, ersetze die zweite Video-Sektion in AktuellesSektion durch ein Standbild, Logo im Hero ohne weißen Kasten.

PHASE 3 – Ausbau Richtung 9,5:
- Kunden-Login und Dashboard auf echte Datenbank umstellen (laut Roadmap offen), Aufträge, Angebote, Chat und Rechnungen mit Status.
- End-to-End-Test (Playwright) für den Hauptweg: Auftrag anlegen → KI-Diagnose → Angebot → Annahme.
- Fehlerüberwachung (Fehlerseite mit Meldeknopf, Server-Fehlerprotokoll), Lighthouse-Ziel 90+ auf Start, Auftrag, Notfall.
- Barrierefreiheit-Durchgang (Fokus, Labels, Kontraste) für alle Hauptseiten, deutsche Fehlermeldungen.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Echte Betriebe und Referenzen gewinnen, belegte Zahlen liefern.; DAC7- und Datenschutzprüfung durch Fachperson.; Zahlungs- und Provisionsmodell rechtlich prüfen.
```
