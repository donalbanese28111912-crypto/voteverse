# RANKLY — Master Product & Development Prompt (Ursprungsdokument)

> **Herkunft:** Dies ist der vollständige, ursprüngliche Auftrags-/Vision-Prompt
> für das Projekt (damals noch unter dem Namen **Rankly**, vor dem Rebrand zu
> **Voteverse**). Gefunden als Projektbeschreibung des zweiten,
> Lovable-basierten Voteverse-Implementierung (siehe
> `docs/PROJECT_MEMORY.md`, Abschnitt 12). Der `docs/voteverse-continuation-prompt.md`
> im GitHub-Repo ist eine spätere, destillierte Fortsetzung dieses Dokuments
> für die NestJS/Next.js-Implementierung — hier ist die vollständige,
> unveränderte Ursprungsfassung mit allen 74 Punkten, als Referenz für beide
> Implementierungen.
>
> Wortwahl und Nummerierung sind unverändert aus dem Original übernommen.
> Wo das Original „Rankly" sagt, ist nach dem Rebrand „Voteverse" gemeint.

---

## 0. DEINE AUFGABE

Du bist gleichzeitig:

- Senior Full-Stack Engineer
- Product Architect
- UX/UI Designer
- Growth Product Manager
- SEO Specialist
- Database Architect
- Security Engineer
- Data/Ranking Scientist
- AI Product Engineer
- Monetization Expert

Deine Aufgabe ist es, Rankly als eine moderne, skalierbare, internationale Consumer-Plattform zu konzipieren und anschließend technisch umzusetzen.

Arbeite nicht wie bei einem einfachen Website-Projekt.

Denke wie ein Startup-Team, das eine Plattform baut, die langfristig Millionen von Nutzern, Milliarden von Votes und Millionen von Ranking-Einträgen verarbeiten können soll.

**Wichtig:**
Wenn technische Entscheidungen nicht vorgegeben sind, wähle selbst die sinnvollste moderne Lösung und begründe sie kurz.

Wenn das Projekt bereits Code enthält, analysiere zuerst die bestehende Architektur und verbessere sie, anstatt unnötig funktionierenden Code neu zu schreiben.

## 1. DAS PRODUKT

**Name:** Rankly

**Positionierung**

Rankly ist eine globale Plattform, auf der Menschen praktisch alles bewerten, vergleichen und ranken können.

Der zentrale Gedanke:

> Discover. Vote. Rank.

Oder:

> What does the world think?

Rankly soll die Frage beantworten:

> „Was ist wirklich das Beste – laut der Community?"

Die Plattform kombiniert: Rankings, Voting, aktuelle Themen, Nachrichten, Trends, Produkte, Personen, Unternehmen, Sport, Entertainment, Technologie, KI, Politik, Reisen, Städte, Länder, Kryptowährungen, Apps, Social-Media-Trends, neue Produkte, neue Funktionen, gesellschaftliche Themen und praktisch jede andere Kategorie.

## 2. DAS ZENTRALE VOTING

Die wichtigste Interaktion der gesamten Plattform ist:

**🟢 UP** — Grüner Pfeil nach oben. Bedeutung: „Gefällt mir / Ich stimme zu / Ich finde das gut."

**🔴 DOWN** — Roter Pfeil nach unten. Bedeutung: „Gefällt mir nicht / Ich stimme nicht zu / Ich finde das schlecht."

Die Interaktion muss extrem schnell funktionieren. Ein Nutzer soll idealerweise innerhalb von 1–2 Sekunden abstimmen können.

## 3. WICHTIGE UNTERSCHEIDUNG: KOSTENLOSE VS. GEKAUFTE VOTES

Rankly soll zwei unterschiedliche Arten von Voting-Unterstützung besitzen.

**A. Free Vote** — Jeder Nutzer bekommt kostenlose Stimmen (z. B. tägliche kostenlose Votes oder ein großzügiges kostenloses Voting-Kontingent). Diese Votes sollen die normale Community-Meinung darstellen.

**B. Rankly Points** — Nutzer können zusätzliche Rankly Points kaufen. Beispielhafte Pakete: 10 Points → 1 €, 100 Points → 15 €, 250 Points → 25 €, 1.000 Points → 40 €, 2.500 Points → 80 €, 10.000 Points → 250 €. Die Preise sind zunächst Platzhalter. Die genaue Preisstruktur soll so optimiert werden, dass kleine Käufe einfach möglich sind, größere Pakete einen Bonus bieten, die Plattform profitabel wird und die Preisstruktur verständlich bleibt.

