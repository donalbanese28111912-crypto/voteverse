# Lotto & EuroJackpot AI ("Lucky Star Numbers") — Master-Prompt (Ursprungsdokument)

> **Herkunft:** Vollständiger, unveränderter Lovable-Erstellungs-Prompt für
> **„Lotto & EuroJackpot AI"** (Lovable-Anzeigename: „Lucky Star Numbers").
> Ein **eigenständiges Produkt**, nichts mit Voteverse, PunaAI oder Mr&Mrs
> AI Universe zu tun — siehe `docs/LUCKY_STAR_NUMBERS_MEMORY.md` für den
> aktuellen Stand.

---

**MASTER-PROMPT FÜR LOVABLE**

**Projekt:** Lotto & EuroJackpot AI – Statistik, persönliche Glückszahlen, Numerologie, Astronomie & AI

Erstelle eine moderne, hochwertige, responsive Web-App/PWA für Deutschland mit dem Arbeitstitel „Lotto & EuroJackpot AI". Die Anwendung soll eine Kombination aus LOTTO 6aus49, EuroJackpot, historischen Ziehungsarchiven, statistischer Analyse, persönlicher Glückszahlen, Numerologie, Geburtsdatum, Horoskop/Astrologie, Astronomie, Kalenderdaten, KI-gestützter Analyse, persönlichen Favoriten, Zahlengenerator, Ziehungsstatistiken, Diagrammen, historischen Dokumenten/Archiven und Benutzerdashboard werden. Die App soll sich wie ein professionelles Premium-Produkt anfühlen und nicht wie eine einfache Lotto-Website.

## 1. Grundidee

Die Anwendung sammelt und strukturiert historische Ziehungsdaten von LOTTO 6aus49 (ab der ersten Ziehung 1955) und EuroJackpot (ab der ersten Ziehung 23.03.2012). Pro Ziehung: Datum, Wochentag, Ziehungszeit, Hauptzahlen, Eurozahlen/Superzahl, Jackpot, Gewinnklassen, Gewinnerzahlen, Gewinnquoten, Anzahl Gewinner, Ziehungsnummer, Quelle, Datenquelle/URL, Importdatum. Architektur so, dass später weitere Lotterien integrierbar sind.

## 2. Datenqualität

Robustes Datenmodell, keine doppelten Importe, eindeutige IDs (`lottery_id`, `draw_date`, `draw_time`, `weekday`, `main_numbers`, `bonus_numbers`, `jackpot`, `source`, `source_url`, `imported_at`, `verification_status`). Validierungen (z. B. LOTTO: 6 Hauptzahlen 1–49, Superzahl 0–9; EuroJackpot: 5 Hauptzahlen + Eurozahlen nach jeweils gültigem historischem Regelwerk — **das EuroJackpot-Regelwerk hat sich historisch verändert**, alte Ziehungen dürfen nicht fälschlich nach heutigem Regelwerk behandelt werden).

## 3. Datenbank

Supabase/PostgreSQL. Tabellen u. a.: `users`, `user_profiles`, `lotteries`, `draws`, `draw_numbers`, `lottery_rules`, `statistics`, `number_frequency`, `number_pairs`, `number_triplets`, `personal_profiles`, `numerology_profiles`, `astrology_profiles`, `astronomy_events`, `favorite_numbers`, `generated_combinations`, `saved_combinations`, `ai_analyses`, `documents`, `data_sources`, `import_jobs`, `notifications`, `subscriptions`, `app_settings`, `audit_logs`.

## 4. Historisches Archiv

Auswahl LOTTO/EuroJackpot → Jahr/Monat/Datum/Wochentag/Zahlen/Gewinnklassen/Jackpot/Gewinner/Quelle. Filter nach Jahr, Monat, Wochentag, Zahl, Zahlenbereich, Jackpot, Gewinnklasse. Zusätzlich: „Ziehungen an meinem Geburtsdatum", „am 13.", „am 31." usw.

## 5. Zahlenstatistik

Absolute/relative Häufigkeit, letzte Ziehung, Ausbleibedauer, durchschnittlicher/aktueller Abstand, häufigste/seltenste Zahlen, „heiße"/„kalte" Zahlen, häufige Paare/Dreierkombinationen, Cluster, gerade/ungerade, niedrig/hoch, Summe, Mittelwert, Median, Standardabweichung, aufeinanderfolgende Zahlen, gleiche Endziffern, Wiederholungen aus vorherigen Ziehungen. **Wichtig:** „heiß"/„kalt"/„Glückszahl" müssen als statistische bzw. spielerische Kategorien erklärt werden — die App darf niemals behaupten, eine Zahl werde wegen ihrer Vergangenheit wahrscheinlicher gezogen.

