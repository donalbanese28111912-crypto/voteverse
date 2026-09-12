# Voteverse — Deployment: Vercel (Web) + Railway (API + Postgres)

Domains: **voteverse.global** (primär) und **voteverse.de** (leitet auf
`voteverse.global` um), beide bei IONOS registriert. Ziel-Architektur:

```
Browser
  │
  ├── voteverse.global, www.voteverse.global   → Vercel (Next.js)
  └── api.voteverse.global                     → Railway (NestJS + Postgres)

voteverse.de, www.voteverse.de  → 301-Redirect auf voteverse.global (in Vercel)
```

---

## 0. Voraussetzung: Code auf GitHub

1. Leeres **privates** Repo auf github.com anlegen (z. B. `voteverse`).
2. Link/Namen an Claude geben — der lokale Code wird dann dorthin gepusht.

---

## 1. Railway — API + Postgres

1. Account auf [railway.app](https://railway.app) anlegen (kostenlos starten,
   Hobby-Plan reicht für den Start).
2. **New Project → Deploy from GitHub repo** → das `voteverse`-Repo wählen.
3. Für den API-Service (Railway legt automatisch einen Service an):
   - **Settings → Source → Root Directory:** leer lassen (`.`, Repo-Root!)
   - **Settings → Build → Builder:** Dockerfile
   - **Dockerfile Path:** `apps/api/Dockerfile`
   - (Diese Werte stehen auch schon in `railway.json` im Repo-Root — Railway
     liest das automatisch, die manuellen Felder sind ein Fallback.)
4. **+ New → Database → PostgreSQL** im selben Projekt hinzufügen. Railway
   setzt `DATABASE_URL` beim API-Service dann automatisch, wenn du die DB
   mit dem Service **verbindest** (Service → Variables → "Add Reference" →
   Postgres → `DATABASE_URL`).
5. Beim API-Service unter **Variables** setzen (Werte unten in Abschnitt 4):
   `NODE_ENV`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `JWT_ACCESS_TTL`,
   `JWT_REFRESH_TTL`, `CORS_ORIGINS`, `FREE_VOTES_PER_DAY`,
   `VOTE_RATE_LIMIT_PER_MIN`, `FEATURE_BOOST_ENABLED`.
   `PORT` NICHT setzen — Railway injiziert das selbst, die App liest es
   automatisch.
6. **Deploy.** Beim ersten Start führt der Container automatisch
   `prisma migrate deploy` aus (siehe `apps/api/Dockerfile`), die
   Datenbank-Struktur steht danach.
7. **Einmalig Produktions-Seed laufen lassen** (Kategorien/Rankings ohne
   Fake-Votes — siehe Zusammenfassung unten): im Railway-Dashboard beim
   API-Service **"Run Command"** (oder lokal mit verknüpfter Railway-CLI:
   `railway run npm run prisma:seed:prod -w @voteverse/api`).
8. **Settings → Networking → Custom Domain:** `api.voteverse.global`
   hinzufügen. Railway zeigt dir einen CNAME-Zielwert — den bei IONOS
   eintragen (Abschnitt 3).

---

## 2. Vercel — Web

1. Account auf [vercel.com](https://vercel.com) anlegen, mit GitHub
   verbinden.
2. **Add New → Project** → das `voteverse`-Repo importieren.
3. **Root Directory:** `apps/web` (Vercel fragt danach beim Import).
4. Framework Preset: Next.js (wird automatisch erkannt). Build-/Install-
   Command NICHT manuell überschreiben — `apps/web/vercel.json` im Repo
   übernimmt das (`cd ../.. && npm install` bzw. `turbo run build`).
5. **Environment Variables** setzen (Production + Preview):
   - `NEXT_PUBLIC_API_URL` = `https://api.voteverse.global`
   - `API_INTERNAL_URL` = `https://api.voteverse.global`
   - `NEXT_PUBLIC_SITE_URL` = `https://voteverse.global`
   - `NEXT_PUBLIC_FEATURE_BOOST` = `false`
6. **Deploy.**
7. **Settings → Domains:**
   - `voteverse.global` hinzufügen → als **Primary** markieren.
   - `www.voteverse.global` hinzufügen → Redirect auf `voteverse.global`.
   - `voteverse.de` hinzufügen → **"Redirect to another domain"** →
     `voteverse.global` (301, dauerhaft).
   - `www.voteverse.de` genauso → Redirect auf `voteverse.global`.
   - Vercel zeigt für jede Domain die nötigen DNS-Einträge an (A/CNAME) —
     die kommen 1:1 nach IONOS (Abschnitt 3).

---

## 3. IONOS — DNS für beide Domains

Für **jede** der vier Domains/Subdomains bei IONOS im DNS-Bereich der
jeweiligen Domain eintragen (die genauen Zielwerte zeigen dir Vercel/Railway
in Schritt 1.8 bzw. 2.7 an, hier die üblichen Muster):

| Domain | Typ | Ziel |
|---|---|---|
| `voteverse.global` (Root) | A | die von Vercel angezeigte IP (meist `76.76.21.21`) |
| `www.voteverse.global` | CNAME | `cname.vercel-dns.com` |
| `api.voteverse.global` | CNAME | der von Railway angezeigte `*.up.railway.app`-Wert |
| `voteverse.de` (Root) | A | dieselbe Vercel-IP wie oben |
| `www.voteverse.de` | CNAME | `cname.vercel-dns.com` |

IONOS erlaubt bei manchen Root-Domains statt A nur CNAME/ALIAS — falls
Vercel dort einen ALIAS-Wert statt einer IP zeigt, den nehmen.

DNS-Änderungen brauchen je nach TTL bis zu 24h (meist deutlich schneller).
Vercel/Railway zeigen den Verbindungsstatus live im jeweiligen Dashboard an.

---

## 4. Produktions-Secrets (jetzt generiert, nirgends committen)

```
JWT_ACCESS_SECRET=OgwpsTNcf7hzF4G14FrGtu9FInRZkKGck_mUla7mtSKTyXGRYah4qaBB6Mq-_iaS
JWT_REFRESH_SECRET=4gjk5H0fl68S9fk5W88WryMJinxDdCid2hAmpCSlz_6mQDzElKvYBkQU2dZ0qnkF
```

Weitere Railway-Variablen:

```
NODE_ENV=production
JWT_ACCESS_TTL=900
JWT_REFRESH_TTL=2592000
FREE_VOTES_PER_DAY=200
VOTE_RATE_LIMIT_PER_MIN=40
FEATURE_BOOST_ENABLED=false
CORS_ORIGINS=https://voteverse.global,https://www.voteverse.global,https://voteverse.de,https://www.voteverse.de
```

---

## 5. Nach dem ersten Deploy

- Eigenen echten Account unter `https://voteverse.global/register` anlegen
  (die Seed-Datenbank enthält bewusst keine Accounts).
- Für Admin-Rechte: einmalig in der Railway-Postgres-Konsole
  `UPDATE users SET role = 'ADMIN' WHERE email = 'DEINE-ECHTE-EMAIL';`
- `/impressum` prüfen — Angaben sind schon live korrekt hinterlegt.