**WICHTIG:** Gekaufte Points dürfen nicht heimlich mit normalen Stimmen vermischt werden. Das System muss transparent machen: Community Score und Boost/Support Score.

Beispiel:
```
Tokyo
Community Score: 91%
Rankly Support: +4.2%
```

So bleibt sichtbar, ob ein Ranking durch die allgemeine Community oder durch gekaufte Unterstützung beeinflusst wird.

## 4. KEINE PAY-TO-WIN-MANIPULATION ALS GRUNDPRINZIP

Rankly soll monetarisieren, ohne die Glaubwürdigkeit der Plattform zu zerstören. Daher: normale Stimmen haben ein eigenes Gewicht, gekaufte Points haben ein eigenes Gewicht, gekaufte Punkte werden transparent angezeigt, keine unbegrenzte Manipulation eines Rankings, Limits pro Nutzer, Anti-Bot-System, Anti-Fraud, Rate Limits, ungewöhnliche Voting-Muster erkennen.

Insbesondere bei Politik, Wahlen, gesellschaftlichen Themen, Nachrichten, Personen, Gesundheit, Finanzthemen muss besonders vorsichtig mit bezahlter Einflussnahme umgegangen werden. Für bestimmte Kategorien soll das System gekaufte Points vollständig deaktivieren können.

## 5. RANKING-ALGORITHMUS

Entwickle kein simples „Upvotes minus Downvotes"-System. Entwickle ein robustes Ranking-System. Es soll unter anderem berücksichtigen: Anzahl der Votes, Verhältnis Up/Down, statistische Sicherheit, Anzahl verschiedener Nutzer, Zeit, Aktualität, Vote-Qualität, ungewöhnliches Verhalten, Bot-/Fraud-Signale, Kategorie, Ranking-Typ.

Ein Eintrag mit 100 Upvotes / 10 Downvotes soll nicht automatisch vor einem Eintrag stehen, der 100.000 Upvotes / 15.000 Downvotes hat.

Verwende ein statistisch sinnvolles Verfahren, z. B. Bayesian Ranking, Wilson Score oder ein vergleichbares Verfahren. Implementiere das Ranking modular, sodass später verschiedene Ranking-Modelle verwendet werden können.

## 6. ZEITLICHE RANKINGS

Rankings müssen zeitabhängig sein können: All Time („Beste Filme aller Zeiten"), This Year („Beste Filme 2026"), This Month („Beliebteste AI-Tools im September 2026"), This Week („Trending Apps dieser Woche"), Today („Was ist heute angesagt?"), Live („Was wird gerade bewertet?"). So entsteht ein dynamisches System.

## 7. DIE THEMENWELT VON RANKLY

Rankly soll nicht nur aus klassischen „Best of"-Listen bestehen. Es soll grundsätzlich ALLES ranken können.

**TRAVEL:** beste Länder, Städte, Strände, Inseln, Hotels, Flughäfen, Reiseziele, schönste Orte, Nationalparks, Sehenswürdigkeiten.

**FOOD:** beste Restaurants, Gerichte, Küchen, Fast-Food-Ketten, Pizzen, Burger, Cafés, Desserts.

**TECHNOLOGY:** beste Smartphones, Laptops, GPUs, Apps, Browser, Betriebssysteme, Gadgets, Tech-Unternehmen.

**AI:** Ein eigener riesiger Bereich — beste AI, AI-Assistenten, AI-Bildgeneratoren, AI-Videotools, AI-Coding-Tools, AI-Suchmaschinen, AI-Modelle, AI-Features, AI-Apps, AI-Unternehmen, beste neue AI-Produkte. Außerdem AI News Rankings, z. B. „Gefällt dir die neue Funktion von OpenAI?", „Ist das neue Claude-Feature gut?", „Wie findest du das neue Gemini-Modell?", „Welche AI hat aktuell die beste Bildgenerierung?". Neue AI-Produkte und Funktionen sollen automatisch als neue Ranking-/Voting-Themen angelegt werden können.

## 8. NEWS & AKTUELLE THEMEN

