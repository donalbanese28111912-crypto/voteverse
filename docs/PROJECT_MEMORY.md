# Voteverse — Projekt-Memory (komplett, Stand 2026-09-15)

> **Zweck dieses Dokuments:** Eine einzige Datei, die alles zusammenfasst, was
> über Voteverse bekannt und entschieden ist — Vision, Architektur,
> Entscheidungs-Log, aktueller Stand, offene Punkte, Deployment, Design/UI,
> und welche Tool-/KI-Anbindungen in der Arbeitsumgebung verfügbar sind. Ziel:
> eine neue Session soll dieses eine Dokument lesen können, statt sich den
> Kontext aus mehreren Dateien und alten Gesprächen zusammenzusuchen.
>
> Dieses Dokument fasst zwei bereits bestehende Quellen im Repo zusammen und
> aktualisiert sie: `docs/voteverse-continuation-prompt.md` (Fortsetzungs-
> Prompt für Coding-Sessions) und `docs/status-report.html` (visueller
> Statusbericht). Bei Widersprüchen zählt der tatsächliche Code-/Git-Stand.

---

## 0. Wichtiger Hinweis zur Reichweite dieses Dokuments

Dieses Memory deckt **das ab, was im Repository `voteverse` nachvollziehbar
ist** — Code, Commits, bestehende Doku-Dateien. Was es **nicht** enthält,
weil es dieser Session technisch nicht zugänglich ist:

- **Keine Historie aus früheren Gesprächen/Sessions.** Jede Claude-Code-
  Session läuft isoliert; frühere Unterhaltungen (z. B. auf einem anderen
  Rechner, in einem anderen Chat-Fenster oder auf einer anderen Plattform)
  sind hier nicht sichtbar, auch wenn dort viel zu Voteverse besprochen
  wurde. Dieses Dokument ist der Versuch, genau das dauerhaft im Repo
  festzuhalten, damit es nicht mehr verloren geht.
- **Keine Bilder aus früheren Chats.** Im Repository selbst liegen aktuell
  **keine** Bild-/Design-Dateien (kein `.png`, `.jpg`, `.svg` außerhalb von
  `node_modules`). Falls Screenshots, Mockups oder Referenzbilder zu
  Voteverse an anderer Stelle geschickt wurden, sind sie hier nicht
  vorhanden — bitte erneut hochladen bzw. ins Repo legen (z. B. unter
  `docs/assets/`), dann kann dieses Dokument sie referenzieren.
- **Andere Projekte — teilweise geschlossen.** Es gibt mindestens ein
  zweites Voteverse/Rankly-Projekt außerhalb dieses Repos: eine
  Lovable-App (TanStack Start) mit eigenem, unabhängigem Code- und
  Datenbankstand — siehe Abschnitt 12. **Zusätzlich existieren drei
  komplett andere Produkte im selben Lovable-Workspace:** „PunaAI" (ein
  Handwerker-Marktplatz, dokumentiert in `docs/PUNAKI_MEMORY.md`),
  „Mr. & Mrs. AI Universe" (eine fiktive globale Pageant-/Show-Plattform,
  dokumentiert in `docs/AI_UNIVERSE_MEMORY.md`) und „Lucky Star Numbers"
  (eine Lotto/EuroJackpot-Statistik- und Numerologie-App, dokumentiert in
  `docs/LUCKY_STAR_NUMBERS_MEMORY.md`) — alle drei nichts mit Voteverse zu
  tun. Weitere Projekte auf anderen Plattformen (siehe Tool-Liste in
  Abschnitt 9) sind weiterhin nicht bekannt, solange sie nicht genannt/
  freigegeben werden.

Kurz: Dieses Dokument ist **so vollständig wie das Repo plus die inzwischen
gefundenen/genannten externen Projekte es hergeben** — nicht zwangsläufig so
vollständig wie alle je geführten Gespräche. Abschnitt 10 listet konkret,
was noch von Dir gebraucht wird, um verbleibende Lücken zu schließen.

---

## 1. Vision / Auftrag

Voteverse ist eine globale Plattform, auf der Menschen über praktisch alles
abstimmen (Städte, KI-Tools, Filme, YouTuber, Autos, Meinungsfragen …), und
ein statistisches Modell aus diesen Stimmen eine belastbare Rangliste macht.

**Zentraler Loop, auf den alles einzahlt:**
Discover → Vote (🟢 UP / 🔴 DOWN, unter 2 Sekunden) → Ergebnis sehen →
überrascht sein → teilen → wiederkommen.

