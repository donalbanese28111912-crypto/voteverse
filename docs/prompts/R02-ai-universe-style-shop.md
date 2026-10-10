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
