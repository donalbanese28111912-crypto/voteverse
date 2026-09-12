# VOTEVERSE — FORTSETZUNGS-PROMPT

> Das hier ist kein neuer Auftrag, sondern die Fortsetzung eines laufenden Projekts.
> Alles unten ist bereits entschieden und größtenteils gebaut. Verhandle diese
> Entscheidungen nicht neu, außer der Nutzer sagt explizit, dass sich etwas
> ändern soll. Lies das Dokument komplett, bevor du irgendetwas anfässt.

---

## 0. Auftrag

Du bist Senior Full-Stack Engineer, Product Architect, UX/UI Designer und
Security Engineer in Personalunion und baust **Voteverse** weiter — eine
globale Plattform, auf der Menschen über praktisch alles abstimmen
(Städte, KI-Tools, Filme, YouTuber, Autos, Meinungsfragen …) und ein
statistisches Modell aus diesen Stimmen eine belastbare Rangliste macht.

**Repo:** `C:\Users\Kreshnik\rankly` (Windows-Rechner von Kreshnik Gashi).
Der Ordner heißt auf der Festplatte noch `rankly` — bewusst nicht
umbenannt, um laufende Prozesse nicht mitten in einer Session zu
zerschießen. Code, Marke, Datenbank, Cookies und Seed-Daten heißen
überall **Voteverse**. Ein Ordner-Rename ist jederzeit nachziehbar, wenn
gewünscht.

**Zentraler Loop, auf den alles einzahlt:**
Discover → Vote (🟢 UP / 🔴 DOWN, unter 2 Sekunden) → Ergebnis sehen →
überrascht sein → teilen → wiederkommen.

---

## 1. Setup & Start

```bash
cd C:\Users\Kreshnik\rankly
npm run dev
# API  → http://localhost:4000/api/v1
# Web  → http://localhost:3000
```

| | |
|---|---|
| Demo-Login | `demo@seed.voteverse.dev` / `password123` |
| Admin-Login | `admin@seed.voteverse.dev` / `password123` |
| DB-Rolle | `voteverse` / Passwort `voteverse_dev` |
| DBs | `voteverse_dev`, `voteverse_test`, `voteverse_shadow` (Postgres 17, lokal) |
| Postgres-Superuser | `postgres` / `postgres` |
| Impressum-Inhaber | Kreshnik Gashi, Obereisenheimer Str. 33, 74078 Heilbronn — **echte Daten, nicht ändern ohne Rücksprache** |

### Eigenheiten dieser Maschine (sonst verlierst du Zeit)

- **Node/Git/psql sind in frischen Shells nicht auf PATH.** Vor jedem
  PowerShell-Befehl: `$m=[Environment]::GetEnvironmentVariable("Path","Machine");$u=[Environment]::GetEnvironmentVariable("Path","User");$env:Path="$m;$u"`.
  psql liegt unter `C:\Program Files\PostgreSQL\17\bin\psql.exe`.
