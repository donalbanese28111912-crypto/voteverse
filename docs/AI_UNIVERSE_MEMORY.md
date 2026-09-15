# Mr. & Mrs. AI Universe — Projekt-Memory (komplett, Stand 2026-09-15)

> **Zweck dieses Dokuments:** Analog zu `docs/PROJECT_MEMORY.md` (Voteverse)
> und `docs/PUNAKI_MEMORY.md` (PunaAI) — alles Bekannte zu diesem dritten,
> ebenfalls eigenständigen Projekt an einem Ort.
>
> **„Mr. & Mrs. AI Universe" hat nichts mit Voteverse oder PunaAI zu tun.**
> Es lebt nur als Lovable-Projekt (kein GitHub-Repo bekannt) und liegt hier
> nur, weil dieses Repo die einzige der Session zur Verfügung stehende
> dauerhafte Schreib-Ablage ist.

---

## 0. Wichtiger Hinweis zur Reichweite dieses Dokuments

Gefunden am 15.09.2026 über einen vom Nutzer geteilten Lovable-Link,
während an Voteverse gearbeitet wurde. Zugriff nur lesend über den
Lovable-MCP-Server. Bei drei Lovable-Projekten im selben Workspace mit
demselben Muster (Vision zuerst mit dem Nutzer besprochen, dann per
Master-Prompt an Lovable übergeben) ist davon auszugehen, dass **weitere,
noch nicht geteilte Projekte im selben Workspace existieren könnten** —
falls ja, bitte Links teilen, dann wird auch dafür ein Memory-Dokument
angelegt.

---

## 1. Vision / Auftrag

Eine fiktive, globale „Beauty Pageant"/Show-Plattform im Stil von Miss
Universe + Olympia + Hollywood-Award-Show + Metaverse + Fantasy-Welt +
königliches Königreich: **„Mr. & Mrs. AI Universe"** — über 100 reale
Länder plus historische (Ancient Egypt, Roman Empire, Viking Realms …) und
komplett erfundene Fantasieländer (Dragonia, Avaloria, Lunaria …) treten
mit je einem „Mister AI [Land]" und „Miss AI [Land]" gegeneinander an.
Jeder Charakter hat ein einzigartiges Gesicht, eine ausführliche Biografie,
eigene Mode/Kostüme, Wettbewerbskategorien (Elegance, Intelligence,
Talent, Humanity, Cultural Knowledge, Innovation, Creativity, Fitness,
Performance, AI Challenge, Sustainability, Entertainment), ein Live-Ranking,
eine Krönungszeremonie, ein „Royal Book" (digitale Enzyklopädie), Interviews,
eine Galerie, eine virtuelle „AI Universe City", einen Charaktergenerator
für Besucher und eine „Zeitreise" durch historische Epochen.

Der vollständige Ursprungs-Prompt steht unverändert in
`docs/ai-universe-master-spec.md`.

---

## 2. Zugriff & Identifikatoren

| | |
|---|---|
| Lovable-Projekt-ID | `c6f44b72-aea1-4665-b40c-6f4cf893eb63` |
| Workspace-ID | `fe22a0379937aa454cd2` (**derselbe Workspace** wie Voteverse-Lovable
  und PunaAI — alle drei Projekte liegen im selben Lovable-Account) |
| Editor | `https://lovable.dev/projects/c6f44b72-aea1-4665-b40c-6f4cf893eb63` |
| Sichtbarkeit | privat, **nicht veröffentlicht** (`is_published: false`) —
  anders als PunaAI ist dieses Projekt noch nicht öffentlich erreichbar |
| Erstellt | 10.09.2026 |
| Zuletzt bearbeitet | 12.09.2026 |

---

## 3. Tech-Stack

Identisch zum Voteverse-Lovable-Projekt (gleiche Vorlage/Workspace):

| Ebene | Wahl |
|---|---|
| Framework | TanStack Start (React 19, TanStack Router, Vite 8) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| ORM/DB | Drizzle ORM + PostgreSQL über Supabase |
| Auth | `@lovable.dev/cloud-auth-js` |
| Zahlungen | **Echtes Stripe** integriert (`stripe`, `@stripe/stripe-js`,
  `@stripe/react-stripe-js`) — Live-Gang begonnen, aber **blockiert**:
  Stripe-Konto-Verknüpfung im Payments-Tab noch nicht abgeschlossen
  (siehe Abschnitt 6). |
| Paketmanager | Bun |
| Migrations | `0000_seed_cosmic_realm_products`,
  `0001_stories_and_quiz_game`, `0002_stories_realtime` — also zusätzlich
  zum Pageant-Kern: ein Shop/Produkte-System („cosmic realm products"),
  ein Quiz-Spiel und ein „Stories"-Feature mit Realtime-Updates. |

---

## 4. Umfang der bereits generierten Inhalte

Deutlich das inhaltlich umfangreichste der drei bekannten Lovable-Projekte:

- **170 Nationen-Wappen** (eigene Audit-Seite zählt/prüft alle 170 auf
  Eindeutigkeit).
- **Hunderte individuell generierte Charakterbilder**: pro Charakter vier
  eigene Foto-Szenen — „family" (Familie/Privatleben), „profession"
  (Beruf), „hobby", „crowning" (gekrönt beim Pageant) — unter
  `src/assets/character-scenes/`, alphabetisch von real (Aiko Nakamura,
  Akosua Boateng, Aleksi Virtanen …) bis fantasievoll (Aeliana Nimbus,
  Aelor Vane, Aerandir Leafsong, Amanirenas of Meroe …).
- Eine dedizierte Lore-Seite für **„Teuta of Scodra"** (historische
  illyrische Königin) mit Schlachten und Porträt.
