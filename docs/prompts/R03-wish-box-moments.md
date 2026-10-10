# R03 – Wish Box Moments

- Lovable-Projekt-ID: `1659ee90-67b3-4339-94a8-c4f1cfb0f8fa`
- Lage: Note 5. Admin-Übernahme, KI ohne Limit, erfundene „echte“ Zitate.
- Veröffentlicht: nein

Reihenfolge: zuerst Master-Prompt, dann die Prompts von oben nach unten. Platzhalter vorher ersetzen.

## R03-M · Master-Prompt (Grundregeln)
Status: offen

Text: siehe `master-prompt.txt` (unverändert in das Projekt senden).

## R03-01 · SOFORT: Admin-Übernahme schließen
Priorität: KRITISCH · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: claim_admin_if_none() macht den ersten angemeldeten Nutzer zum Admin. Setze die Funktion per Migration außer Kraft, lege den Admin über die E-Mail {ADMIN_EMAIL} fest und entferne den Aufruf in src/routes/admin.tsx.

Fertig, wenn: Fremde Nutzer können sich nicht zum Admin machen; Admin ist {ADMIN_EMAIL}. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R03-02 · KI-Funktionen absichern
Priorität: KRITISCH · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: writeGreetingCard und suggestGifts (src/lib/greeting.functions.ts, gifts.functions.ts) haben weder Login noch Limit. Verlange Anmeldung oder höchstens 10 Aufrufe pro Stunde und IP, begrenze Eingabelängen.

Fertig, wenn: Limit greift, Test vorhanden. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R03-03 · Erfundene Zitate entfernen
Priorität: KRITISCH · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: In src/routes/index.tsx (MOMENTS) stehen erfundene Namen, Zitate und Stockbilder unter „Echte Reaktionen aus der Wish-Box-Community“. Ersetze sie durch „So könnte es aussehen“ ohne Namen oder zeige nur echte, freigegebene Einsendungen. Streiche „Echte Reaktionen“. Die Galerie mischt Beispiele hinter echte Uploads: kennzeichne Beispiele als „Beispiel“.

Fertig, wenn: Nirgends mehr „echt“, wo es Beispiele sind. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R03-04 · Community-Uploads erst nach Freigabe
Priorität: wichtig · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Neue community_moments (Foto und Video bis 50 MB) erscheinen sofort öffentlich. Setze approved=false als Standard, zeige sie erst nach Freigabe im Admin, prüfe Dateityp serverseitig statt nach Endung, Größe begrenzen.

Fertig, wenn: Neue Uploads sind unsichtbar bis zur Freigabe. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R03-05 · Rabattcode, Empfehlungsbonus, Fotowürfel
Priorität: wichtig · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Der 15-%-Rabattcode wird erzeugt, aber im Warenkorb gibt es kein Feld zum Einlösen. Baue das Feld (serverseitig geprüft, cartTotals mit Rabatt). Entferne den Empfehlungsbonus und die Fantasie-Domain wishbox.app oder baue ihn wirklich. Speichere beim Fotowürfel Fotos und Widmung am Warenkorb-Artikel statt nur als Daten-URL im Browser. Im Hero-Würfel ein Beispielfoto je Seite einsetzen.

Fertig, wenn: Code lässt sich einlösen, Fotos gehören zum Artikel, Hero-Würfel nicht mehr dunkel. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```

## R03-06 · Beispielprodukte ersetzen
Priorität: Verbesserung · Status: offen

```
Projekt: Wish Box Moments. Bearbeite nur dieses Projekt. Lies zuerst AGENTS.md und roadmap.md. Ändere nichts an Impressum, AGB und Datenschutz. Platzhalter wie {ADMIN_EMAIL} vorher durch den echten Wert ersetzen.

Auftrag: Ersetze die 25 Beispielprodukte mit example.com-Links nach und nach durch echte Produkte mit Foto und echtem Shop-Link; bis dahin deutlich als „Beispiel“ kennzeichnen. Ergänze og:image und Tests.

Fertig, wenn: Keine unmarkierten Platzhalterprodukte. Tests laufen durch. Berichte am Ende kurz, was erledigt ist und was fehlt.
```
