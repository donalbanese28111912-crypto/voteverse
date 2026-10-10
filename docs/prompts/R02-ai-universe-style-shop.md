# R02 – AI Universe Style Shop

- Lovable-Projekt-ID: `359cc222-47fa-4e37-9ef8-afb02f9d10bf`
- Lage: Note 4. KRITISCH: /admin ohne Login, Löschen/Hochladen/KI-Kosten für jeden möglich.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R02-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R02-01 · SOFORT: Admin und Serverfunktionen absichern
Priorität: KRITISCH · Status: offen

```
Projekt: AI Universe Style Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: /admin hat kein Login. Alle Funktionen in src/lib/admin.functions.ts nutzen den Service-Role-Client (supabaseAdmin) ohne Auth-Middleware. Schütze /admin und jede dieser Funktionen mit Login und Admin-Rolle (has_role) über die vorhandene auth-middleware.ts. Entferne den öffentlichen STUDIO-Link im Header. Begrenze Uploads auf 5 MB und erlaube nur Bildtypen. deleteProducts nur mit Admin-Rolle und höchstens 500 Einträge.

Fertig, wenn: Ohne Anmeldung liefern alle Admin-Funktionen 401/403; Test dafür vorhanden; STUDIO-Link nur im Admin sichtbar. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R02-02 · Admin-Rolle festlegen
Priorität: KRITISCH · Status: offen

```
Projekt: AI Universe Style Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Lege den Admin fest über die E-Mail {ADMIN_EMAIL}. Es darf keine Automatik geben, die den ersten Registrierten zum Admin macht. Prüfe, ob bereits fremde Admins existieren, und entferne sie.

Fertig, wenn: Nur {ADMIN_EMAIL} hat die Admin-Rolle. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R02-03 · Nur echte Produkte zeigen, Bilder ersetzen
Priorität: wichtig · Status: offen

```
Projekt: AI Universe Style Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Zeige im Shop nur Produkte mit echter Affiliate-URL und eigenem Bild. Platzhalter-Artikel (example.com) erscheinen nur im Studio. Die acht wiederverwendeten Kategoriebilder, die per ID-Hash verteilt werden, ersetzen: ohne eigenes Bild einen neutralen Platzhalter mit „Bild folgt“ zeigen.

Fertig, wenn: Keine example.com-Links und keine Duplikatbilder im öffentlichen Shop. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R02-04 · Produktdetailseite, Suche, Sortierung, Seitenweise laden
Priorität: wichtig · Status: offen

```
Projekt: AI Universe Style Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Baue /produkt/$id mit Bild, Beschreibung, Händlerlink und eigenen Metadaten. Ergänze Suche, Sortierung und Preisfilter. Lade Produkte serverseitig seitenweise statt bis zu 10.000 im Browser. Ersetze das Zählersymbol „1169“ im Header durch einen Katalog-Link.

Fertig, wenn: Detailseite erreichbar, Katalog lädt seitenweise, Suche funktioniert. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R02-05 · Stile neu ordnen, Navigation, Hero-Preis
Priorität: Verbesserung · Status: offen

```
Projekt: AI Universe Style Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ordne die Stilrichtungen logisch (Kopfschmuck, Kleider, Anzüge, Capes, Schmuck). Ersetze die fest verdrahteten Links japan und haruki-tanaka in Layout.tsx durch Daten, verlinke von der Startseite auf Reiche und Figuren, zeige auf Figurenseiten das echte Porträt statt Emoji, und ersetze den Hero-Preis „€ 2.400“ durch Datenbankwerte.

Fertig, wenn: Keine festen Beispiel-Links mehr; Hero-Preis kommt aus den Daten. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R02-06 · Design, Marke, Sprache vereinheitlichen
Priorität: Verbesserung · Status: offen

```
Projekt: AI Universe Style Shop. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Verwende einen Namen (nicht Couronne Haus, AI UNIVERSE und MR. & MRS. gemischt) und ein Farbschema für alle Seiten, setze lang="de", entferne twitter:site „@Lovable“, ergänze Metadaten auf allen Routen, Schrift nicht unter 11 px.

Fertig, wenn: Eine Marke, ein Look, Metadaten auf jeder Route. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R02-H · GESAMT-Prompt: Hochstufung auf 9,5
Status: offen · Hinweis: Sehr lang. Bei größeren Projekten erst die Einzel-Prompts senden und diesen Prompt zum Abschluss nutzen.