- Interviews in **20 Sprachen** pro Charakter (Übersichtsseite mit Suche/
  Filter nach Reich, Epoche, Mister/Miss).
- Vollständige historische Delegationen in der Zeitreise (beide Porträts,
  Namen, Kleidung, Einzel- und Gesamtpunkte je Epoche).

---

## 5. Aktueller Stand (laut `roadmap.md` im Lovable-Projekt)

Erledigt:
- Mehrsprachige Interview-Daten + Übersichts-/Detailseiten für alle
  Charaktere.
- Interview-Navigation + Verlinkung zu Ranking/Profil.
- Historische Zeitleiste mit vollständigen Delegationen, Trailern,
  Kleidung/Couture und Live-Punkten.
- Interview-, Ranking-, Profil- und Zeitleisten-Erlebnisse verifiziert.
- **Echtes Voting treibt ein Popularitäts-Ranking und die
  Discover-Feed-Reihenfolge** (kein statisches Scoring mehr).
- Visuelle Audit-Seite mit allen 170 Nationen-Wappen.
- Eigene „Teuta of Scodra"-Lore-Seite mit Schlachten + Porträt, verlinkt.
- Ranking-Updates, Wappen-Anzahl/-Eindeutigkeit und Teuta-Lore-Navigation
  verifiziert.
- Vier kulturell zugeschnittene Foto-Szenen für **jeden** aktuellen
  Charakter erzeugt (Familie/Privatleben, Beruf, Hobby, gekröntes
  Pageant) und in Profile + eigene Galerie-Kategorien eingebunden;
  verifiziert, dass kein entferntes Land mehr auftaucht und alle vier
  Szenen je Charakter vorhanden sind.

Offen:
- **Stripe-Live-Bereitschaft** — blockiert durch die noch nicht
  abgeschlossene Stripe-Konto-Verknüpfung/-Onboarding. Laut internem
  Planungsdokument (`.lovable/plan/stripe-livegang-…md`) ist das der
  einzige verbleibende Schritt vor echten Live-Zahlungen: danach Stripe-
  Live-Konto einrichten, Lovable-App im Live-Konto installieren, Live-
  Schlüssel/Webhooks automatisch von Lovable, Readiness-Check ausführen.
  Checkout, Zahlungsbestätigung und Punktegutschrift sind bereits
  serverseitig abgesichert angelegt; das Ranking aktualisiert sich nach
  bestätigter Zahlung über die bestehende Live-Datenquelle — es fehlt nur
  die Kontofreischaltung.

---

## 6. Monetarisierungsmodell (soweit erkennbar)

Ähnliches Muster wie bei Voteverse (Community-Votes vs. bezahlte
Unterstützung) und PunaAI (Nicht-Kommerz-Modus vor Launch): Es gibt
„freie Votes", die das echte Ranking treiben, und ein Punkte-/
Zahlungssystem über Stripe, das nach Zahlungsbestätigung Punkte gutschreibt
— aktuell im Stripe-Testmodus, Live-Umschaltung hängt an der
Konto-Freischaltung durch den Nutzer. Der sichtbare
Testmodus-Hinweis verschwindet laut Plan automatisch, sobald der
Live-Schlüssel aktiv ist — keine manuelle UI-Änderung nötig.

---

## 7. Design

Farben: Schwarz, Gold, Weiß, tiefes Royal Blue, dezente Neon-Effekte —
im Screenshot bestätigt (dunkler Weltraum-/Erde-Hintergrund, goldene
Serifenschrift „MR. & MRS. AI UNIVERSE", goldener „ENTER THE AI UNIVERSE"-
Button). Stil: luxuriös, futuristisch, „royal", cinematisch. Umfangreiche
Kopfnavigation: Discover, Ranking, Nations, Contestants, All Characters,
Interviews, Competition, Gallery, Coronation, Royal Book, The City, Time
Travel, Calendar, News, Stories, Quiz Game, Create, Sign In — deutlich mehr
Unterseiten bereits vorhanden als im Screenshot der Homepage sichtbar.

---

## 8. Offene Punkte / was von Dir gebraucht wird

- **Stripe-Konto-Verknüpfung abschließen** (Payments-Tab in Lovable), damit
  der Live-Gang fortgesetzt werden kann — das ist der einzige bekannte
  Blocker.
- Klärung, ob/wann dieses Projekt veröffentlicht werden soll
  (`is_published` steht aktuell auf `false`).
- Prüfen, ob es weitere, noch nicht geteilte Projekte im selben
  Lovable-Workspace gibt (siehe Abschnitt 0).

---

## 9. Quellen

- Lovable-Projekt „Mr&Mrs AI Universe" —
  `https://lovable.dev/projects/c6f44b72-aea1-4665-b40c-6f4cf893eb63`
  (Projektbeschreibung = Ursprungs-Prompt, `roadmap.md`, `.lovable/plan/`).
- `docs/ai-universe-master-spec.md` — vollständiger, unveränderter
  Ursprungs-Prompt.
- `docs/AI_UNIVERSE_MEMORY.md` — **dieses Dokument.**
- Zum Vergleich/Kontext (andere Produkte, gleicher Lovable-Workspace):
  `docs/PROJECT_MEMORY.md` (Voteverse) Abschnitt 12,
  `docs/PUNAKI_MEMORY.md` (PunaAI).
