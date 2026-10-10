# R18 – AMAZING AI UNIVERSE

- Lovable-Projekt-ID: `c6f44b72-aea1-4665-b40c-6f4cf893eb63`
- Lage: Note 6. Navigation läuft über; Zahlen widersprechen sich; Admin- und Wettbewerbsrecht klären.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R18-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R18-01 · Admin-Rechte und Checkout prüfen
Priorität: KRITISCH · Status: offen

```
Projekt: AMAZING AI UNIVERSE. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: useIsAdmin sichert /admin nur im Browser. Prüfe die RLS-Policies von products, sponsors, point_packages, transactions: alle Admin-Schreibzugriffe nur über RPCs mit has_role. Sperre den Checkout serverseitig, solange der Kauf deaktiviert ist (Stripe-Webhook existiert trotz „coming soon“).

Fertig, wenn: Admin-Schreibzugriffe nur mit Rolle; Kauf serverseitig gesperrt; Test. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R18-02 · Navigation und Icons
Priorität: wichtig · Status: offen

```
Projekt: AMAZING AI UNIVERSE. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Die Hauptnavigation (Layout.tsx, 20+ Punkte) wird rechts abgeschnitten. Gruppiere in sechs Menüs (Entdecken, Wettbewerb, Figuren, Welt, Mitmachen, Mehr), ersetze Emoji-Icons durch lucide-Icons, Subtext lesbarer (nicht weit gesperrt in Grau).

Fertig, wenn: Navigation läuft bei keiner Breite über. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R18-03 · Zahlen und Marke vereinheitlichen
Priorität: wichtig · Status: offen

```
Projekt: AMAZING AI UNIVERSE. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Startseite „100+ Nationen“, Ranking „340 Figuren, 170 Reiche“, Plan „334 Figuren, 167 Reiche“: lege eine Konstante in src/data/universe.ts an und nutze sie überall. Beende den Rebrand von „Mr & Mrs“ zu „Amazing AI Universe“ in Texten und Metadaten.

Fertig, wenn: Alle Zahlen kommen aus einer Quelle, eine Marke. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R18-04 · Sprache und Metadaten
Priorität: Verbesserung · Status: offen

```
Projekt: AMAZING AI UNIVERSE. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: lang aus der gewählten Sprache serverseitig (Cookie), Titel und Beschreibung mindestens für Deutsch und Englisch; ca. 1.400 JPG-Dateien zu WebP, aus dem Storage laden; Tests für Tageslimit und Stimmenzählung.

Fertig, wenn: Metadaten pro Sprache, kleinere Ladegröße. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R18-05 · Recht klären (kein Code)
Priorität: KRITISCH · Status: offen

```
Projekt: AMAZING AI UNIVERSE. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Vor einer Aktivierung bezahlter Stimmen klären: Verbraucherrecht, Jugendschutz, Glücksspielrecht für bezahlte Stimmen im Wettbewerb und Markenähnlichkeit zu „Mister/Miss Universe“. Bis dahin Kauf von Stimmen im Code gesperrt lassen.

Fertig, wenn: Rechtliche Einschätzung liegt vor (durch den Betreiber). Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R18-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt AMAZING AI UNIVERSE. Aktuelle Note ca. 6,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 7,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Admin-Rechte und Checkout prüfen: useIsAdmin sichert /admin nur im Browser. Prüfe die RLS-Policies von products, sponsors, point_packages, transactions: alle Admin-Schreibzugriffe nur über RPCs mit has_role. Sperre den Checkout serverseitig, solange der Kauf deaktiviert ist (Stripe-Webhook existiert trotz „coming soon“).
2. Navigation und Icons: Die Hauptnavigation (Layout.tsx, 20+ Punkte) wird rechts abgeschnitten. Gruppiere in sechs Menüs (Entdecken, Wettbewerb, Figuren, Welt, Mitmachen, Mehr), ersetze Emoji-Icons durch lucide-Icons, Subtext lesbarer (nicht weit gesperrt in Grau).
3. Zahlen und Marke vereinheitlichen: Startseite „100+ Nationen“, Ranking „340 Figuren, 170 Reiche“, Plan „334 Figuren, 167 Reiche“: lege eine Konstante in src/data/universe.ts an und nutze sie überall. Beende den Rebrand von „Mr & Mrs“ zu „Amazing AI Universe“ in Texten und Metadaten.
4. Sprache und Metadaten: lang aus der gewählten Sprache serverseitig (Cookie), Titel und Beschreibung mindestens für Deutsch und Englisch; ca. 1.400 JPG-Dateien zu WebP, aus dem Storage laden; Tests für Tageslimit und Stimmenzählung.
5. Recht klären (kein Code): Vor einer Aktivierung bezahlter Stimmen klären: Verbraucherrecht, Jugendschutz, Glücksspielrecht für bezahlte Stimmen im Wettbewerb und Markenähnlichkeit zu „Mister/Miss Universe“. Bis dahin Kauf von Stimmen im Code gesperrt lassen.

PHASE 3 – Ausbau Richtung 9,5:
- Admin- und Zahlungslogik abgesichert und getestet; Tageslimit und Stimmenzählung mit Tests.
- Bilder aus Storage, WebP, Navigation in 6 Gruppen, einheitliche Zahlen und Namen.
- Mehrsprachiges SEO (DE/EN) mit hreflang, Lighthouse 90+.
- Transparente Regeln-Seite zu Gratisstimmen und Abläufen.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Rechtsklärung bezahlte Stimmen und Markenfragen.; Inhaltsregeln zu realen Staaten/Stereotypen festlegen.
```