Rankly soll einen eigenen News & Trending Bereich besitzen. Das System soll Nachrichtenquellen über APIs/RSS/strukturierte Feeds integrieren können.

**Wichtig:** Rankly ist keine klassische Nachrichtenwebsite. Rankly macht aus aktuellen Nachrichten Community-Fragen.

Beispiel: News „Apple stellt neues Produkt vor." → Rankly „Wie findest du Apples neues Produkt?" → 🟢 UP / 🔴 DOWN.

Weitere Beispiele: „Wie findest du die neue AI-Funktion?", „Ist diese neue App ein Fortschritt?", „Gefällt dir das neue iPhone?", „Wie findest du die neue Regel im Fußball?", „War diese Entscheidung richtig?", „Ist diese Technologie sinnvoll?", „Wie findest du den neuen Film?".

Dadurch entsteht eine einzigartige Kombination aus: News + Community Opinion + Ranking.

## 9. POLITIK

Politik kann eine wichtige Kategorie sein: Politiker, Parteien, politische Entscheidungen, Gesetze, politische Ereignisse, internationale Politiker, politische Statements, aktuelle politische Themen.

Aber: Rankly darf nicht suggerieren, dass Community-Votes objektive Wahrheit darstellen. Es muss klar erkennbar sein: „Rankly Community Opinion", nicht „Die Wahrheit". Bei politischen Themen müssen außerdem besondere Moderations-, Transparenz- und Anti-Manipulationsregeln gelten.

## 10. SPORT

Sehr großer Bereich. Fußball: beste Spieler, Vereine, Trainer, Stadien, Transfers, Tore, Spiele. Andere Sportarten: Tennis, Basketball, NFL, Formel 1, MMA, Boxen, Golf, Leichtathletik, Wintersport, E-Sports. Aktuelle Ereignisse können direkt zu Voting-Themen werden, z. B. „War das Tor des Spielers das beste Tor des Spieltags?".

## 11. ENTERTAINMENT

Filme, Serien, Schauspieler, Regisseure, Musiker, Bands, Songs, Alben, Streaming-Shows, Videospiele, YouTuber, Influencer, Podcasts. Aktuelle Releases sollen automatisch neue Ranking-Themen erzeugen können.

## 12. FINANZEN & KRYPTO

Eigener Bereich: Kryptowährungen, Coins, Blockchain-Projekte, Börsenunternehmen, ETFs, Finanz-Apps, Fintech-Unternehmen. Beispiele: „Welche Kryptowährung hat die beste Zukunft?", „Wie findest du das neue Krypto-Projekt?", „Welche Trading-App ist besser?".

Wichtig: Rankly soll bei Finanzthemen keine Anlageberatung darstellen. Bei Kursdaten sollen externe Datenquellen verwendet werden. Meinungen und Fakten müssen klar voneinander getrennt werden.

## 13. APPS & PRODUKTE

Rankly soll neue Produkte automatisch aufnehmen können: neue iPhones, Android-Smartphones, AI-Tools, Apps, Spiele, Autos, Kameras, Software, Features. Jedes neue Produkt kann zu einem Ranking-Thema werden.

## 14. „BATTLE"-SYSTEM

Zusätzlich zu klassischen Rankings soll Rankly direkte Duelle unterstützen, z. B. iPhone vs Samsung, ChatGPT vs Claude, Paris vs London (🟢 / 🔴 je Seite). Das Ergebnis wird live aktualisiert. Dieses Feature soll besonders schnell, spielerisch und viral sein.

## 15. „THIS OR THAT"

Ein weiterer extrem schneller Voting-Modus, z. B. Beach 🏖️ vs Mountains 🏔️, Coffee ☕ vs Tea 🍵, iPhone vs Android, Summer vs Winter. Der Nutzer muss nur entscheiden. Diese Funktion soll für maximale Engagement-Raten optimiert werden.

## 16. HOMEPAGE

Die Homepage ist das Herzstück von Rankly. Sie darf nicht wie eine normale Blog- oder Nachrichtenwebsite aussehen. Sie soll sich wie eine Mischung aus Social Platform, Ranking Platform, Discovery Engine, News Feed, Voting Game anfühlen.

**Header** — Logo: RANKLY. Navigation: Home, Rankings, Trending, News, Battles, Categories. Rechts: Search, Points, Profile.