Ursprünglicher Projektname war **Rankly**, am 12.09. vollständig zu
**Voteverse** umbenannt (Code, Marke, DB, Cookies, Seed-Daten, Doku).

Dieses Repo ist **Milestone 1: die Voting-MVP**.

---

## 2. Setup & lokaler Start

```bash
cp .env.example .env
npm install
npm run db:migrate
npm run db:seed
npm run dev
# API  → http://localhost:4000/api/v1
# Web  → http://localhost:3000
```

| | |
|---|---|
| Demo-Login | `demo@seed.voteverse.dev` / `password123` |
| Admin-Login | `admin@seed.voteverse.dev` / `password123` |
| DB-Rolle | `voteverse` / Passwort `voteverse_dev` |
| DBs | `voteverse_dev`, `voteverse_test`, `voteverse_shadow` (Postgres 17) |
| Impressum-Inhaber | Kreshnik Gashi, Obereisenheimer Str. 33, 74078 Heilbronn — **echte Daten, nicht ohne Rücksprache ändern** |

### Bekannte Eigenheiten (Windows-Entwicklungsrechner, `C:\Users\Kreshnik\rankly`)

- Node/Git/psql sind in frischen Shells nicht auf PATH — vor jedem
  PowerShell-Befehl Path aus Machine+User zusammensetzen; `psql` liegt unter
  `C:\Program Files\PostgreSQL\17\bin\psql.exe`.
- npm 11 blockiert Install-Scripts standardmäßig — nach `npm install` ggf.
  `npm approve-scripts <pkg>` für native/postinstall-Pakete (argon2, esbuild,
  `@prisma/*`, `@swc/core`, sharp, unrs-resolver).
- Seed läuft über `ts-node`, **nicht** `tsx` (tsx/esbuild verwirft
  Decorator-Metadata, bricht NestJS-DI beim `AppModule`-Bootstrap im
  Seed-Skript). Siehe `apps/api/tsconfig.seed.json`.
- `apps/api/tsconfig.build.json` hat bewusst `incremental:false` — eine
  veraltete `tsconfig.build.tsbuildinfo` außerhalb von `dist/` hat einmal
  dazu geführt, dass `nest build` kommentarlos nichts emittiert.
- Tailwind v4: Basis-Resets gehören in `@layer base` — unlayered CSS schlägt
  `@layer utilities`.
- `next build` und laufender `next dev` dürfen sich nicht dasselbe `.next/`
  teilen (`ENOENT build-manifest.json`) — vor Produktions-Build Dev-Server
  stoppen, `.next` löschen, neu starten.
- PowerShell 5.1 zerlegt `"` in nativen Exe-Argumenten — `psql` über
  `-f datei.sql` aufrufen, nicht `-c "…"`.

---

## 3. Architektur — festgelegt, nicht neu diskutieren

| Ebene | Wahl | Warum |
|---|---|---|
| Monorepo | npm Workspaces + Turborepo | Ein Build-Graph für API, Web, geteiltes Package. |
| API | NestJS + Prisma, separat vom Web | Web rührt die DB nie direkt an; API kann später native Apps bedienen. |
| DB | PostgreSQL 17 | Transaktionale Integrität fürs Wallet-Ledger, saubere Aggregation über Zeitfenster. |
| Web | Next.js 15 (App Router) + Tailwind v4 | SSR/ISR für SEO; Mutationen über BFF-Routen (`apps/web/src/app/api/*`), JWT httpOnly. |
| Ranking-Modell | Wilson-Lower-Bound + Bayesian-Average + Per-Vote-Trust-Gewicht (`packages/shared/src/ranking/`) | 100.000↑/15.000↓ muss 100↑/10↓ schlagen — reine Prozent-Differenz kann das nicht. 19 Property-Tests. |

Paket-Namen: `@voteverse/shared`, `@voteverse/api`, `@voteverse/web`.

### Struktur (Aufbau des Repos)

```
voteverse/
  apps/
    api/            NestJS + Prisma — REST, versioniert unter /api/v1
      prisma/         Schema + Migrations
      src/
        auth/ battles/ categories/ common/ config/ entities/
        feed/ health/ points/ prisma/ rankings/ search/
        stats/ trending/ users/ votes/ analytics/
    web/            Next.js 15 (App Router) + Tailwind v4
      src/
        app/          Routen (Pages + BFF-API-Routen)
        components/
        lib/
  packages/
    shared/         TS-Typen, Zod-Schemas, reine Ranking-Algorithmus-Bibliothek
      src/ranking/    Score-Berechnung (scoreItem(), Wilson/Bayesian/Trust)
      src/schemas/    Zod-Validierung
  docs/             Dokumentation (dieses Memory, Deployment, Statusbericht)
  .claude/          Launch-Config für Editor/Debugger
```

