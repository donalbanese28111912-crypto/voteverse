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
