# R05 – NationVerse Plattform 1 – VIP Nation Coinverse

- Lovable-Projekt-ID: `26b41ecb-ee74-4ef5-8997-00a040b1c89e`
- Lage: Note 8 (eigene Einschätzung). Bilder der 24 fehlenden Coins folgen; Link zu Plattform 2 offen.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R05-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R05-01 · 24 fehlende Coin-Bilder einbinden
Priorität: KRITISCH · Status: offen

```
Projekt: NationVerse Plattform 1 – VIP Nation Coinverse. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Binde die vom Betreiber gelieferten Coin-Bilder ein (Dateiname = Land). Trage sie in coinImageById ein, setze frontMetalById je Bild nach der tatsächlichen Hauptfarbe, die Rückseite folgt dieser Farbe. Betroffen: Polen, Taiwan, Belgien, Schweden, Irland, Argentinien, Thailand, Österreich, Norwegen, Israel, Vereinigte Arabische Emirate, Singapur, Bangladesch, Vietnam, Malaysia, Südafrika, Philippinen, Dänemark, Iran, Kolumbien, Myanmar, Mauretanien, Malediven, Liberia.

Fertig, wenn: Die Galerie meldet 0 fehlende Motive; Tests angepasst; Metallverteilung berichtet. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R05-02 · Link zur zweiten Plattform
Priorität: wichtig · Status: offen

```
Projekt: NationVerse Plattform 1 – VIP Nation Coinverse. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ersetze den Platzhalter-Link „Zur zweiten Plattform“ durch {URL_PLATTFORM_2}.

Fertig, wenn: Link führt zur Plattform 2. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R05-03 · Qualitätsprüfung Laufband, Stufen, Übertragung
Priorität: wichtig · Status: offen

```
Projekt: NationVerse Plattform 1 – VIP Nation Coinverse. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Prüfe im Browser (Computer und 390 px): Preisstufen bei Käufen über mehrere Stufen, Laufband (10 Minuten Verzögerung, Pause, reduzierte Bewegung), Anzeige & Datenschutz im Profil, Übertragung und Rücknahme. Behebe Fehler und ergänze Tests für Stimmenformel max(1, volle Millionen) und die Löschfrist 2 Jahre mit 90 Tagen Warnung.

Fertig, wenn: Alle Abläufe fehlerfrei, Tests bestehen. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R05-04 · Farbverteilung der Coins
Priorität: Verbesserung · Status: offen

```
Projekt: NationVerse Plattform 1 – VIP Nation Coinverse. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die Metallverteilung ist ungleich (Roségold 35, Smaragd 34, Saphir 26, Violett 1, Titan 2, Platin 2). Wenn neue Bilder in Violett, Titan, Platin, Silber, Onyx, Kupfer und Gold vorliegen, ordne sie zu und berichte die neue Verteilung.

Fertig, wenn: Tabelle der Metallverteilung im Bericht. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R05-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt NationVerse Plattform 1 – VIP Nation Coinverse. Aktuelle Note ca. 8,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 9,0+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. 24 fehlende Coin-Bilder einbinden: Binde die vom Betreiber gelieferten Coin-Bilder ein (Dateiname = Land). Trage sie in coinImageById ein, setze frontMetalById je Bild nach der tatsächlichen Hauptfarbe, die Rückseite folgt dieser Farbe. Betroffen: Polen, Taiwan, Belgien, Schweden, Irland, Argentinien, Thailand, Österreich, Norwegen, Israel, Vereinigte Arabische Emirate, Singapur, Bangladesch, Vietnam, Malaysia, Südafrika, Philippinen, Dänemark, Iran, Kolumbien, Myanmar, Mauretanien, Malediven, Liberia.
2. Link zur zweiten Plattform: Ersetze den Platzhalter-Link „Zur zweiten Plattform“ durch {URL_PLATTFORM_2}.
3. Qualitätsprüfung Laufband, Stufen, Übertragung: Prüfe im Browser (Computer und 390 px): Preisstufen bei Käufen über mehrere Stufen, Laufband (10 Minuten Verzögerung, Pause, reduzierte Bewegung), Anzeige & Datenschutz im Profil, Übertragung und Rücknahme. Behebe Fehler und ergänze Tests für Stimmenformel max(1, volle Millionen) und die Löschfrist 2 Jahre mit 90 Tagen Warnung.
4. Farbverteilung der Coins: Die Metallverteilung ist ungleich (Roségold 35, Smaragd 34, Saphir 26, Violett 1, Titan 2, Platin 2). Wenn neue Bilder in Violett, Titan, Platin, Silber, Onyx, Kupfer und Gold vorliegen, ordne sie zu und berichte die neue Verteilung.

PHASE 3 – Ausbau Richtung 9,5:
- Alle 150 Nationen mit Originalbild in hoher Auflösung (WebP, 1024 px), Metallverteilung gleichmäßiger.
- Backend-Anbindung vorbereiten: Demo-Zustand in Tabellen (Mitglieder, Plätze, Käufe, Stufenstände) mit RLS und Tests; Konto, Verifizierung als austauschbare Schnittstelle.
- Playwright-Test: Registrierung → Kauf über zwei Stufen → Übertragung zu Plattform 2 → Rücknahme.
- Lighthouse 90+, Barrierefreiheit AA für Galerie, Coin-Seite, Kaufdialog.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Zahlungsanbieter und Identitätsprüfung wählen, nach rechtlicher Prüfung (Kryptowerte, Geldwäsche, Sanktionen).; Hochauflösende Coin-Bilder liefern.
```