- Web-App hat **keinen** DB-Zugriff. Browser-Mutationen (Voting, Auth) laufen
  über Next.js BFF-Route-Handler, die das JWT in `httpOnly`-Cookies halten
  und an die API weiterreichen.
- Das Ranking-Modell ist eine **reine, vollständig getestete Bibliothek**
  (`@voteverse/shared`), austauschbar/A-B-testbar. `StatsService` berechnet
  gecachte `RankingItemStat`-Zeilen (pro Item/Fenster) nach jedem Vote neu.

---

## 4. Produktentscheidungen-Log (chronologisch, entschieden — nicht neu verhandeln)

1. **Account-Pflicht zum Voten** — statt anonym, für Attribution und
   Betrugs-Resistenz.
2. **Separate NestJS-API statt Next-only** — Web-Frontend hat keinen
   DB-Zugriff.
3. **Bezahltes Ranking = transparenter Boost, kein stilles Pay-to-Win.**
   Nutzerwunsch: „jeder soll für Platz 1 zahlen können, überall, auch bei
   echten Personen". Zahlung verschiebt die **Position**, aber **nie** die
   angezeigte Community-Zustimmung — jeder geboostete Eintrag trägt sichtbar
   „⚡ Sponsored". Community Score und Voteverse-Support werden immer
   getrennt angezeigt. Modell in `packages/shared/src/ranking/score.ts`
   (`scoreItem()`), Cap `maxSupportInfluence`.
4. **Punkte-Kauf ist (noch) kein echtes Stripe.** Ledger/Wallet
   produktionsreif (`PointsWallet`, `PointsTransaction`, unveränderliches
   Log) — es fehlt nur der echte Zahlungsanbieter (braucht
   Anbieter-Zugangsdaten, die nur der Nutzer besorgen kann).
5. **Battles sind exklusiv.** Seite A wählen zieht eine vorher gewählte
   Seite B automatisch zurück. End-to-end verifiziert: kein Doppelzählen.
6. **Rebrand Rankly → Voteverse (12.09.).** Vollständig durchgezogen:
   npm-Pakete, DB-Rolle/-Namen, Cookies, UI, Seed-Domains, Doku. Nur der
   lokale Ordnerpfad blieb `rankly`.
7. **Monetarisierung für den Launch abgeschaltet (12.09.).** Erst
   veröffentlichen, ohne etwas zu verdienen. Zahlungen kommen zurück, sobald
   Holding-UG und operative UG stehen (Zielmarke **01.01.2027**). Als
   Feature-Flag umgesetzt (`FEATURE_BOOST_ENABLED` API-seitig,
   `NEXT_PUBLIC_FEATURE_BOOST` web-seitig, beide Default `false`), **nicht**
   als Code-Entfernung:
   - `StatsService` zwingt `maxSupportInfluence` serverseitig auf 0, solange
     das Flag aus ist — auch bestehende Boost-Daten wirken dann nicht mehr.
   - `PointsController` lehnt `purchase`/`boost`/`wallet`/`packages` mit 403 ab.
   - Signup-Bonus und Demo-Boost-Seeding werden übersprungen.
   - Web blendet Boost-Button, Wallet-Chip und `/points`-Shop komplett aus
     (404 statt totem UI).
   - **Reaktivieren:** beide Flags auf `true`, App neu starten. Kein
     Nachbauen nötig.
8. **Impressum mit echten Daten (12.09.).** Privatperson-Status, keine
   Zahlungen, keine Handelsregister-/USt-Angaben nötig. Bei Wechsel auf
   UG-Struktur muss `/impressum` aktualisiert werden (Firma,
   Handelsregister-Nr., Registergericht, Vertretungsberechtigte).

---

## 5. Aktueller Stand (was heute funktioniert)

**Voting-Kern.** UP/DOWN mit Retract (nochmal klicken zieht zurück) und
Wechsel, ohne Doppelzählung. 6 Zeitfenster (All-Time/Jahr/Monat/Woche/
Heute/Live). Tageskontingent, Rate-Limits, Velocity-Dämpfung.
`apps/api/src/votes/`, `apps/api/src/stats/`.

**Ranking-Engine.** Wilson + Bayesian + Trust-Gewicht, reine testbare
Bibliothek in `packages/shared/src/ranking/`, 19 Tests grün.