## 17. HERO-BEREICH

Oben auf der Homepage: „What do you think?" Darunter direkt eine aktuelle Voting Card, z. B. „Is the new AI feature actually better?" 🟢 UP / 🔴 DOWN. Danach: „82,431 people voted".

## 18. PERSONALISIERTER FEED

Nach dem Hero-Bereich: Trending Now (Live-Themen), For You (personalisierte Rankings), Breaking Opinions (aktuelle, stark bewertete Nachrichten), AI Today, Sports, Crypto, Popular Rankings.

## 19. RANKING CARDS

Jede Karte muss visuell extrem schnell erfassbar sein. Beispiel: „🏆 Best Cities in Europe" mit London, Paris, Barcelona, Berlin, Amsterdam, [VIEW RANKING]. Oder: „Is the new AI model good?" 🟢 UP 74% / 🔴 DOWN 26%, 12,842 votes.

## 20. SEARCH

Die Suche ist extrem wichtig — wie eine moderne globale Suchmaschine für Rankings. Beispiele: „best cities", „AI", „Germany", „football", „iPhone", „Trump", „restaurants", „Bitcoin", „movies". Die Suchergebnisse sollen enthalten: Rankings, Topics, People, Products, News, Battles, Categories.

## 21. KATEGORIEN

Sehr große, logisch strukturierte Kategoriearchitektur, z. B. AI, Technology, Travel, Food, Sports, Politics, News, Entertainment, Movies, Music, Gaming, Crypto, Finance, Business, Cars, Science, Health, Education, Lifestyle, Fashion, Beauty, Nature, Cities, Countries, Products, Apps, Social Media. Kategorien müssen hierarchisch sein können, z. B. Technology → AI → Smartphones → Computers → Software → Apps.

## 22. USER ACCOUNTS

Optionaler Account. Features: Profilbild, Username, Bio, Voting History, Favorite Categories, Favorite Rankings, Points Balance, Achievements, Reputation, Activity.

## 23. GAMIFICATION

Rankly soll spielerisch sein. Implementiere: XP, Levels, Badges, Streaks, Voting milestones. Beispiele: First Vote, 100 Votes, 1,000 Votes, 10,000 Votes, AI Expert, Sports Fan, Movie Expert, Top Voter, Early Voter.

## 24. RANKLY POINTS

Nutzer besitzen ein Wallet: Rankly Points (z. B. Balance: 1,250 Points). Points können verwendet werden für: zusätzliche Voting-Power, Ranking Boosts, Premium Features, spezielle Battles, Creator Features, Hervorhebung eigener Rankings. Alle kostenpflichtigen Aktionen müssen transparent angezeigt werden. Es darf niemals der Eindruck entstehen, dass Rankly heimlich Rankings manipuliert.

## 25. CREATOR SYSTEM

Nutzer sollen eigene Rankings erstellen können, z. B. „Die 50 besten Metal-Bands". Der Creator definiert: Titel, Beschreibung, Kategorie, Einträge, Regeln. Danach kann die Community voten. Creator können Statistiken sehen: Views, Votes, Up/Down ratio, Shares, Wachstum, Engagement.

## 26. TRENDING ALGORITHM

Eigener Trending Score. Er soll berücksichtigen: Votes/minute, Views, Shares, Kommentare, Wachstum, Aktualität, unterschiedliche Nutzer, ungewöhnliche Aktivität. Damit können Themen plötzlich viral gehen, z. B. „🔥 Trending #1 — Neue AI-Funktion von X".

## 27. NEWS INGESTION

Architektur so bauen, dass externe News-Feeds angeschlossen werden können. Nutze bevorzugt: offizielle APIs, RSS, lizenzierte Datenquellen, strukturierte News APIs. Speichere: Titel, Quelle, URL, Veröffentlichungszeit, Kategorie, Themen, Entities, Bild, Zusammenfassung, Sprache. Vermeide das unrechtmäßige Kopieren kompletter Artikel. Rankly soll hauptsächlich auf die Originalquelle verlinken und eigene Voting-Fragen erzeugen.

## 28. AI-UNTERSTÜTZUNG

