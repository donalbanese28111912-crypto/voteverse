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
