# R20 – Creator's Hub AI

- Lovable-Projekt-ID: `3d4df38c-6a7e-4b6d-80f0-fecb227a0784`
- Lage: Note 6. Beschreibung verspricht mehr als vorhanden; Admin-Automatik prüfen.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R20-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R20-01 · Beschreibung und Funktionsumfang angleichen
Priorität: KRITISCH · Status: offen

```
Projekt: Creator's Hub AI. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die Beschreibung verspricht Videoproduktion und Automatisierung, es gibt aber keine Videos, keine KI, keine Plattformanbindung. Benenne ehrlich („Kanal- und Ideenverwaltung“) oder baue eine Tabelle videos mit Kanal, Titel, Status (Idee, Skript, Schnitt, Veröffentlicht) und Termin. Ersetze den manuellen „Verknüpft“-Schalter durch „noch nicht angebunden“.

Fertig, wenn: Beschreibung und Funktionen stimmen überein. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R20-02 · Admin-Automatik prüfen
Priorität: KRITISCH · Status: offen

```
Projekt: Creator's Hub AI. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Der erste Registrierte wird Admin. Prüfe, ob schon ein Admin existiert, deaktiviere die Automatik und lege {ADMIN_EMAIL} als Admin fest.

Fertig, wenn: Nur {ADMIN_EMAIL} ist Admin. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R20-03 · noindex, Metadaten, Fehlerseiten
Priorität: wichtig · Status: offen

```
Projekt: Creator's Hub AI. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: noindex auf /auth und alle _authenticated-Routen, twitter:site und author „Lovable“ entfernen, deutsche 404- und Fehlerseite.

Fertig, wenn: Login/Dashboard nicht indexierbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R20-04 · Editor als Dialog und Freigabe-Seite
Priorität: wichtig · Status: offen

```
Projekt: Creator's Hub AI. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Mache den Kanal-Editor zum shadcn-Sheet mit Fokusfalle, Escape, aria-label am Schließen-Button und höheren Kontrasten bei den Plattform-Chips. Die „Warte auf Freigabe“-Seite per Realtime-Abo auf user_roles neu laden.

Fertig, wenn: Editor per Tastatur bedienbar; Freigabe öffnet die Seite selbst. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R20-05 · Konflikte und Sortierung, Seed-Namen
Priorität: Verbesserung · Status: offen

```
Projekt: Creator's Hub AI. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Speichern mit updated_at-Prüfung („wurde zwischenzeitlich geändert“), Sortierung (Name, Phase, zuletzt geändert) und Mehrfachauswahl; Seed-Kanäle wie „Kleidungs-Steal“ und „Kinderkanal – Copy-Paste“ neutral umformulieren (Urheberrecht).

Fertig, wenn: Kein stilles Überschreiben, neutrale Namen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R20-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Creator's Hub AI. Aktuelle Note ca. 6,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 7,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Beschreibung und Funktionsumfang angleichen: Die Beschreibung verspricht Videoproduktion und Automatisierung, es gibt aber keine Videos, keine KI, keine Plattformanbindung. Benenne ehrlich („Kanal- und Ideenverwaltung“) oder baue eine Tabelle videos mit Kanal, Titel, Status (Idee, Skript, Schnitt, Veröffentlicht) und Termin. Ersetze den manuellen „Verknüpft“-Schalter durch „noch nicht angebunden“.
2. Admin-Automatik prüfen: Der erste Registrierte wird Admin. Prüfe, ob schon ein Admin existiert, deaktiviere die Automatik und lege {ADMIN_EMAIL} als Admin fest.
3. noindex, Metadaten, Fehlerseiten: noindex auf /auth und alle _authenticated-Routen, twitter:site und author „Lovable“ entfernen, deutsche 404- und Fehlerseite.
4. Editor als Dialog und Freigabe-Seite: Mache den Kanal-Editor zum shadcn-Sheet mit Fokusfalle, Escape, aria-label am Schließen-Button und höheren Kontrasten bei den Plattform-Chips. Die „Warte auf Freigabe“-Seite per Realtime-Abo auf user_roles neu laden.
5. Konflikte und Sortierung, Seed-Namen: Speichern mit updated_at-Prüfung („wurde zwischenzeitlich geändert“), Sortierung (Name, Phase, zuletzt geändert) und Mehrfachauswahl; Seed-Kanäle wie „Kleidungs-Steal“ und „Kinderkanal – Copy-Paste“ neutral umformulieren (Urheberrecht).

PHASE 3 – Ausbau Richtung 9,5:
- Videostatus-Verwaltung (Idee → Skript → Schnitt → Veröffentlicht) mit Terminen und Kalender.
- Rollen und Rechte (admin, member, pending) mit Audit-Log, Konfliktschutz beim Speichern.
- OAuth-Anbindung als austauschbares Modul, Tokens nur serverseitig.
- Tests für Rollen und Speichern; Barrierefreiheit des Editors.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Entwicklerzugänge der Plattformen beantragen.; Kanalideen auf Urheberrecht prüfen.
```
