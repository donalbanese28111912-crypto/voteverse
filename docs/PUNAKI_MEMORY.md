# PunaAI ("PunaKI") — Projekt-Memory (komplett, Stand 2026-09-15)

> **Zweck dieses Dokuments:** Analog zu `docs/PROJECT_MEMORY.md` (Voteverse) —
> eine einzige Datei mit allem, was über **PunaAI** bekannt ist: Vision,
> Tech-Stack, aktueller Stand, offene Punkte, Design, Zugriff. Ziel: eine
> neue Session soll dieses Dokument lesen können, statt sich den Kontext neu
> zusammenzusuchen.
>
> **PunaAI ist ein eigenständiges Produkt, unabhängig von Voteverse.** Es
> lebt nicht in diesem GitHub-Repo (`donalbanese28111912-crypto/voteverse`),
> sondern ausschließlich als Lovable-Projekt. Dieses Dokument liegt trotzdem
> in diesem Repo, weil das die einzige dieser Session zur Verfügung
> stehende, dauerhafte Schreib-Ablage ist (siehe Abschnitt 0) — inhaltlich
> hat es nichts mit dem Voteverse-Produkt zu tun.

---

## 0. Wichtiger Hinweis zur Reichweite dieses Dokuments

Gefunden am 15.09.2026, als der Nutzer den Lovable-Link zu diesem Projekt
in einer Voteverse-Arbeitssession teilte. Diese Session hat **nur
Lesezugriff über den Lovable-MCP-Server** (Dateien lesen, Projektdetails,
Screenshot) — kein GitHub-Repo für PunaAI ist bekannt/freigegeben. Manche
Details (z. B. das in der Roadmap erwähnte „Konsolidierte
Konzeptdokument, Upload 02.09.2026") sind nur als Referenz benannt, aber
nicht einsehbar — siehe Abschnitt 8 „Offene Punkte".

---

## 1. Vision / Auftrag

**PunaAI** (Arbeitstitel beim Aufsetzen: „Projob AI – Dein SmartMeister",
später umbenannt zu „PunaAI – Dein SmartHandwerker") ist ein
zweiseitiger KI-Marktplatz für Deutschland, der Privatkunden mit
Handwerkern/Dienstleistern verbindet.

**Kernidee:** Kunde macht ein Foto seines Problems (z. B. „Mein Auto
verliert Kühlwasser", „Garten ist ungepflegt", „möchte elektrisches
Garagentor") + kurzer Freitext → KI erstellt daraus automatisch einen
professionellen Auftragstext, ordnet ein Gewerk zu und schätzt Aufwand/
Kosten. Handwerker sehen passende Aufträge in einem Tinder-artigen
Swipe-Feed (grün = Interesse, rot = ablehnen) und können sich melden.

Zwei komplett unterschiedliche Nutzeroberflächen (Kunde / Handwerker),
gemeinsames Design-System. Deutschsprachig, mobile-first (Handwerker nutzen
die App auf der Baustelle).

Der vollständige ursprüngliche Erstellungs-Prompt (Rollenwahl, KI-Diagnose-
Flow, Handwerker-Profil, Backoffice/„Mein Büro", Monetarisierung,
technische Vorgaben) steht unverändert in `docs/punaki-master-spec.md`.

---

## 2. Zugriff & Identifikatoren

| | |
|---|---|
| Lovable-Projekt-ID | `52a1eaf2-119b-4197-9a30-739f35d61ab2` |
| Interner Name | `projob-smartmeister-ai` |
| Workspace-ID | `fe22a0379937aa454cd2` (**derselbe Lovable-Workspace wie das
  Voteverse-Lovable-Projekt**, siehe `docs/PROJECT_MEMORY.md` Abschnitt 12 —
  beide Projekte liegen im selben Lovable-Account) |
| Editor | `https://lovable.dev/projects/52a1eaf2-119b-4197-9a30-739f35d61ab2` |
| Öffentliche URL | `https://projob-smartmeister-ai.lovable.app` (**veröffentlicht,
  öffentlich sichtbar** — `is_published: true`, `publish_visibility: public`) |
| Erstellt | 23.07.2026 |
| Zuletzt bearbeitet | 12.09.2026 |
| Sichtbarkeit im Editor | privat (aber die App selbst ist öffentlich publiziert) |

---

## 3. Tech-Stack

Gleiche Basis wie das Voteverse-Lovable-Projekt (gleicher Workspace/
Lovable-Vorlage), aber ohne Drizzle/Stripe:

| Ebene | Wahl |
|---|---|
| Framework | TanStack Start (React 19, TanStack Router, Vite 8) |
| Sprache | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui (Radix-Primitives) |
| Backend/DB | Supabase (`@supabase/supabase-js` direkt, **kein** Drizzle ORM
  wie beim Voteverse-Lovable-Projekt — Zugriff vermutlich über
  Supabase-Client/RPCs statt eigener ORM-Schicht) |
| Auth | `@lovable.dev/cloud-auth-js` + Supabase (E-Mail/Passwort und Google
  für Handwerker-Konten) |
| PWA | `vite-plugin-pwa`, eigenes Manifest/Icons, Installations-Banner |
| Zahlungen | **Keine Stripe-Abhängigkeit im Code** — passt zum aktuellen
  „Nicht-Kommerz-Modus" (Abschnitt 6): Zahlungsmethoden-Auswahl (SEPA,
  PayPal, Klarna, Kreditkarte) existiert als UI, aber ohne echte
  Zahlungsanbindung/ohne Gebühren-Erhebung |
| Paketmanager | Bun (`bun.lock`, `bunfig.toml`) |

---

## 4. Design / Marke

- **Logo:** Adler-Motiv („Puna"-Adler-Logo, `punaai-logo.png`), daneben ein
  älteres „ProJob"-Logo (`projob-logo.png`) — vermutlich Rebrand-Spur von
  „Projob AI" zu „PunaAI".
- **Farbpalette:** Schwarz / Gelb / Weiß / Grau — im Screenshot sichtbar:
  dunkler/schwarzer Hero-Hintergrund, kräftiges Gelb für Akzente und
  Call-to-Action-Buttons („von selbst." gelb hervorgehoben, „Anmelden"-Button
  gelb).
- **Schrift:** Montserrat.
- **Ton:** seriös/vertrauenswürdig („KI-Diagnose · Verifizierte Handwerker ·
  Deutschland"-Badge im Hero), nicht verspielt — deckt sich mit dem
  Design-Anspruch im Ursprungs-Prompt.
- Hero-Claim (Stand Screenshot): „Foto machen. Auftrag beschreibt sich von
  selbst." + Live-Aktivitäts-Ticker-Leiste darüber (aktuell z. B. „Auftrag
  in Stuttgart erfolgreich abgeschlossen (Sanitär)").
- Zwei CTAs nebeneinander: „Ich brauche einen Handwerker" (startet
  demnächst) / „Ich bin Handwerker" (Aufträge ansehen).
- 12–13 Gewerk-Hauptkategorien mit eigenen Farben (u. a. Elektro, Sanitär/
  SHK, Garten, Metall, Rollladen & Sonnenschutz).
- Hero-Video/vollflächige Video-Sektion auf der Startseite (Block 30).

---

## 5. Aktueller Stand — was bereits gebaut ist

Aus `roadmap.md` im Lovable-Projekt (sehr umfangreich, in „Blöcken"
durchnummeriert):

**Marke & Grundgerüst:** Adler-Logo, Farbpalette, Montserrat, Claim im Hero;
12 Gewerk-Hauptkategorien inkl. Farben; Vorher/Nachher-Platzhalter mit
KI-Annotation.

**Kern-Funktionen (echt, nicht nur Mockup):**
- **Echte Handwerker-Konten** (E-Mail/Passwort + Google) unter
  `/handwerker/anmelden`, Profil in der Datenbank.
- **Echte KI-Auftragsanalyse:** Foto-Upload → Gewerk-Erkennung, Aufwand-,
  Material- und Referenzkosten-Schätzung.
- **Auftrags-Feed liest echte Aufträge** aus der Datenbank; Interesse
  bekunden inkl. Preisangebot wird gespeichert.
- **13 Gewerk-Kategorien vollständig datenbankgetrieben** (Tabelle
  `gewerke`) — Auswahl, Farben, Anlage-A-Kennzeichnung kommen überall von
  dort, nichts mehr fest im Code.
- **Wissensbibliothek der Gewerke** (Tabelle `gewerke_wissen`, 13
  Datensätze: Avatar/Persona, HwO-Bezug, typische Aufgaben, Foto-Anleitung,
  Rückfragen, Fachbegriffe, häufige Fragen, Preisorientierung, „rote
  Linien") — speist 13 Chat-Avatare mit echten KI-Antworten **inklusive
  Notfall-Erkennung** sowie die KI-Auftragsdiagnose.

**Vertrauens-/Geschäftsfunktionen (UI vorhanden, teils an Nicht-Kommerz-
Modus gekoppelt):** Sichtbarkeits-/Werbe-Pakete (`/handwerker/sichtbarkeit`,
Featured 7/14/30 Tage, PLZ-Boost, „Verifiziert Plus", Social-Paket,
Mini-Landingpage); Match-Gebühr-Modell (7,50 € / 20 € / 40 €, gestaffelt)
in „Mein Büro" + Hinweisdialog im Feed; kombiniertes Abnahme- &
Bewertungsprotokoll (`/kunde/abnahme`); Storno-Warndialog mit Rechtshinweis
und Pflichtgrund.

**Weitere Bausteine (Blöcke 9–19):** Express-Suche + Frühzugang-
Landingpage; Chat-Bubble mit Quick-Replies und den vier (später 13)
Gewerke-Experten; persistente Filterleiste im Auftrags-Feed; „Aktuelles bei
PunaAI" (Zahlen, Erfolgsgeschichte, Newsletter, Presse) mit
Einwilligungs-Checkbox; Live-Aktivitäts-Ticker (Homepage + App, Dropdown
mit letzten 10 Meldungen); atmosphärischer Hero-Hintergrund; Preisangebot
beim Interesse-bekunden + Vergleichsliste im Kunden-Dashboard; monatliche
Feedback-Umfrage (Glocke + Modal) mit internem `/admin/feedback`.

**Blöcke 20–30 (jüngste Runde):**
- Block 20 — PWA: Manifest, Icons, Service Worker (nur in veröffentlichter
  App), Installations-Banner.
- Block 21 — Standortabfrage mit echter Entfernungsberechnung + PLZ-Fallback
  (Feed, Express).
- Block 22 — Video-Anruf-Oberfläche im Chat (Vorschau, WebRTC folgt später).
- Block 23 — Zahlungsmethoden-Auswahl (SEPA, PayPal, Klarna, Kreditkarte)
  in „Meine Vermittlungsgebühren".
- Block 24 (teilweise) — Sprachauswahl mit 16 Sprachen im Header;
  Navigation/Kopfzeile übersetzt, restliche Seitentexte und Chat-Antworten
  folgen noch.
- Block 25 — Award-Programm je Gewerk unter `/handwerker/auszeichnungen`.
- Block 26 — interne Traffic-Auswertung unter `/admin/analytics` inkl.
  Export.
- Block 27 — Steuer-Eintragungsprotokoll mit 13 Kategorien unter
  `/handwerker/steuern`.
- Block 28 — Partner- & Lizenzprogramm unter `/fuer-partner`.
- Block 29 — geführte Installationsanleitung nach der Registrierung.
- Block 30 — Hero-Video und vollflächige Video-Sektion auf der Startseite.

---

## 6. Vorläufiger Nicht-Kommerz-Modus (seit 12.09.2026)

Analog zum `FEATURE_BOOST_ENABLED`-Flag bei Voteverse: PunaAI läuft aktuell
bewusst als reine Informations-/Vorschauplattform vor der eigentlichen
Veröffentlichung.

Gesperrt/ausgeblendet:
- Neue Aufträge und Foto-Uploads zentral gesperrt.
- Interessenbekundungen, Beauftragungen und Partner-Weiterleitungen zentral
  gesperrt.
- Gebühren, Zahlungsdaten, Provisionen, Shop und Sichtbarkeitspakete
  ausgeblendet bzw. gesperrt.
- Öffentliche Texte auf „Vorbereitungsphase ohne Gebühren" angepasst.

**Reaktivierung:** fünf Schalter in `src/lib/launch-mode.ts` und die
gleichnamigen Datensätze in der Tabelle `public.app_launch_flags` gezielt
auf `true` setzen; danach alle betroffenen Abläufe prüfen. Zusätzliche
Rückfallsicherung: Datenbank-Trigger verhindern direkte Schreibzugriffe auf
Aufträge, Angebote, Beauftragungen, Weiterleitungen, Gebühren und
Zahlungsdaten, solange der Modus aktiv ist. Die Logik selbst wurde
**nicht gelöscht**, nur zentral deaktiviert.

Referenziert (aber dieser Session nicht zugänglich): ein „Konsolidiertes
Konzeptdokument" (Upload vom 02.09.2026) mit Match-Gebühr hälftig geteilt,
einer 3-Phasen-Wachstumsstrategie und der Umbenennung zu „SmartHandwerker".

---

## 7. Kundenseite — aktueller Einschränkungsstand

Aus dem Screenshot/der Startseite (Stand 15.09.2026): „Ich brauche einen
Handwerker" ist mit „Startet demnächst" markiert — die Kundenseite des
Marktplatzes ist noch nicht live nutzbar, während die Handwerkerseite
(„Aufträge ansehen") bereits zugänglich ist. Das deckt sich mit der
Roadmap-Zeile „Kunden-Login (aktuell können Aufträge auch ohne Konto
eingestellt werden)" unter „Offen/später".

---

## 8. Offene Punkte (laut Roadmap „Offen / später")

- Materialpreise je Gewerk hinterlegen.
- Regionale Preisfaktoren nach PLZ.
- Saisonale Hinweise je Gewerk.
- Förderprogramme je Gewerk (BAFA, KfW).
- Avatar-Bilder im ProJob-Adler-Stil für alle 13 Gewerke (aktuell 4 echte
  Fotos, Rest Initialen).
- Kunden-Login (aktuell können Aufträge auch ohne Konto eingestellt
  werden).
- Kunden-Dashboard auf echte Aufträge + eingegangene Preisangebote
  umstellen.
- Charakterbilder für die vier Gewerke-Experten ersetzen (aktuell
  Initialen-Avatare für einen Teil).
- 3-Phasen-Preismodell aus dem Konzeptdokument vollständig abbilden.
- Sprachumschaltung (Block 24) vollständig auf alle Seitentexte und
  Chat-Antworten ausweiten (aktuell nur Navigation/Kopfzeile).

**Zusätzlich von Dir gebraucht, um dieses Memory lückenlos zu machen:**
- Das „Konsolidierte Konzeptdokument" (Upload 02.09.2026) — falls das noch
  irgendwo verfügbar ist (Datei, E-Mail, anderer Chat), wäre es hilfreich
  für die Match-Gebühr- und 3-Phasen-Details.
- Bild-/Design-Referenzen über den einen Screenshot hinaus (Logo-Datei,
  vollständiges Farbschema, ggf. Styleguide).
- Klärung, ob/wann der Nicht-Kommerz-Modus aufgehoben werden soll und
  welche Zahlungsanbieter-Zugangsdaten dafür nötig sind.

---

## 9. Quellen

- Lovable-Projekt „PunaAI" (`projob-smartmeister-ai`) —
  `https://lovable.dev/projects/52a1eaf2-119b-4197-9a30-739f35d61ab2`
  (Projektbeschreibung = Ursprungs-Prompt, `roadmap.md`, `.lovable/plan/`).
- `docs/punaki-master-spec.md` — vollständiger, unveränderter
  Ursprungs-Prompt.
- `docs/PUNAKI_MEMORY.md` — **dieses Dokument.**
- Zum Vergleich/Kontext (andere Produkte, gleicher Lovable-Workspace):
  `docs/PROJECT_MEMORY.md` (Voteverse) Abschnitt 12,
  `docs/AI_UNIVERSE_MEMORY.md` (Mr. & Mrs. AI Universe),
  `docs/LUCKY_STAR_NUMBERS_MEMORY.md` (Lucky Star Numbers).