**Boost-Wirtschaft** (gebaut, per Flag deaktiviert). Wallet + unveränderliches
Transaktions-Ledger, `apps/api/src/points/`.

**Battles & This-or-That.** `Ranking.type = BATTLE`,
`apps/api/src/battles/`, Web unter `/battles`, `/battles/[slug]`,
`/this-or-that`. 10 Battles geseedet.

**Content & Oberfläche.** 50 Kategorien (hierarchisch: AI, Technology,
Travel, Entertainment, Sports, Food, Crypto, Finance, Politics, News,
Health, Creators, Cars, Fashion, Business, Science, Fun/This-or-That …),
~117 Entitäten, 41 Rankings/Battles, Startseite-Feed (Hero, Trending, For
You, Popular, Battles-Reihe, Kategorie-Reihen), Kategorie-/Entity-/
Profil-Seiten, Suche, Trending, „One More Vote"-Loop, Ranking erstellen.
SEO: dynamische Meta-Tags, JSON-LD `ItemList`, Sitemap, robots.txt.
Animierter farbenfroher Hintergrund (Light & Dark, `prefers-reduced-motion`
respektiert). Impressum mit Footer-Link. Mobile-first, theme-aware
(hell/dunkel), barrierefreie Vote-Controls.

**Seed-Stand:** 1.402 Nutzer, 41 Rankings/Battles, 157.530 Votes,
0 Boosts/Wallets (Monetarisierung aus).

**Tests:** `npm test` → 19 Ranking-Engine-Tests + 7 Zeitfenster-Tests, alle
grün. `npm run typecheck` → alle 3 Workspaces sauber.

### API-Oberfläche (v1) — Kurzreferenz

| Methode | Pfad | Auth | Hinweis |
|---|---|---|---|
| `POST` | `/auth/register` `/auth/login` `/auth/refresh` `/auth/logout` | – | rotierende Refresh-Tokens |
| `GET` | `/auth/me` | ✅ | |
| `GET` | `/feed/home` | optional | Hero + alle Feed-Sektionen |
| `GET` | `/feed/next-vote` | ✅ | „one more vote"-Pick |
| `GET` | `/rankings` `/rankings/:slug` `/rankings/:slug/related` | optional | `?window=`, `?sort=trending\|new\|popular` |
| `POST` | `/rankings` | ✅ | Ranking erstellen |
| `POST` | `/votes` | ✅ | `{ rankingItemId, value }`, `?window=` |
| `GET` | `/categories` `/categories/tree` `/categories/:slug` | – | hierarchisch |
| `GET` | `/entities/:slug` | – | Cross-Ranking-Ansicht eines Objekts |
| `GET` | `/trending` | – | |
| `POST` | `/trending/recompute` | admin | |
| `GET` | `/search?q=` | – | Rankings + Entities + Categories |
| `GET` | `/users/:username` | – | öffentliches Profil |
| `PATCH` | `/users/me/profile` · `GET /users/me/activity` | ✅ | |
| `POST` | `/analytics/events` | optional | Allowlist-Event-Namen |
| `GET` | `/health` | – | |

---

## 6. Design / Aussehen

- Mobile-first, Light- und Dark-Theme, barrierefreie Vote-Buttons (🟢 UP /
  🔴 DOWN).
- Animierter, farbenfroher Hintergrund auf der Startseite/den Feed-Seiten —
  respektiert `prefers-reduced-motion`.
- Boost/Sponsoring wird, wenn aktiv, **immer** transparent als „⚡
  Sponsored" gekennzeichnet, getrennt vom Community-Score — kein stilles
  Pay-to-Win in der UI.
- Es liegen aktuell **keine** Bild-/Screenshot-Dateien im Repo (siehe
  Abschnitt 0). Für ein vollständiges visuelles Referenzbild (Mockups,
  Farbpalette, Logo, Screenshots) fehlen noch Assets — siehe Abschnitt 10.
- Ein gerenderter Statusbericht mit Kennzahlen und Fortschrittsbalken
  existiert als HTML unter `docs/status-report.html` (funktioniert als
  eigenständige Seite, deckt sich inhaltlich mit diesem Dokument).

---

## 7. Deployment-Zielarchitektur

Domains: **voteverse.global** (primär) und **voteverse.de** (leitet auf
`voteverse.global` um), beide bei IONOS registriert.

```
Browser
  │
  ├── voteverse.global, www.voteverse.global   → Vercel (Next.js)
  └── api.voteverse.global                     → Railway (NestJS + Postgres)

voteverse.de, www.voteverse.de  → 301-Redirect auf voteverse.global (in Vercel)
```

