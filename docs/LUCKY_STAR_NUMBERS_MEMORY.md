# Lotto & EuroJackpot AI ("Lucky Star Numbers") — Projekt-Memory (komplett, Stand 2026-09-15)

> **Zweck dieses Dokuments:** Analog zu `docs/PROJECT_MEMORY.md` (Voteverse),
> `docs/PUNAKI_MEMORY.md` (PunaAI) und `docs/AI_UNIVERSE_MEMORY.md` (Mr&Mrs
> AI Universe) — alles Bekannte zu diesem vierten, ebenfalls eigenständigen
> Projekt an einem Ort.
>
> **Hat nichts mit Voteverse, PunaAI oder Mr&Mrs AI Universe zu tun.** Lebt
> nur als Lovable-Projekt, liegt hier nur, weil dieses Repo die einzige der
> Session zur Verfügung stehende dauerhafte Schreib-Ablage ist.

---

## 0. Wichtiger Hinweis zur Reichweite dieses Dokuments

Gefunden am 15.09.2026 über einen vom Nutzer geteilten Lovable-Link. Zugriff
nur lesend über den Lovable-MCP-Server. Dies ist nun das **vierte** Projekt
im selben Lovable-Workspace (`fe22a0379937aa454cd2`) — siehe die anderen
Memory-Dokumente für die ersten drei. Falls weitere existieren, gilt
dieselbe Einladung wie in `docs/AI_UNIVERSE_MEMORY.md` Abschnitt 0: Link
teilen, dann wird dokumentiert.

---

## 1. Vision / Auftrag

**„Lotto & EuroJackpot AI"** (Lovable-Anzeigename: **Lucky Star Numbers**)
ist eine Statistik-, Numerologie- und Astronomie-Analyseplattform rund um
**LOTTO 6aus49** und **EuroJackpot** für Deutschland. Kernidee: historische
Ziehungsdaten (LOTTO ab 1955, EuroJackpot ab 23.03.2012) strukturiert
sammeln, umfangreiche Zahlenstatistik berechnen (Häufigkeiten, heiße/kalte
Zahlen, Paare, Cluster …), daraus kombiniert mit Numerologie, Astrologie,
Astronomie und persönlichen Daten (Geburtsdatum, Lieblingszahlen)
**persönliche „Glückszahlen"** generieren — mit einstellbaren Gewichtungen
und KI-Erklärung, warum welche Zahl vorgeschlagen wird.

**Zentrale, wiederholt betonte Leitplanke im Ursprungs-Prompt:** Die App
darf **niemals** Gewinnversprechen machen oder suggerieren, dass
Statistik/Numerologie/Astrologie/Astronomie die Gewinnwahrscheinlichkeit
beeinflusst — Lottoziehungen sind Zufallsereignisse, vergangene Ziehungen
sagen nichts über zukünftige voraus. Numerologie/Astrologie sind explizit
als Unterhaltungskomponenten gekennzeichnet, nicht als wissenschaftlich
fundierte Vorhersagemethoden. Ein eigener Abschnitt „Responsible Gambling"
verlangt Suchtgefahr-Hinweise und verbietet manipulative Sprache. Der
tatsächlich gebaute Zustand hält sich sichtbar daran (siehe Abschnitt 4/5).

Der vollständige Ursprungs-Prompt (75 Punkte) steht unverändert in
`docs/lucky-star-numbers-master-spec.md`.

---

## 2. Zugriff & Identifikatoren

| | |
|---|---|
| Lovable-Projekt-ID | `58ea6980-e37b-4a97-bceb-7efcf3e55f84` |
| Lovable-Anzeigename | „Lucky Star Numbers" |
| Workspace-ID | `fe22a0379937aa454cd2` (**derselbe Workspace** wie Voteverse,
  PunaAI und Mr&Mrs AI Universe) |
| Editor | `https://lovable.dev/projects/58ea6980-e37b-4a97-bceb-7efcf3e55f84` |
| Sichtbarkeit | privat, **nicht veröffentlicht** (`is_published: false`) |
| Erstellt | 12.09.2026 |
| Zuletzt bearbeitet | 15.09.2026 (**aktivstes der vier bekannten
  Projekte** — heute noch bearbeitet) |

---

## 3. Tech-Stack

Gleiche Basis (TanStack Start) wie die anderen drei Lovable-Projekte, aber
mit eigener KI-Anbindung statt Stripe/Drizzle:

| Ebene | Wahl |
|---|---|
| Framework | TanStack Start (React 19, TanStack Router, Vite 8) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Backend/DB | Supabase (`@supabase/supabase-js` direkt, kein Drizzle) —
  eigene Server-Helfer unter `src/integrations/supabase/` (Client, Auth-
  Middleware, Cron-Auth, Preview-Auth-Storage) |
| KI | **Vercel AI SDK** (`ai`, `@ai-sdk/openai`, `@ai-sdk/openai-compatible`,
  `@ai-sdk/react`) statt Anthropic/OpenAI direkt — eigenes
  `src/lib/ai-gateway.server.ts` + `src/lib/ai.functions.ts` |
| PDF-Export | `jspdf` |
| Fachlogik | eigene Module unter `src/lib/lotto/`: `astro.ts`
  (Astronomie/Astrologie), `generator.ts` (Kombinations-Generator),
  `numerology.ts`, `queries.ts`, `stats.ts` — deckt sich mit der im
  Prompt geforderten Service-Architektur |