## 6. Datumsanalyse

Tag, Monat, Jahr, Wochentag, Kalenderwoche, Quartal, Jahreszeit, Monatsanfang/-mitte/-ende, gerade/ungerade Tage, Primzahlen im Datum, Quersumme, numerologische Datumswerte — für spielerische persönliche Analysen.

## 7. Persönliches Benutzerprofil

Optional: Vorname, bevorzugter Name, Geburtsdatum/-zeit/-ort, Lieblingszahlen, Glückszahlen, wichtige Daten, bevorzugte/zu vermeidende Zahlen(-bereiche). Geburtsdatum/-zeit optional. Datenschutz: nur mit Zustimmung speichern, jederzeit löschbar.

## 8. Numerologie

Eigenes Modul: Lebenszahl, Geburtszahl, Schicksalszahl, Namenszahl, Seelenzahl, Persönlichkeitszahl, persönliche Jahres-/Monats-/Tageszahl. Nachvollziehbare Berechnungsregeln, immer „So wurde die Zahl berechnet" zeigen. **Ausschließlich als Unterhaltung/persönliche Interpretation** präsentieren.

## 9. Astrologie/Horoskop

Bei vorhandenem Geburtsdatum: Sternzeichen, Element, Modalität, Eigenschaften, persönliche symbolische Zahlen. Bei Geburtszeit+-ort zusätzlich optional: Aszendent, Mondzeichen, Planetenpositionen, Häuser, Aspekte — über zuverlässige astronomische Berechnungsbibliothek/API, nicht frei erfunden. **Unterhaltungskomponente, nicht wissenschaftlich bewiesene Methode zur Gewinnvorhersage.**

## 10. Astronomie

Eigenes, von Astrologie technisch getrenntes Modul: Mondphase/-alter, Sonnen-/Mondauf-/-untergang, Planetenpositionen, sichtbare Planeten, Sternbilder, besondere Ereignisse (Meteorschauer, Finsternisse, Vollmond, Neumond) — aus zuverlässigen APIs/Berechnungen, ggf. für Geburtsdatum/-ort des Nutzers.

## 11. Persönliche Glückszahlen

Zentrale Funktion: „Meine Glückszahlen"-Generator kombiniert Statistik, Numerologie, Geburtsdatum, Name, Kalender, Astrologie, Astronomie, Lieblingszahlen, historische Daten, Zufall, mit vom Nutzer änderbaren Gewichtungen (Beispiel: Statistik 30 %, Persönliche Daten 20 %, Numerologie 15 %, Kalender 10 %, Astronomie 10 %, Astrologie 5 %, Favoriten 5 %, Zufall 5 %).

## 12. Transparente AI-Berechnung

Nicht nur Zahlen zeigen, sondern erklären warum (persönliche Zahl, historische Häufigkeit, Numerologie-Faktor, Datumsfaktor, Favorit) + Gesamtbewertung. Diese Bewertung **darf nicht** als mathematische Gewinnwahrscheinlichkeit dargestellt werden — stattdessen „Persönlicher Score"/„Analyse-Score".

## 13. AI Lotto Assistent