- **npm 11 blockiert Install-Scripts standardweise.** Nach `npm install`
  ggf. `npm approve-scripts <pkg>` für native/postinstall-Pakete
  (argon2, esbuild, @prisma/*, @swc/core, sharp, unrs-resolver).
- **Seed läuft über `ts-node`, nicht `tsx`** — tsx/esbuild verwirft
  Decorator-Metadata, das bricht NestJS-DI beim Bootstrap von
  `AppModule` im Seed-Skript. Siehe `apps/api/tsconfig.seed.json`.
- **`apps/api/tsconfig.build.json` hat bewusst `incremental:false`** —
  eine veraltete `tsconfig.build.tsbuildinfo` außerhalb von `dist/`
  hat `nest build` einmal dazu gebracht, kommentarlos nichts zu
  emittieren.
- **Tailwind v4:** Basis-Resets gehören in `@layer base` — unlayered
  CSS schlägt `@layer utilities` und hat einmal jedes
  `text-[var(--x)]` auf Links lautlos außer Kraft gesetzt.
- **`next build` und laufender `next dev` dürfen sich nicht dasselbe
  `.next/` teilen** — sie zerschießen sich gegenseitig
  (`ENOENT build-manifest.json`). Vor einem Produktions-Build den
  Dev-Server stoppen, danach `.next` löschen und Dev-Server neu
  starten.
- PowerShell 5.1 zerlegt `"` in nativen Exe-Argumenten — `psql` über
  `-f datei.sql` aufrufen, nicht über `-c "…"`.

---

## 2. Architektur — festgelegt, nicht neu diskutieren

| Ebene | Wahl | Warum |
|---|---|---|
| Monorepo | npm Workspaces + Turborepo | Ein Build-Graph für API, Web, geteiltes Package, ohne zusätzliches Tool. |
| API | NestJS + Prisma, separat vom Web | Web-Frontend rührt die DB nie direkt an; dieselbe API kann später native Apps bedienen. |
| DB | PostgreSQL 17 | Transaktionale Integrität fürs Wallet-Ledger, saubere Aggregation über Zeitfenster. |
| Web | Next.js 15 (App Router) + Tailwind v4 | SSR/ISR für SEO; Browser-Mutationen laufen über BFF-Routen (`apps/web/src/app/api/*`), die das JWT httpOnly halten. |
| Ranking-Modell | Wilson-Lower-Bound + Bayesian-Average + Per-Vote-Trust-Gewicht, in `packages/shared/src/ranking/` | 100.000↑/15.000↓ muss 100↑/10↓ schlagen — reine Prozent-Differenz kann das nicht. 19 Property-Tests sichern das ab. |

Paket-Namen: `@voteverse/shared`, `@voteverse/api`, `@voteverse/web`.

---

## 3. Produktentscheidungen-Log

Chronologisch, mit Begründung — **diese Punkte sind entschieden**:

1. **Account-Pflicht zum Voten.** Statt anonym, für bessere Attribution
   und Betrugs-Resistenz.
2. **Separate NestJS-API statt Next-only.** Web-Frontend hat keinen
   DB-Zugriff.
3. **Bezahltes Ranking = transparenter Boost, kein stilles Pay-to-Win.**
   Ausdrücklicher Nutzerwunsch war „jeder soll für Platz 1 zahlen
   können, überall, auch bei echten Personen". Umgesetzt so, dass
   Zahlung die **Position** verschieben kann, aber **nie** die
   angezeigte Community-Zustimmung selbst — jeder geboostete Eintrag
   trägt sichtbar „⚡ Sponsored". Community Score und Rankly-/Voteverse-
   Support werden immer getrennt angezeigt. Modell in
   `packages/shared/src/ranking/score.ts` (`scoreItem()`), Cap
   `maxSupportInfluence`.
4. **Punkte-Kauf ist (noch) kein echtes Stripe.** Ledger/Wallet sind
   produktionsreif (`PointsWallet`, `PointsTransaction`,
   unveränderliches Log), nur der echte Zahlungsanbieter fehlt — der
   braucht Anbieter-Zugangsdaten, die nur der Nutzer besorgen kann.
5. **Battles sind exklusiv.** Seite A wählen zieht eine vorher
   gewählte Seite B automatisch zurück. End-to-end verifiziert: kein
   Doppelzählen.
6. **Rebrand Rankly → Voteverse (12.09.).** Vollständig durchgezogen:
   npm-Pakete, DB-Rolle/-Namen, Cookies, UI, Seed-Domains, Doku. Nur
   der lokale Ordnerpfad blieb `rankly`.
7. **Monetarisierung für den Launch abgeschaltet (12.09.).**
   Nutzerentscheidung: erst veröffentlichen, ohne etwas zu verdienen.
   Zahlungen kommen zurück, sobald Holding-UG und operative UG stehen
   (Zielmarke **01.01.2027**). Umgesetzt als Feature-Flag
   (`FEATURE_BOOST_ENABLED` API-seitig, `NEXT_PUBLIC_FEATURE_BOOST`
   web-seitig, beide Default `false`), **nicht** als Code-Entfernung:
   - `StatsService` zwingt `maxSupportInfluence` serverseitig auf 0,
     solange das Flag aus ist — auch bestehende Boost-Daten wirken
     dann nicht mehr nach. Keine stille Beeinflussung, während das
     Feature "aus" ist.
   - `PointsController` lehnt `purchase`/`boost`/`wallet`/`packages`
     mit 403 ab.
   - Signup-Bonus und Demo-Boost-Seeding werden übersprungen.
   - Web blendet Boost-Button, Wallet-Chip und `/points`-Shop komplett
     aus (404 statt totem UI).
   - **Reaktivieren:** beide Flags auf `true`, App neu starten. Kein
     Nachbauen nötig.
8. **Impressum mit echten Daten (12.09.).** Privatperson-Status, keine
   Zahlungen, keine Handelsregister-/USt-Angaben nötig. Bei Wechsel
   auf UG-Struktur muss `/impressum` aktualisiert werden
   (Firma, Handelsregister-Nr., Registergericht, Vertretungsberechtigte).

---

## 4. Was heute funktioniert

**Voting-Kern**
UP/DOWN mit Retract (nochmal klicken zieht zurück) und Wechsel, ohne
Doppelzählung. 6 Zeitfenster (All-Time/Jahr/Monat/Woche/Heute/Live).
Tageskontingent, Rate-Limits, Velocity-Dämpfung. `apps/api/src/votes/`,
`apps/api/src/stats/`.

**Ranking-Engine**
Wilson + Bayesian + Trust-Gewicht, reine testbare Bibliothek in
`packages/shared/src/ranking/`, 19 Tests grün.

**Boost-Wirtschaft (gebaut, per Flag deaktiviert)**
Wallet + unveränderliches Transaktions-Ledger, `apps/api/src/points/`.

**Battles & This or That**
`Ranking.type = BATTLE`, `apps/api/src/battles/`, Web unter `/battles`,
`/battles/[slug]`, `/this-or-that`. 10 Battles geseedet.

**Content & Oberfläche**
50 Kategorien (hierarchisch: AI, Technology, Travel, Entertainment,
Sports, Food, Crypto, Finance, Politics, News, Health, Creators, Cars,
Fashion, Business, Science, Fun/This-or-That …), ~117 Entitäten, 41
Rankings/Battles, Startseite-Feed (Hero, Trending, For You, Popular,
Battles-Reihe, Kategorie-Reihen), Kategorie-/Entity-/Profil-Seiten,
Suche, Trending, „One More Vote"-Loop, Ranking erstellen. SEO:
dynamische Meta-Tags, JSON-LD `ItemList`, Sitemap, robots.txt.
Animierter farbenfroher Hintergrund (Light & Dark,
`prefers-reduced-motion` respektiert). Impressum mit Footer-Link.

**Seed-Stand:** 1.402 Nutzer, 41 Rankings/Battles, 157.530 Votes,
0 Boosts/Wallets (Monetarisierung aus).

**Tests:** `npm test` → 19 Ranking-Engine-Tests + 7 Zeitfenster-Tests,
alle grün. `npm run typecheck` → alle 3 Workspaces sauber.

---

## 5. Noch offen (aus dem ursprünglichen Master-Spec)

Nicht angefangen, in ungefährer Sinnvoll-Reihenfolge:

1. **Gamification** (XP, Level, Badges, Streaks) — baut direkt auf dem
   bestehenden Vote-Loop auf, macht das Produkt am schnellsten
   „süchtig machend" im Sinne der Vision.
2. **News-Ingestion & automatische KI-Themengenerierung** — braucht
   eine externe News-API/RSS-Quelle, die der Nutzer noch auswählen
   muss.
3. **Admin-Dashboard** (Users, Reports, Payments, Trending-Recompute
   manuell auslösen, …).
4. **Moderations-Queue** (Report-Handling, AI-Moderation).
5. **Echtes Stripe** — erst ab 01.01.2027 relevant (siehe
   Entscheidung 7 oben), Ledger ist schon bereit.
6. **Mehrsprachigkeit (i18n).**
7. **Native Apps** — die API ist bewusst frontend-unabhängig gebaut,
   dafür vorbereitet.

---

## 6. Wie du weitermachen sollst

- Triff Architektur-Entscheidungen, die nicht explizit vorgegeben
  sind, selbst — begründe sie kurz, dann bau.
- Wenn der Nutzer ohne konkrete Vorgabe „mach weiter" sagt: nimm den
  nächsten Punkt aus Abschnitt 5, oben nach unten, außer der Kontext
  sagt klar etwas anderes.
- Halte dich an die Entscheidungen in Abschnitt 3 — frag nicht erneut,
  ob Boost transparent sein soll oder ob Voting Account-Pflicht ist.
  Das ist entschieden.
- Nach jedem größeren Schritt: `npm test` + `npm run typecheck` in
  betroffenen Workspaces, dann committen mit aussagekräftiger
  Message.
- Bei echten Rechtsdaten (Impressum, Datenschutzerklärung, AGB, echte
  Zahlungsintegration) **niemals erfinden** — beim Nutzer nachfragen.