Verwende AI für: Erkennung neuer Themen, Kategorisierung, Duplikaterkennung, Entity Recognition, Zusammenfassungen, Erkennung von Trends, automatische Vorschläge für Rankings, Moderation, Spam Detection. Beispiel: Ein News-Feed liefert „New AI model released today." Das System erkennt Category: AI, Entities: Company/AI Model, und schlägt automatisch vor: „How good is the new AI model?"

## 29. SEO

SEO muss von Anfang an eingebaut werden. Jedes Ranking soll eine eigene indexierbare URL besitzen, z. B. `/rankings/best-cities`, `/rankings/best-countries`, `/rankings/best-ai-tools`, `/rankings/best-smartphones`, `/topics/new-ai-model`, `/battles/chatgpt-vs-claude`. Dynamische Meta Titles und Descriptions. Structured Data, wo sinnvoll. Sitemap. Canonical URLs. Open Graph. Twitter/X Cards. SEO-freundliche Überschriften.

## 30. INTERNATIONALE PLATTFORM

Rankly soll international funktionieren. Architektur für Deutsch, Englisch, Französisch, Spanisch, Italienisch, Portugiesisch, weitere Sprachen vorbereiten. Inhalte sollen sprachabhängig sein. Votes müssen global aggregiert werden können.

## 31. MOBILE FIRST

Die Mobile Experience hat höchste Priorität. Die Voting Buttons müssen groß, schnell, eindeutig, daumenfreundlich sein. Animationsfeedback nach dem Vote: User klickt 🟢 UP → Button animiert → Score aktualisiert sich → nächstes Thema erscheint. Die Plattform soll sich teilweise wie ein schnelles Voting-Spiel anfühlen.

## 32. PERFORMANCE

Ziel: sehr schnelle Initial Load Time, optimierte Bilder, Lazy Loading, Caching, CDN, serverseitiges Rendering bzw. geeignete moderne Rendering-Strategie, optimierte Datenbankabfragen, Pagination/Infinite Scroll, effiziente Ranking-Berechnung. Rankly muss auf großen Datenmengen funktionieren.

## 33. ANTI-FRAUD

Sehr wichtig. Implementiere: Rate Limiting, Device Fingerprinting (soweit rechtlich zulässig), IP-Risk Signals, Bot Detection, Velocity Detection, Duplicate Vote Detection, Account Abuse Detection, Suspicious Wallet Activity, Payment Fraud Detection. Ein Nutzer darf nicht einfach 10.000 Fake Accounts erstellen und Rankings manipulieren.

## 34. MODERATION

Implementiere Moderationssystem: Report, Hide, Block, Admin Review, AI Moderation, User Reputation, Content Flags. Besondere Kategorien: Politik, Personen, Gesundheit, Religion, Gewalt, Sexualität, Minderjährige, sensible Nachrichten brauchen strengere Regeln.

## 35. TRANSPARENZ

Bei jedem Ranking sollte optional sichtbar sein: „Based on 128,431 votes" und „Updated 12 seconds ago". Bei gekauften Points: „Includes 3.2% supported votes" oder eine ähnliche klare Kennzeichnung. Rankly soll langfristig für vertrauenswürdige Rankings stehen.

## 36. MONETIZATION

Mögliche Einnahmen: Rankly Points (primäres Microtransaction-System), Premium (keine Werbung, zusätzliche Statistiken, detaillierte Voting-History, Creator Analytics, personalisierte Rankings, besondere Profilfunktionen), Creator Pro (für Nutzer, Influencer, Communities, Unternehmen), Sponsored Topics (nur klar gekennzeichnet), Advertising (dezent, nicht störend), API (Unternehmen können Ranking-Daten lizenzieren).

## 37. ZAHLUNGSSYSTEM

Architektur für einen seriösen Payment Provider vorbereiten, z. B. Stripe oder vergleichbar. Wichtig: Webhooks, Payment verification, refunds, failed payments, transaction history, fraud detection, invoices, wallet ledger. NIEMALS den Points-Saldo einfach clientseitig erhöhen. Alle Points-Transaktionen müssen serverseitig über ein unveränderbares Ledger nachvollziehbar sein.

## 38. ADMIN DASHBOARD

Vollständiges Admin Panel. Dashboard: Users, Votes, Rankings, Topics, News, Reports, Payments, Points, Revenue, Fraud, Trending, Moderation, AI-generated content, API health. Charts: Daily Active Users, Votes per day, Revenue, New users, Conversion, Points purchased, Points spent, Top categories, Viral topics.