Chat-Assistent („Lotto AI"), der auf tatsächlich vorhandenen Daten arbeitet (keine erfundenen Statistiken), z. B. „Welche Zahlen sind aktuell statistisch interessant?", „Erstelle mir 5 Kombinationen.", „Welche meiner Zahlen sind lange nicht gezogen worden?".

## 14.–17. Generator, Regeln, Vergleich, Simulation

Kombinations-Generator mit Modi (Zufällig, Statistik, Heiße/Kalte Zahlen, Ausgewogen, Persönlich, Numerologie, Astrologie, Astronomie, Geburtstagszahlen, AI Mix, Vollanalyse, Benutzerdefiniert); optionale Regeln (keine Folgezahlen, Verhältnisse, Summen, Favoriten …) — **nie als gewinnchancen-erhöhend darstellen**. Vergleich eigener Kombinationen mit der Historie. „Was wäre wenn?"-Simulation (historische Rückrechnung, klar gekennzeichnet, keine Zukunftsaussage).

## 18.–25. Dashboard & Seiten

Premium-Dashboard (heutiges Datum, nächste Ziehung, Jackpot, persönliche Zahlen, Statistiken, astronomischer Tagesstatus, Numerologie des Tages, „AI Insight des Tages"). Separate Seiten `/lotto`, `/eurojackpot`, `/archive`, `/statistics` (interaktive Charts: Häufigkeit, Zeitverlauf, Heatmap, Trends, Paare, Dreierkombinationen, Abstände, Summen), `/my-lucky-numbers`, „Mein Geburtstag" (Ziehungen an diesem Kalendertag + Numerologie/Sternzeichen/Mondphase), Tagesanalyse mit persönlichem Tages-Score.

## 26.–29. KI-Engine, Datenimport, Quellen, Dokumente

Strukturierte interne AI-Pipeline (Daten abrufen → Statistik → persönliche Faktoren → Numerologie → Astronomie/Astrologie → Gewichtung → Generierung → Validierung → Erklärung → Disclaimer) — **KI darf niemals Zahlen erfinden**. Admin-Bereich `/admin` für Datenimport (CSV/JSON/Excel/API), Validierung, Duplikaterkennung, Importprotokoll. Jede Datenquelle mit URL/Abrufdatum/Status/Verifizierung — nichts als „offiziell" bezeichnen, was es nicht ist. Dokumentenarchiv (historische Ziehungen, Regelwerke, Statistikberichte, Importprotokolle) mit Suche.

## 30.–32. Export & Favoriten

PDF-Export (Titel, Datum, Lotterie, Statistik, persönliche Faktoren, Kombinationen, AI-Erklärung, Quellen, Disclaimer), CSV/Excel-Export. Favoriten: Zahlen, Kombinationen, Analysen, Ziehungen, Notizen.

## 33.–36. Konten, Premium, Mobile, Design

Supabase-Auth (E-Mail/Passwort, optional Google). Free/Premium-Architektur vorbereiten (Free: Basisstatistik, Archiv, einfacher Generator; Premium: AI-Analysen, persönliche Zahlen, Numerologie, Astronomie/Astrologie, umfangreiche Statistik, PDF, erweiterte Simulation, unbegrenzte Kombinationen) — **noch keine echte Zahlungsintegration nötig, aber Architektur dafür vorbereiten**. Mobile-first mit Bottom Navigation, Desktop Sidebar. Design: Premium, modern, dunkler Hintergrund optional, Gold-/Violett-/Blau-Akzente, Glas-/Card-Optik, dezente Animationen, professionelle Charts — Mischung aus Finanz-Dashboard + AI-App + Premium-Lotto-App + Astronomie-App + Statistik-Plattform.

## 37.–39. Homepage, AI-Chat, Erklärbarkeit

Hero: „Entdecke deine persönlichen Glückszahlen." / „Historische Daten. Statistik. Numerologie. Astronomie. AI." AI-Chat, der fehlende Infos nachfragt, Daten analysiert, Kombinationen generiert+erklärt+optional speichert. Jede AI-Empfehlung muss erklären, warum eine Zahl gewählt wurde (Statistik/Persönlich/Numerologie/Astronomie/Kalender/Favorit/Zufall, mit Gewichtung).

## 40.–41. Keine Gewinnversprechen / Responsible Gambling

**Sehr wichtig:** Die App darf niemals behaupten „Diese Zahlen gewinnen.", „Diese Kombination hat höhere Gewinnchancen.", „AI kann die nächste Ziehung vorhersagen.", „Astronomie erhöht die Gewinnchance." Stattdessen: „Diese Kombination wurde anhand deiner gewählten Kriterien erzeugt.", „Vergangene Ziehungen können zukünftige Ziehungen nicht zuverlässig vorhersagen.", „Lottoziehungen sind Zufallsereignisse." Verantwortungsvoller Umgang mit Glücksspiel: Hinweise zu Suchtgefahr, nur leistbares Geld einsetzen, keine Gewinnversprechen, keine Verlustjagd, keine manipulative Sprache — statistische Analysen ändern nicht die mathematischen Gewinnwahrscheinlichkeiten.

## 42.–47. Technik, APIs, Modularität, Performance, Security

Stack: React/TypeScript/Tailwind/shadcn/ui + Charts, Supabase/PostgreSQL/Supabase Auth/Edge Functions/AI API, externe Astronomie/Astrologie-APIs. Saubere Services (`lotteryService`, `statisticsService`, `numerologyService`, `astrologyService`, `astronomyService`, `aiService`, `archiveService`, `documentService`, `userService`, `generatorService`, `importService`). Module unabhängig funktionsfähig (Ausfall eines Moduls darf andere nicht lahmlegen). Caching, Pagination, Lazy Loading, optimierte Queries, Row Level Security, sichere Auth, keine API-Keys im Frontend, Rate Limiting.

## 48.–52. Admin, Systemstatus, Erweiterbarkeit, Suche, Benachrichtigungen

Admin-Dashboard (Ziehungen, Nutzer, letzte Aktualisierung, Importstatus, Fehler, API-Status, Datenquellen, AI-Nutzung). Eigene „Datenstatus"-Seite je Datenquelle. Architektur nicht auf zwei Lotterien fixiert — später Lotto 5aus50, EuroMillions, Powerball, Mega Millions etc. über Konfiguration ergänzbar. Globale Suche. Benachrichtigungen vorbereiten (neue Ziehung, Jackpot-Update, tägliche Glückszahlen, Push optional).

## 53.–58. Persönliche Analyse-Seiten

„Meine persönliche Lottoanalyse" (Geburtsdatum, Numerologie, Sternzeichen, Astronomie, Lieblingszahlen, Statistik, AI-Empfehlungen zusammengeführt), visuelles „Mein Zahlenprofil" (Top 10 persönliche Zahlen), interaktives Zahlenrad, Heatmap mit Zeitraum-Filtern, „Datums-Explorer" (beliebiges Datum → alle Ziehungen an diesem Kalendertag + Numerologie/Astronomie/Mondphase/Sternzeichen).

## 59.–62. Regeländerungen, Tests, Demodaten, Transparenz

Historische Regeländerungen dokumentiert und bei Statistik berücksichtigt. Automatisierte Tests (Import, Duplikaterkennung, Validierung, Statistik, Numerologie, Generator, Auth, DB, API-Fehler). Klar gekennzeichnete Demodaten, falls noch keine vollständigen historischen Daten importiert — **niemals als echte Ziehungen darstellen**. Sichtbare Datenquelle je Ziehung, klare Unterscheidung offizielle/Drittanbieter-/berechnete/AI-generierte Daten.

## 63.–65. Sprachen, Datenschutz, Onboarding

Primär Deutsch, Architektur für Englisch/Französisch/Italienisch/Spanisch vorbereiten. DSGVO-orientiert (Geburtsdatum/-zeit/-ort besonders geschützt, Privacy Settings, Datenexport, Account-/Datenlöschung). Onboarding mit überspringbaren optionalen Angaben.

## 66.–70. Erste Analyse, Speichern, Rückverfolgung, AI-Report, Premium Look

Nach Onboarding sofortiges Zahlenprofil (Top 10 Zahlen/5 Kombinationen, numerologisch/statistisch/astronomisch). Kombinationen benennbar/speicherbar. „Teste diese Kombination historisch" (Trefferzahlen 0–6 rückwirkend berechnet). „AI-Report erstellen" (Zusammenfassung, Statistik, persönliche Analyse, Numerologie, Astronomie, historischer Vergleich, Kombinationen, Erklärung, Disclaimer). Hochwertiges, nicht-generisches Design mit Dark/Light Mode.

## 71.–75. MVP, Hinweise, Homepage-Text, Navigation, Ziel

MVP-Priorität: Auth, DB, LOTTO 6aus49, EuroJackpot, Archiv, Statistik, Generator, persönliches Profil, Numerologie, Dashboard — danach AI, Astronomie, Astrologie, PDF, Premium, Benachrichtigungen. Echte funktionierende Anwendung bauen, keine statische Demo; für noch nicht verbundene externe APIs saubere Interfaces/Platzhalter-Services. Homepage-Botschaft: „Deine Zahlen. Deine Geschichte. Deine Analyse." / „Entdecke historische Lotto-Daten, Statistik, persönliche Zahlen, Numerologie, Astronomie und künstliche Intelligenz in einer einzigen Plattform." CTA: „Meine Zahlen entdecken". Hauptnavigation mindestens: Home, Meine Zahlen, EuroJackpot, LOTTO 6aus49, Statistik, Archiv, Numerologie, Astronomie, Horoskop, Lotto AI, Favoriten, Profil.

**Ziel:** keine einfache Lottozahlen-Seite, sondern eine umfassende persönliche Lotto- und Zahlenanalyse-Plattform — jederzeit transparent: historische Statistik ist keine Vorhersage, Numerologie/Astrologie/Astronomie dienen der persönlichen Unterhaltung/Analyse, keine Methode kann zufällige Lottoziehungen zuverlässig vorhersagen. Hochwertig, modular, skalierbar, professionell bauen — mit MVP beginnen, dann Module Schritt für Schritt ergänzen.