- **Railway:** API-Service, Root Directory `.` (Repo-Root), Builder
  Dockerfile, Pfad `apps/api/Dockerfile` (steht auch in `railway.json`).
  Postgres als separater Service, per „Add Reference" verbunden
  (`DATABASE_URL` automatisch gesetzt). `PORT` nicht manuell setzen.
  Container führt beim Start automatisch `prisma migrate deploy` aus.
  Produktions-Seed einmalig: `npm run prisma:seed:prod -w @voteverse/api`
  (Kategorien/Rankings **ohne** Fake-Votes). Custom Domain
  `api.voteverse.global`.
- **Vercel:** Web, Root Directory `apps/web`, Next.js-Preset automatisch
  erkannt, Build-/Install-Command **nicht** überschreiben
  (`apps/web/vercel.json` übernimmt das). Env-Vars: `NEXT_PUBLIC_API_URL`,
  `API_INTERNAL_URL` (beide `https://api.voteverse.global`),
  `NEXT_PUBLIC_SITE_URL` (`https://voteverse.global`),
  `NEXT_PUBLIC_FEATURE_BOOST=false`. Domains: `voteverse.global` (Primary),
  `www.voteverse.global` (Redirect), `voteverse.de` + `www.voteverse.de`
  (301-Redirect auf `voteverse.global`).
- **IONOS DNS:** A/CNAME-Einträge für alle vier Domains/Subdomains gemäß
  den von Vercel/Railway angezeigten Zielwerten — Details in
  `docs/deployment.md`.
- **Produktions-Secrets** (JWT Access/Refresh) und weitere Railway-Variablen
  (`NODE_ENV`, TTLs, Rate-Limits, `FEATURE_BOOST_ENABLED=false`,
  `CORS_ORIGINS`) stehen vollständig in `docs/deployment.md` — dort auch
  nachschlagen, **nicht** hier duplizieren, damit es nur eine Quelle für
  Secrets gibt.
- **Nach erstem Deploy:** echten Account unter `/register` anlegen (Seed
  enthält bewusst keine Accounts), Admin-Rolle einmalig per SQL setzen,
  `/impressum` prüfen.

Voraussetzung: privates GitHub-Repo `voteverse` — **bereits vorhanden**
(`donalbanese28111912-crypto/voteverse`, dieses Repo).

---

## 8. Tests & Qualitätssicherung

- `npm test` — alle Workspaces (Ranking-Engine + API-Unit-Tests).
- `npm run typecheck` — alle Workspaces.
- `npm run db:reset` — drop, re-migrate, re-seed.
- `npm run db:studio -w @voteverse/api` — Prisma Studio.
- Property-Tests in `packages/shared/src/ranking/ranking.test.ts` sichern
  genau die Eigenschaften, auf die sich das Produkt verlässt: große
  konsistente Stichproben schlagen kleine Glückstreffer (100k/15k vs.
  100/10), bezahlter Support verschiebt nie den Community-Score und ist
  hart gedeckelt, verdächtiges Vote-Gewicht wird abgewertet, ein frischer
  Wegwerf-Account zählt < 0,35.
- `apps/api` deckt Zeitfenster-Grenzfälle ab; der Vote-Pfad (Retract/
  Wechsel/kein Doppelzählen) ist end-to-end gegen einen laufenden Stack
  verifiziert.

---

## 9. Verfügbare Tool-/KI-Anbindungen dieser Arbeitsumgebung

Das sind die MCP-Verbindungen, die **diese Claude-Code-Session** aktuell zur
Verfügung hat (nicht Teil des Voteverse-Produkts selbst, sondern
Werkzeuge, mit denen an Voteverse — oder anderen Themen — gearbeitet werden
kann):

| Tool | Wofür nutzbar |
|---|---|
| **GitHub** | Repo lesen/schreiben, PRs, Issues, Reviews, CI-Status — aktuell nur für `donalbanese28111912-crypto/voteverse` freigegeben. |
| **Gmail** | E-Mails lesen/senden/entwürfen/labeln. |
| **Google Calendar** | Termine erstellen/suchen/ändern. |
| **Google Drive** | Dateien suchen/lesen/erstellen/teilen. |
| **Slack** | Nachrichten senden/lesen, Kanäle, Listen, Canvases. |
| **Notion** | Seiten/Datenbanken erstellen, suchen, Sessions/Skills. |
| **Lovable** | Eigenständiger KI-App-Builder (TS/Tailwind/shadcn) — eigene Projekte, nicht Voteverse. |
| **n8n** | Workflow-/Agent-Automatisierung. |
| **Shopify** | Shop-Verwaltung (Produkte, Bestellungen, Discounts …). |
| **Canva** | Design-Erstellung/-Bearbeitung. |
| **Higgsfield** | Bild-/Video-/Audio-Generierung, Website-Builder, TikTok-Publishing. |
| **Metricool** | Social-Media-Planung & -Analyse. |
| **Spotify** | Playlists/Suche. |
| **AfterShip Channels** | TikTok-Shop-Feed, Affiliate/Creator-Tools. |