## 39. ANALYTICS

Tracke wichtige Events: page_view, vote_up, vote_down, battle_vote, ranking_open, search, share, signup, login, points_purchase, points_spend, ranking_create, ranking_follow, topic_open. Datenschutz beachten. Keine unnötige personenbezogene Datensammlung.

## 40. PRIVACY & SECURITY

Privacy-by-Design. DSGVO, Cookie Consent, Data Minimization, Account deletion, Data export, Privacy settings, Secure authentication, Encryption, Server-side authorization, CSRF/XSS protection, SQL injection prevention, secure payment handling. Keine sensiblen Zahlungsdaten selbst speichern, wenn der Payment Provider dies übernehmen kann.

## 41. DESIGN LANGUAGE

Das Design soll aussehen wie eine ernstzunehmende globale Consumer-Tech-Marke. Nicht überladen, billig, wie ein Forum, wie eine klassische Umfragewebsite. Sondern: modern, minimalistisch, hochwertig, schnell, leicht verständlich, leicht spielerisch. Primär Weiß/Schwarz/neutrale Grautöne. Voting: Grün = Up, Rot = Down. Keine unnötigen Farbverläufe, keine übermäßigen Schatten, keine übertriebene Animation.

## 42. LOGO

Logo: RANKLY. Soll auch als App Icon funktionieren. Einfaches Symbol, das idealerweise Ranking, Pfeil, Bewegung, Abstimmung assoziiert.

## 43. HOME FEED

Der Feed soll intelligent entscheiden, was dem Nutzer angezeigt wird. Relevanz = Interessen + Trending + Freshness + Popularity + Diversity + Location (optional) + Previous Voting Behavior. Vermeide eine Filter Bubble. Zeige bewusst auch neue Kategorien.

## 44. NOTIFICATIONS

Optional: Your ranking moved up, New votes on your ranking, Trending topic, Someone followed your ranking, New AI topic, New sports topic, Ranking milestone, Points purchase confirmation.

## 45. SHARE SYSTEM

Jedes Ranking muss einfach teilbar sein. Share Card mit Titel, Top-Einträgen, Votes-Zahl, „What do YOU think?", Link. Social sharing: WhatsApp, X, Facebook, Instagram, Telegram, Copy Link.

## 46. VIRAL LOOP

Der zentrale Growth Loop: Nutzer entdeckt Thema → votet → sieht Ergebnis → ist überrascht → teilt Ergebnis → Freunde klicken → Freunde voten → Ranking verändert sich → ursprünglicher Nutzer kommt zurück. Optimiere das Produkt auf diesen Loop.

## 47. „SURPRISE ME"

Button „🎲 Surprise Me": Der Nutzer bekommt ein zufälliges interessantes Thema, votet, danach „Next". So kann Rankly zu einer unterhaltsamen Zeitvertreib-Plattform werden.

## 48. „ONE MORE VOTE"

Nach jeder Abstimmung: „Next Vote →". Der Nutzer soll ohne Reibung weitere Themen bewerten können. Dies könnte langfristig eine der wichtigsten Engagement-Funktionen werden.

## 49. RANKING DETAIL PAGE

Jede Ranking-Seite braucht: Titel, Beschreibung, Kategorie, Aktualisierungszeit, Gesamtvotes, Ranking, Trend, Up/Down, Share, Follow, Related rankings.

## 50. EINTRAGSDETAILS

Jeder Eintrag kann eine eigene Seite besitzen, z. B. `/entities/chatgpt`. Dort: Beschreibung, Rankings, Votes, Trend, verwandte Themen, aktuelle News, Battles.

## 51. CURRENT EVENTS ENGINE

Architektur, die aktuelle Ereignisse automatisch in Rankly-Themen verwandeln kann, z. B. neue AI → „Is the new AI model better than the previous version?"; neue App → „Do you like the new app?"; Sport → „Was this the best goal of the match?"; Politik → „Do you support this decision?". Bei kontroversen Themen neutral formulieren, nicht manipulativ.

## 52. FACT VS OPINION

Rankly muss klar zwischen Fakten und Meinungen unterscheiden. FACT: „Company X released Product Y on September 10." OPINION: „Do you like Product Y?" Keine Vermischung.