| Paketmanager | Bun |
| Zahlungen | Keine (Premium/Freemium laut Prompt nur architektonisch
  vorbereitet, noch nicht gebaut) |

---

## 4. Design

Aus dem Screenshot bestätigt: dunkles Theme mit Violett-/Blau-/Gold-Akzenten,
Card-/Glas-Optik, professionelle Zahlen-Ball-Anzeige (`NumberBall`-
Komponente) für Ziehungsergebnisse. Hero-Claim: **„Zahlen verstehen, nicht
raten"** — mit explizitem Badge „Analyse-Werkzeug · kein
Glücksspielangebot" direkt über der Überschrift und dem Hinweis „Keine
Gewinnversprechen. Ziehungen sind reiner Zufall." direkt unter den
Haupt-Buttons. Das deckt sich mit der im Master-Prompt geforderten
Verantwortungs-/Transparenz-Haltung.

Navigation (Header, Stand Screenshot): Dashboard, Archiv, Statistik,
Generator, AI-Generator, AI-Report, Profil, Datenquellen.

Live-Dashboard-Kacheln im Screenshot: aktuelle LOTTO-6aus49-Ziehung
(5.045 Ziehungen insgesamt in der DB) und aktuelle EuroJackpot-Ziehung
(989 Ziehungen), „Heute"-Kachel mit Mondphase („Zunehmende Sichel") und
Datumszahl, Besucherzähler.

---

## 5. Aktueller Stand (laut `roadmap.md` im Lovable-Projekt)

Erledigt:
- AI-Generator mit persönlichen Kriterien, Statistik- und Quellenbezug.
- Verbindung zu „Meine Zahlen" (Favoriten, Geburtsdatum, Numerologie).
- EuroJackpot-Statistik (Eurozahlen, Heatmap, Trends, Regeländerungen).
- Zahl-für-Zahl-Erklärung durch die KI im AI-Generator (entspricht Punkt 12
  „Transparente AI-Berechnung" im Master-Prompt).
- Astronomie-/Astrologie-Modul (Mondphase, Sonnenstand, Sternzeichen) in
  Generator und Report integriert.
- AI-Report mit PDF-Export (Zusammenfassung, Statistik, Numerologie,
  Astronomie, Historie, Kombinationen, Disclaimer).

Damit sind die MVP-Kernbereiche aus Punkt 71 des Master-Prompts (Auth, DB,
LOTTO/EuroJackpot, Archiv, Statistik, Generator, persönliches Profil,
Numerologie) sowie die „danach"-Module AI, Astronomie/Astrologie und PDF
bereits umgesetzt — deutlich weiter als eine reine MVP-Phase.

**Offen — laut Roadmap ausdrücklich „nicht durch Code lösbar":**
- **KI-Texte erscheinen aktuell nicht**, weil das Projekt-KI-Guthaben
  aufgebraucht ist (HTTP 402) — muss vom Nutzer in Lovable wieder
  aufgeladen werden, kein Code-Problem.
- **EuroJackpot-Datenquelle:** Ziehungen stammen aus der
  Veikkaus-Ziehungs-API; `lotto.de` liefert aktuell nur offizielle
  LOTTO-6aus49-Daten — für EuroJackpot fehlt noch eine offizielle
  deutsche/europäische Quelle als Ersatz oder Ergänzung.

---

## 6. Besonderheit: verantwortungsvolles Design bereits eingebaut

Anders als der Name vermuten lässt, ist dies **kein Glücksspielangebot**
und **keine Zahlen-„Vorhersage"-App** — sowohl der Ursprungs-Prompt als
auch der sichtbare Ist-Zustand (Badge, Disclaimer-Zeile) positionieren die
App konsequent als Statistik-/Unterhaltungs-Werkzeug, das explizit
klarstellt, dass keine Methode zufällige Ziehungen vorhersagen kann. Das
ist beim Weiterbauen unbedingt beizubehalten — keine Formulierungen wie
„Gewinnzahlen", „erhöhte Chance" o. ä. einführen.

---

## 7. Offene Punkte / was von Dir gebraucht wird

- **KI-Guthaben in Lovable aufladen**, damit AI-Generator und AI-Report
  wieder funktionieren (aktuell HTTP 402).
- **Alternative/zusätzliche EuroJackpot-Datenquelle** klären, falls
  Veikkaus allein nicht ausreicht oder eine offizielle deutsche Quelle
  gewünscht ist.
- Klärung, ob/wann veröffentlicht werden soll (aktuell `is_published: false`).
- Wie bei den anderen drei Projekten: falls es ein Konzept-/Referenz-
  dokument außerhalb von Lovable gibt (ähnlich dem bei PunaAI erwähnten),
  bitte teilen.

---

## 8. Quellen

- Lovable-Projekt „Lucky Star Numbers" —
  `https://lovable.dev/projects/58ea6980-e37b-4a97-bceb-7efcf3e55f84`
  (Projektbeschreibung = Ursprungs-Prompt, `roadmap.md`).
- `docs/lucky-star-numbers-master-spec.md` — vollständiger, unveränderter
  Ursprungs-Prompt.
- `docs/LUCKY_STAR_NUMBERS_MEMORY.md` — **dieses Dokument.**
- Zum Vergleich/Kontext (andere Produkte, gleicher Lovable-Workspace):
  `docs/PROJECT_MEMORY.md` (Voteverse) Abschnitt 12,
  `docs/PUNAKI_MEMORY.md` (PunaAI),
  `docs/AI_UNIVERSE_MEMORY.md` (Mr. & Mrs. AI Universe).