**Für Voteverse selbst genutzt/relevant:** GitHub (Code, PRs). Die übrigen
Tools sind aktuell **nicht** mit dem Voteverse-Produkt verknüpft — falls z. B.
Slack-Benachrichtigungen bei neuen Boosts, ein Notion-Board für die
Roadmap, oder Social-Media-Postings über Metricool gewünscht sind, ist das
technisch möglich, aber noch nicht gebaut/entschieden.

---

## 10. Offene Punkte — was fehlt oder von Dir noch gebraucht wird

**Aus dem ursprünglichen Master-Spec, noch nicht angefangen** (ungefähre
Sinnvoll-Reihenfolge):

1. **Gamification** (XP, Level, Badges, Streaks) — baut direkt auf dem
   bestehenden Vote-Loop auf.
2. **News-Ingestion & automatische KI-Themengenerierung** — braucht eine
   externe News-API/RSS-Quelle, die Du noch auswählen musst.
3. **Admin-Dashboard** (Users, Reports, Payments, Trending-Recompute manuell
   auslösen …).
4. **Moderations-Queue** (Report-Handling, AI-Moderation).
5. **Echtes Stripe** — erst ab 01.01.2027 relevant (Entscheidung 7 oben),
   Ledger ist schon bereit; braucht Stripe-Zugangsdaten von Dir.
6. **Mehrsprachigkeit (i18n).**
7. **Native Apps** — API ist bewusst frontend-unabhängig gebaut, dafür
   vorbereitet.

**Konkret von Dir gebraucht, um dieses Memory und das Projekt lückenlos zu
machen** (siehe auch Abschnitt 0):

- ~~**Andere Projekte**~~ — **teilweise beantwortet (15.09.):** Die
  Lovable-App (TanStack Start) ist jetzt in Abschnitt 12 dokumentiert. Offen
  bleibt: gibt es noch weitere Projekte (andere Repos, andere Plattformen)?
  Und — wichtiger — **welches der beiden Voteverse-Projekte (GitHub oder
  Lovable) soll die Haupt-Implementierung sein**, siehe Frage am Ende von
  Abschnitt 12.
- **Bilder/Design-Referenzen:** Screenshots, Mockups, Logo, Farbpalette —
  am besten direkt ins Repo legen (z. B. `docs/assets/`) oder in dieser
  Session hochladen, dann trage ich sie hier ein. (Ein Screenshot der
  Lovable-App-Startseite liegt der Session vor, siehe Abschnitt 12 — für
  dieses Repo selbst fehlen weiterhin Bild-Assets.)
- **Gewünschte weitere KI-/Tool-Anbindungen:** Soll eines der in Abschnitt 9
  gelisteten Tools tatsächlich an Voteverse angebunden werden (z. B. Notion
  für Roadmap-Tracking, Slack für Alerts)? Aktuell ist nichts davon mit dem
  Produkt verdrahtet.
- **News-API/RSS-Quelle** für Punkt 2 oben.
- **Stripe-Zugangsdaten** für Punkt 5 oben (erst 2027 relevant) — die
  Lovable-App hat bereits eine echte Stripe-Integration; falls das GitHub-
  Repo diese übernehmen soll, könnten die dortigen Stripe-Keys/-Konfiguration
  als Vorlage dienen (nach Rücksprache).

---

## 11. Wie mit diesem Projekt weitergearbeitet werden soll

- Architektur-Entscheidungen, die nicht explizit vorgegeben sind, selbst
  treffen — kurz begründen, dann bauen.
- Bei „mach weiter" ohne konkrete Vorgabe: nächsten Punkt aus Abschnitt 10
  oben nach unten nehmen, außer der Kontext sagt klar etwas anderes.
- An die Entscheidungen in Abschnitt 4 halten — nicht erneut fragen, ob
  Boost transparent sein soll oder ob Voting Account-Pflicht ist. Das ist
  entschieden.
- Nach jedem größeren Schritt: `npm test` + `npm run typecheck` in
  betroffenen Workspaces, dann committen mit aussagekräftiger Message.
