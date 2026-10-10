# R07 – Puna AI Digitalwerk

- Lovable-Projekt-ID: `0ca58bee-6312-4b7c-9392-9357c751776d`
- Lage: Note 6,5. Falsche Shop-Aussagen, Admin-Vergabe, PDF ungeschützt.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R07-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R07-01 · Falsche Shop-Aussagen korrigieren
Priorität: KRITISCH · Status: offen

```
Projekt: Puna AI Digitalwerk. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In src/lib/projects.ts werden die Shops als „Shopify & Printify, Versand aus der EU, Track-and-Trace“ und „Live“ beworben. Das stimmt nicht (kein Checkout, unveröffentlicht). Ändere Status auf „In Arbeit“ und entferne Aussagen zu Shopify, Printify, Versand, Tracking.

Fertig, wenn: Keine unwahren Aussagen mehr; Status ehrlich. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R07-02 · Admin-Vergabe absichern
Priorität: KRITISCH · Status: offen

```
Projekt: Puna AI Digitalwerk. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: claim_admin_if_none macht den ersten Registrierten zum Admin. Deaktiviere per Migration, lege den Admin fest über {ADMIN_EMAIL}, prüfe fremde Admins.

Fertig, wenn: Nur {ADMIN_EMAIL} ist Admin. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R07-03 · Editor-Links und tote Links ersetzen
Priorität: wichtig · Status: offen

```
Projekt: Puna AI Digitalwerk. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Links „Zum Projekt/Shop“ führen zu lovable.dev-Editor-URLs, die Besucher nicht öffnen können. Ersetze sie durch öffentliche Live-URLs; nicht veröffentlichte Projekte zeigen „Bald verfügbar“. Die Nation-Coinverse-Links auf „#“ auf {URL_PLATTFORM_1} und {URL_PLATTFORM_2} setzen.

Fertig, wenn: Kein Link führt mehr ins Leere oder in den Editor. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R07-04 · PDF-Download schützen
Priorität: wichtig · Status: offen

```
Projekt: Puna AI Digitalwerk. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Das PDF liegt in public/downloads und ist ohne Formular abrufbar. Lege es in privaten Storage und gib es nach dem Leitfaden-Formular per signierter, zeitlich begrenzter URL aus.

Fertig, wenn: PDF nur nach Formular erreichbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R07-05 · Hero und Metadaten
Priorität: Verbesserung · Status: offen

```
Projekt: Puna AI Digitalwerk. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Füge dem Hero rechts ein Bild oder eine Grafik hinzu (auch bei 1920 px), prüfe 390 px, setze og:image und absolute canonical-URL in __root.tsx.

Fertig, wenn: Hero gefüllt, Metadaten vollständig. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R07-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt Puna AI Digitalwerk. Aktuelle Note ca. 6,5 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 8,0+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. Falsche Shop-Aussagen korrigieren: In src/lib/projects.ts werden die Shops als „Shopify & Printify, Versand aus der EU, Track-and-Trace“ und „Live“ beworben. Das stimmt nicht (kein Checkout, unveröffentlicht). Ändere Status auf „In Arbeit“ und entferne Aussagen zu Shopify, Printify, Versand, Tracking.
2. Admin-Vergabe absichern: claim_admin_if_none macht den ersten Registrierten zum Admin. Deaktiviere per Migration, lege den Admin fest über {ADMIN_EMAIL}, prüfe fremde Admins.
3. Editor-Links und tote Links ersetzen: Links „Zum Projekt/Shop“ führen zu lovable.dev-Editor-URLs, die Besucher nicht öffnen können. Ersetze sie durch öffentliche Live-URLs; nicht veröffentlichte Projekte zeigen „Bald verfügbar“. Die Nation-Coinverse-Links auf „#“ auf {URL_PLATTFORM_1} und {URL_PLATTFORM_2} setzen.
4. PDF-Download schützen: Das PDF liegt in public/downloads und ist ohne Formular abrufbar. Lege es in privaten Storage und gib es nach dem Leitfaden-Formular per signierter, zeitlich begrenzter URL aus.
5. Hero und Metadaten: Füge dem Hero rechts ein Bild oder eine Grafik hinzu (auch bei 1920 px), prüfe 390 px, setze og:image und absolute canonical-URL in __root.tsx.

PHASE 3 – Ausbau Richtung 9,5:
- Echte Case Studies aus den eigenen Projekten (Screenshots, Ergebnis, Zeitraum), Filter nach Säule.
- Terminbuchung mit Kalender-Export (ICS), Erinnerungsmail und Absage-Link.
- Admin-Dashboard: Leads mit Status, Notizen, Export.
- Lighthouse 90+, FAQ und strukturierte Daten (Organization, FAQPage).

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Freigaben von Kunden für Referenzen einholen.; Live-URLs aller Projekte festlegen.
```