## 53. AI CONTENT GENERATION

AI darf Vorschläge generieren. Automatisch erzeugte Inhalte müssen intern als AI-generated markiert werden. Vor Veröffentlichung: Duplikatprüfung, Moderation, Safety Check, Relevance Check.

## 54. DATABASE DESIGN

Saubere relationale Datenbankstruktur, mindestens: Users, Profiles, Categories, Subcategories, Entities, Rankings, RankingItems, Votes, VoteTransactions, PointsWallets, PointsTransactions, Battles, Topics, NewsItems, NewsSources, Comments, Reports, Notifications, Payments, Subscriptions, Achievements, UserAchievements, TrendingScores, AuditLogs, AdminActions, AIJobs, ModerationEvents. Die genaue Struktur darf optimiert werden.

## 55. API ARCHITECTURE

Saubere APIs für: Authentication, Users, Rankings, Voting, Battles, Points, Payments, Search, News, Trending, Notifications, Admin, Analytics. Alle privilegierten Aktionen müssen serverseitig autorisiert werden.

## 56. REAL-TIME

Rankings sollen sich möglichst live aktualisieren. Wenn ein Nutzer votet: Score aktualisieren, Ranking aktualisieren, Trend aktualisieren, UI aktualisieren. Für geeignete Bereiche WebSockets, Server-Sent Events oder eine andere sinnvolle moderne Technik verwenden.

## 57. ACCESSIBILITY

WCAG-orientiert entwickeln: Keyboard navigation, Screen reader labels, ausreichender Kontrast, sichtbare Focus States, Buttons nicht nur über Farbe unterscheiden. Die Up/Down-Funktion muss auch barrierefrei verständlich sein.

## 58. RESPONSIVE BREAKPOINTS

Mindestens: Mobile, Tablet, Desktop, Large Desktop. Mobile zuerst entwickeln.

## 59. ERROR HANDLING

Jeder wichtige Vorgang braucht sauberes Error Handling, z. B. Vote fehlgeschlagen: „Something went wrong. Try again."; Payment fehlgeschlagen: „Payment could not be completed."; Network offline: „You are offline."

## 60. EMPTY STATES

Keine leeren, langweiligen Seiten, z. B. „Nothing here yet. Be the first to rank it." oder „Be the first person to vote."

## 61. MVP

Baue zuerst einen funktionsfähigen MVP. Muss enthalten: Homepage, Registrierung/Login, Kategorien, Rankings, Ranking Detail Pages, Upvote, Downvote, Ranking Algorithm, Search, Trending, User Profile, Points Wallet, Payment Architecture, Admin Dashboard, Moderation, Responsive Design, SEO, Analytics. Danach: News, AI Topic Generation, Battles, Creator System, Gamification, Premium, Internationalisierung.

## 62. ENTWICKLUNGSSTRATEGIE

Arbeite in Phasen: 1 Architektur analysieren, 2 Datenbank, 3 Backend/API, 4 Authentication, 5 Ranking Engine, 6 Voting, 7 Frontend, 8 Homepage, 9 Search, 10 Trending, 11 Points, 12 Payments, 13 Admin, 14 News, 15 AI, 16 Security, 17 Performance, 18 SEO, 19 Testing, 20 Production readiness. Nach jeder Phase: testen, Fehler beheben, Architektur überprüfen, keine unnötigen technischen Schulden erzeugen.

## 63. TESTING

Tests für: Authentication, Voting, Ranking, Points, Payments, Permissions, Fraud, Search, API, UI, Mobile, Accessibility. Besonders wichtig: Ein Vote darf nicht doppelt gezählt werden. Ein Payment darf nicht doppelt gutgeschrieben werden. Ein Nutzer darf keine fremden Wallets verändern können. Ein Nutzer darf keine Admin-Funktionen ausführen können.

## 64. SEED DATA

Realistische Seed-Daten, z. B. Countries (Deutschland, Frankreich, Japan, USA, Italien, Spanien, Kanada, Australien), Cities (London, Paris, Tokyo, New York, Berlin, Barcelona, Dubai), AI (ChatGPT, Claude, Gemini, Perplexity, Grok), Sports (bekannte Spieler/Teams), Movies, Apps. Bei echten aktuellen Daten ausschließlich geeignete Quellen/APIs nutzen.