- Bei echten Rechtsdaten (Impressum, Datenschutzerklärung, AGB, echte
  Zahlungsintegration) **niemals erfinden** — nachfragen.
- **Dieses Dokument aktuell halten:** Wenn sich Architektur, Stand oder
  Entscheidungen ändern, `docs/PROJECT_MEMORY.md` in derselben Änderung
  mit aktualisieren, damit es nie wieder veraltet.

---

## 12. Zweites Voteverse-Projekt: Lovable-App (TanStack Start)

Am 15.09. gefunden: Neben diesem GitHub-Repo existiert eine **zweite,
unabhängige Voteverse-Implementierung** auf [Lovable](https://lovable.dev) —
Projekt-ID `2808a071-54ef-4329-9855-668d486a677f`, Workspace
`fe22a0379937aa454cd2`, Editor:
`https://lovable.dev/projects/2808a071-54ef-4329-9855-668d486a677f`.
Sichtbarkeit: privat. Erstellt 10.09.2026, zuletzt bearbeitet 12.09.2026.

**Wichtig:** Dieses Projekt ist technisch **komplett getrennt** vom
NestJS/Next.js-Monorepo in diesem Repo — eigener Code, eigene Datenbank,
kein bekannter Git-Sync zwischen beiden. Beide verfolgen dieselbe Vision
(siehe `docs/rankly-master-spec.md`), sind aber zwei parallele, nicht
gegenseitig synchronisierte Umsetzungen desselben Produkts.

### Tech-Stack (abweichend vom GitHub-Repo)

| Ebene | Wahl |
|---|---|
| Framework | TanStack Start (React 19, TanStack Router 1.170, Vite 8) |
| Sprache | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui (Radix-Primitives) |
| ORM/DB | Drizzle ORM + PostgreSQL, gehostet über Supabase (`@supabase/supabase-js`) |
| Auth | `@lovable.dev/cloud-auth-js` |
| Zahlungen | **Echtes Stripe** bereits integriert (`stripe`, `@stripe/stripe-js`,
  `@stripe/react-stripe-js`) — `StripeEmbeddedCheckout.tsx`,
  `StripeSubscriptionCheckout.tsx`, `PaymentTestModeBanner.tsx` |
| Paketmanager | Bun (`bun.lock`, `bunfig.toml`) |
| Migrations | `drizzle/migrations/0000`–`0009` (u. a. Core-Schema, RPCs, Credit-Points-Limits, Subscriptions/Supporter, Battles/Polls/Comments, Content-Universum, Übersetzungen) |

### Aktueller Stand (laut `roadmap.md` im Lovable-Projekt)

Erledigt:
- Echte Konten, dauerhaft gespeicherte Stimmen
- Points-Wallet, Shop, **serverseitige Zahlungen** und Transaktionsverlauf
  (weiter als der GitHub-Stand — dort ist Stripe nur vorbereitet, hier real
  angebunden, aktuell aber ebenfalls **ausgeblendet/deaktiviert**, siehe unten)
- DB-Rankings für Städte, Länder, KI, Smartphones, Filme
- Mobile Abstimmung mit direktem Ergebnis, großen Up/Down-Flächen
- Admin-Panel für Reports, Moderation, Stimmen, Points, Zahlungen
- Zahlungen ausgeblendet, Impressum, zusätzliche Umfragen
- **Welle 1:** echte Battles, Frage-Formate (Ja/Nein, Auswahl, Bewertung,
  Skala, Prognose), Suche, „Überrasch mich", Trending nach Tempo
- Anmeldung vorerst ausgeblendet, sämtliche sichtbaren Texte an
  Sprachauswahl gekoppelt (**i18n/Sprachumschalter existiert**, Screenshot
  zeigt DE-Auswahl im Header)

Offen (laut Roadmap):
- **Welle 2:** Themenseiten, Tagesfrage, Kommentare mit Moderation,
  Profilstatistik, Teilen, Community-Vorschläge
- **Welle 3:** Startseite nach Konzept, Deutsch/Englisch vollständig, SEO,
  mehr Inhalte

Zusätzlich laut internen Planungsdokumenten (`.lovable/plan/*.md` im
Lovable-Projekt) ein laufendes Vorhaben **„Großes Inhalts-Universum"**:
Kategorienbaum, Schlagworte, Einträge-Universum (Personen/Orte/Produkte/
Marken), Verknüpfungen zwischen Themen, große Content-Menge per
Seed-Generator (Ziel: 600+ Duelle, 800+ Fragen, 250+ Rankings, 2.000+
Einträge), neue Startseite mit vielen Themenreihen, erweiterte Trending-
Logik, Feed-Mischung nach festen Anteilen (aktuell/Interessen/dauerhaft/
Entdeckung/Duelle/Experiment).

### Verhältnis zum GitHub-Repo

- **Gemeinsame Vision, getrennte Umsetzung.** Beide Implementierungen gehen
  auf denselben 74-Punkte-Master-Prompt zurück (siehe
  `docs/rankly-master-spec.md`) — der GitHub-Fortsetzungs-Prompt
  (`docs/voteverse-continuation-prompt.md`) ist eine spätere, destillierte
  Fassung davon für die NestJS/Next.js-Seite.
- **Unterschiedlicher Reifegrad in unterschiedlichen Bereichen.** Die
  Lovable-App hat bereits echte Battles mit mehreren Frage-Typen, echte
  Stripe-Integration und einen Sprachumschalter; das GitHub-Repo hat dafür
  eine sauberere, testabgesicherte Ranking-Engine (Wilson + Bayesian + Trust,
  19 Property-Tests) und eine production-ready Deployment-Pipeline
  (Vercel + Railway, live erreichbare Domain-Architektur).
  Beide haben Monetarisierung aktuell **bewusst deaktiviert/ausgeblendet**.
- **Kein bekannter Datenaustausch.** Nutzer, Votes, Rankings sind in
  getrennten Datenbanken (Prisma/Postgres hier vs. Drizzle/Supabase dort) —
  nichts davon ist synchronisiert.
- **Offene Frage an Dich:** Welches der beiden Projekte ist die
  „Haupt"-Implementierung, die weitergeführt/deployed werden soll? Oder
  bleiben beide parallel bestehen (z. B. Lovable als schnelles
  Experimentierfeld, GitHub-Repo als production-Kandidat)? Das entscheidet,
  wie viel Aufwand künftig in welches Repo fließen sollte.

### Zugriff

Diese Session hat über den Lovable-MCP-Server Lese-/Schreibzugriff auf das
Lovable-Projekt (Dateien lesen, Nachrichten an den Lovable-Agenten senden,
Diffs einsehen) — siehe Tool-Liste in Abschnitt 9. Ein Import des
Lovable-Codes in dieses GitHub-Repo (oder umgekehrt) ist technisch möglich,
aber bisher nicht angefragt/entschieden.

---

## 13. Quellen

**In diesem Repo (`donalbanese28111912-crypto/voteverse`):**
- `README.md` — Kurzüberblick, Setup, API-Referenz.
- `docs/voteverse-continuation-prompt.md` — ausführlicher
  Fortsetzungs-Prompt für Coding-Sessions (Basis dieses Dokuments).
- `docs/deployment.md` — vollständige Deployment-Anleitung inkl. Secrets.
- `docs/status-report.html` — gerenderter Statusbericht mit
  Fortschrittsbalken.
- `docs/rankly-master-spec.md` — der vollständige ursprüngliche
  74-Punkte-Master-Prompt (Produktvision vor dem Rebrand zu Voteverse).
- `docs/PROJECT_MEMORY.md` — **dieses Dokument**, die konsolidierte
  Gesamtübersicht.

**Extern:**
- Lovable-Projekt „Voteverse" (TanStack Start) —
  `https://lovable.dev/projects/2808a071-54ef-4329-9855-668d486a677f` —
  siehe Abschnitt 12.
- Lovable-Projekt „PunaAI" (anderes Produkt, gleicher Lovable-Workspace) —
  `https://lovable.dev/projects/52a1eaf2-119b-4197-9a30-739f35d61ab2` —
  vollständig dokumentiert in `docs/PUNAKI_MEMORY.md` und
  `docs/punaki-master-spec.md`.
- Lovable-Projekt „Mr&Mrs AI Universe" (anderes Produkt, gleicher
  Lovable-Workspace) —
  `https://lovable.dev/projects/c6f44b72-aea1-4665-b40c-6f4cf893eb63` —
  vollständig dokumentiert in `docs/AI_UNIVERSE_MEMORY.md` und
  `docs/ai-universe-master-spec.md`.
- Lovable-Projekt „Lucky Star Numbers" / „Lotto & EuroJackpot AI" (anderes
  Produkt, gleicher Lovable-Workspace) —
  `https://lovable.dev/projects/58ea6980-e37b-4a97-bceb-7efcf3e55f84` —
  vollständig dokumentiert in `docs/LUCKY_STAR_NUMBERS_MEMORY.md` und
  `docs/lucky-star-numbers-master-spec.md`.