```
Gesamtauftrag „Qualitätsstufe 9,5“ für das Projekt AI Universe Style Shop. Aktuelle Note ca. 4,0 von 10. Ziel: so weit wie ohne Eingriffe des Betreibers möglich (Ziel 9,5, realistisch 7,5+). Arbeite in Phasen und melde nach jeder Phase kurz den Stand. Ändere nichts an Impressum, AGB und Datenschutz. Lies zuerst AGENTS.md und roadmap.md. Platzhalter wie {ADMIN_EMAIL} vorher ersetzen.

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
1. SOFORT: Admin und Serverfunktionen absichern: /admin hat kein Login. Alle Funktionen in src/lib/admin.functions.ts nutzen den Service-Role-Client (supabaseAdmin) ohne Auth-Middleware. Schütze /admin und jede dieser Funktionen mit Login und Admin-Rolle (has_role) über die vorhandene auth-middleware.ts. Entferne den öffentlichen STUDIO-Link im Header. Begrenze Uploads auf 5 MB und erlaube nur Bildtypen. deleteProducts nur mit Admin-Rolle und höchstens 500 Einträge.
2. Admin-Rolle festlegen: Lege den Admin fest über die E-Mail {ADMIN_EMAIL}. Es darf keine Automatik geben, die den ersten Registrierten zum Admin macht. Prüfe, ob bereits fremde Admins existieren, und entferne sie.
3. Nur echte Produkte zeigen, Bilder ersetzen: Zeige im Shop nur Produkte mit echter Affiliate-URL und eigenem Bild. Platzhalter-Artikel (example.com) erscheinen nur im Studio. Die acht wiederverwendeten Kategoriebilder, die per ID-Hash verteilt werden, ersetzen: ohne eigenes Bild einen neutralen Platzhalter mit „Bild folgt“ zeigen.
4. Produktdetailseite, Suche, Sortierung, Seitenweise laden: Baue /produkt/$id mit Bild, Beschreibung, Händlerlink und eigenen Metadaten. Ergänze Suche, Sortierung und Preisfilter. Lade Produkte serverseitig seitenweise statt bis zu 10.000 im Browser. Ersetze das Zählersymbol „1169“ im Header durch einen Katalog-Link.
5. Stile neu ordnen, Navigation, Hero-Preis: Ordne die Stilrichtungen logisch (Kopfschmuck, Kleider, Anzüge, Capes, Schmuck). Ersetze die fest verdrahteten Links japan und haruki-tanaka in Layout.tsx durch Daten, verlinke von der Startseite auf Reiche und Figuren, zeige auf Figurenseiten das echte Porträt statt Emoji, und ersetze den Hero-Preis „€ 2.400“ durch Datenbankwerte.
6. Design, Marke, Sprache vereinheitlichen: Verwende einen Namen (nicht Couronne Haus, AI UNIVERSE und MR. & MRS. gemischt) und ein Farbschema für alle Seiten, setze lang="de", entferne twitter:site „@Lovable“, ergänze Metadaten auf allen Routen, Schrift nicht unter 11 px.

PHASE 3 – Ausbau Richtung 9,5:
- Shop-Katalog nur mit echten Affiliate-Links, Import per Admin-CSV mit Prüfung (https, Domain-Liste, kein example.com).
- Produktseite, Suche, Filter, Sortierung, seitenweises Laden, Sitemap und Produkt-JSON-LD.
- Audit-Protokoll für Admin-Aktionen (wer hat was gelöscht/geändert), Rollenverwaltung im Admin.
- Bildpipeline: Upload begrenzen, zu WebP verkleinern, Alt-Texte.

PHASE 4 – Messen und berichten: Tests (Vitest) und, wo sinnvoll, ein End-to-End-Test für den Hauptweg; Lighthouse-Werte für Start und Hauptseite (Ziel mindestens 90 bei Leistung, Barrierefreiheit, SEO); Mobilansicht 390 px geprüft. Liefere am Ende eine Tabelle: Kriterium (Sicherheit, Ehrlichkeit, Funktion, Design, Qualität, Inhalt) – Soll – Ist – offen, und eine ehrliche Selbstnote 1 bis 10. Nenne klar, was du NICHT erledigen konntest.

Nicht per Prompt lösbar (Aufgabe des Betreibers, nicht erfinden): Rechte an Marken und Bildern der Kleidungsstücke klären.; Echte Affiliate-Partner und Fotos beschaffen.
```