## 65. ADMIN: TOPIC CREATION

Administratoren sollen neue Topics erstellen können: Titel, Beschreibung, Kategorie, Subcategory, Entities, Voting Type, Start Date, End Date, Status, Free Vote Enabled, Paid Points Enabled, Moderation Level, News Source, SEO Metadata.

## 66. VOTING TYPES

Verschiedene Voting-Modi: Binary (UP/DOWN), Battle (A vs B), Ranking (mehrere Einträge), Rating (1–5 oder 1–10), Approval (Approve/Reject), Opinion (Like/Dislike). Die primäre Rankly-Erfahrung bleibt jedoch: UP/DOWN.

## 67. FUTURE APP

Architektur so planen, dass später native Apps (iOS, Android) entstehen können. Die API darf nicht vom Webfrontend abhängig sein.

## 68. DESIGN PRINCIPLE

Bei der Wahl zwischen kompliziert und einfach: Choose simple. Wenn eine Funktion nicht innerhalb weniger Sekunden verstanden wird: Simplify it. Rankly soll nicht wie ein Business-Dashboard wirken, sondern sich leicht und süchtig machend anfühlen.

## 69. DAS PRODUKTGEFÜHL

Das wichtigste Gefühl: „Nur noch ein Vote." Der Nutzer soll denken: „Ich will sehen, wie andere abgestimmt haben." und „Ich will wissen, wo meine Meinung im Vergleich zur Community steht." Das ist der zentrale psychologische Loop des Produkts.

## 70. BRAND POSITIONING

Rankly soll langfristig mehr sein als „eine Voting-Website". Die Vision: „Rankly is the world's opinion layer." — eine Plattform, auf der sichtbar wird, was Menschen über Produkte, Menschen, Unternehmen, Nachrichten, Technologien, AI, Sport, Entertainment, Orte, Ideen, Trends denken.

## 71. ENTSCHEIDUNGSFREIHEIT

Technische Entscheidungen dürfen selbst getroffen werden, wenn sie nicht explizit vorgegeben sind. Vor einer größeren Architekturentscheidung: Alternativen analysieren, beste Lösung wählen, implementieren, kurz dokumentieren warum. Overengineering vermeiden, aber die Architektur so planen, dass Rankly später massiv skalieren kann.

## 72. NICHT NUR EIN MOCKUP

Das Ziel ist keine statische Demo. Echte Funktionalität bauen. Möglichst vollständig funktionierende Features, keine Fake Buttons, keine rein visuellen Dummy-Funktionen, wenn eine echte Implementierung möglich ist. Wenn eine externe API noch nicht verfügbar ist: saubere Abstraktion und Mock-/Fallback-Daten einbauen, sodass sie später einfach angeschlossen werden kann.

## 73. FINAL PRODUCT CHECK

Vor Fertigstellung prüfen — Product (verständlich? macht Voting Spaß? „One More Vote" einfach? Rankings interessant?), UX (Mobile? Buttons eindeutig? Ladezeiten? Navigation?), Business (Points? Payment sicher? Monetarisierung transparent?), Data (Rankings mathematisch sinnvoll? Trends korrekt? Votes zuverlässig gespeichert?), Security (Votes/Points manipulierbar? APIs abgesichert? Admin geschützt?), SEO (Ranking-Seiten indexierbar? Meta-Daten? Social Shares?), Growth (leicht teilbar? Grund zurückzukommen? „One More Vote"-Loop?), Scalability (kann die Architektur stark wachsen? unnötige Bottlenecks?).

## 74. DEIN ZIEL

Baue Rankly nicht wie eine einfache Voting-Website. Baue es wie eine mögliche zukünftige globale Plattform. Der Kern bleibt jedoch immer einfach:

```
DISCOVER
   ↓
VOTE (🟢 UP / 🔴 DOWN)
   ↓
SEE THE RANKING
   ↓
SHARE
   ↓
VOTE AGAIN
```

**Final Product Vision:** Wenn ein Nutzer Rankly zum ersten Mal öffnet, soll er innerhalb von Sekunden verstehen: „Hier kann ich über alles abstimmen." Und nach seinem ersten Vote: „Oh, interessant. Ich will sehen, was als Nächstes kommt." Das ist das wichtigste Ziel der gesamten Anwendung.
