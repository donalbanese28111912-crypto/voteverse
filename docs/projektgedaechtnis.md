# NationVerse – Projektgedächtnis

Stand: 2026-10-09. Wird vom Skill `memory-keeper` gepflegt.

## Entscheidungen
- Plattform 1 heißt **VIP Nation Coinverse** (Lovable 26b41ecb). Plattform 2 heißt **Nation CoinVerse Marktplatz** (Lovable 8671a75d), nie „VIP“. „Cryptoverse“ entfällt.
- Coins werden als Kryptowährung beschrieben, laufen aber im geschlossenen Kreislauf (keine Auszahlung, kein Export). Alles Demo, kein Finanzprodukt.
- Registrierung Plattform 1: Staatsbürgerschaft, ab 18, eine Nation pro Person dauerhaft, max. 88.888 Personen pro Nation, 150 Nationen ab Tag 1. Voll → nur Plattform 2. Alle Länder zugelassen (vor Echtbetrieb Länderprüfung nötig).
- Platz personengebunden. Löschung nach 2 Jahren offline und ohne Coins, 90 Tage Warnung vorher. Neuanmeldung ohne Vorrang, wenn Platz frei.
- 153 Coins (150 Nationen + Weltcoin, Aliencoin, Universe Coin), je 8.888.888.888 Coins. Gesamt 1.359.999.999.864.
- 889 Preisstufen je 10 Mio. Coins (letzte 8.888.888): Preis = 0,00001 + 8,87999 × ((s−1)/888)^2,6 €. Liste `docs/preisstufen.csv`. Eine Nation komplett ≈ 21.938.619.175,43 €.
- Stimmen = max(1, volle Millionen Coins über alle 153). Zum Verkauf gestellte, unverkaufte Coins zählen weiter. Plattform 2 stimmt nicht mit. Abstimmung zum Aussehen der nächsten Kryptowährung immer mit Anzeigename, Stimmen erst am Ende sichtbar.
- Plattform 1 Laufband: alle Ereignisse, Käufe ab 100.000 Coins, nur Gesamtpreis, 10 Min. Verzögerung, anonym oder Anzeigename (Voreinstellung anonym, im Profil und Kaufdialog änderbar).
- Übertragung zu Plattform 2 ohne Mindestmenge, Gebühr als Platzhalter. Rücknahme sofort, nur unverkaufte Coins. Käufer von Plattform 2 dürfen mit VIP-Platz zu Plattform 1 übertragen.
- Plattform 2: höchstens halbe Information, keine Stufen/Verkaufszahlen/Plätze/Voting. Angebote nur von VIPs (Nation, Menge, Preis, Laufzeit, Mindestkaufmenge), Gegenangebote privat, kein Selbstkauf, Laufband nur neue Angebote. Hinweis: Preise sind Verhandlungspreise.
- Katalog: 8 bildlose Nationen (Belize, Lesotho, Kap Verde, Gambia, Zentralafrikanische Republik, Seychellen, Guinea-Bissau, Komoren) ersetzt durch Äthiopien, Venezuela, Jemen, Kirgisistan, Laos, Tadschikistan, Barbados, Südsudan. Kroatien nutzt das Schachbrettwappen (#41).
- Rückseite folgt der Metallfarbe der Vorderseite (frontMetalById). Verteilung ist noch ungleich (Roségold 35, Smaragd 34, Saphir 26, Violett 1).

## Offen
- 24 Nationen ohne Originalbild: Polen, Taiwan, Belgien, Schweden, Irland, Argentinien, Thailand, Österreich, Norwegen, Israel, VAE, Singapur, Bangladesch, Vietnam, Malaysia, Südafrika, Philippinen, Dänemark, Iran, Kolumbien, Myanmar, Mauretanien, Malediven, Liberia. Prompts in Metallfarben liegen im Chat vor; Bilder fehlen.
- Plattform 2: Bilder der 8 neuen Nationen und Kroatien nachladen; Agent meldete Katalog-Positionskonflikte.
- Neue weiße Coin-Serie (10 Großnationen) – Verwendung ungeklärt, Einzeldateien fehlen.
- Neue Bilder der 8 Nationen sind aus Collagen ausgeschnitten (niedrigere Auflösung); Originale wären besser.
- Rechtlich vor Echtbetrieb: Kryptowerte-Einordnung, Länder/Sanktionen, Steuern, Datenschutz bei Abstimmungen mit Namen.
- Echte Adresse von Plattform 2 für den Link auf Plattform 1.

## Prompt-Bibliothek (2026-10-10)
- 24 Lovable-Projekte geprüft, Rangliste und 146 Prompts in `docs/prompts/` (INDEX.md, status.csv, je Projekt eine Datei, Master-Prompt). Skill `prompt-tracker` führt den Stand.
- Platzhalter vor dem Senden ersetzen: {ADMIN_EMAIL}, {URL_PLATTFORM_1}, {URL_PLATTFORM_2}.
- Dringendste Projekte: R01 PunaKI (live), R02 AI Universe Style Shop, R03 Wish Box Moments, R04 Eagle Diaspora Connect.
- Querschnittsmuster: erster Nutzer wird Admin, KI ohne Limit, erfundene Zahlen, lang="en", englische 404, fehlendes og:image.
