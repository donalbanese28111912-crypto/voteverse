# Was für die Note 9,5 gebraucht wird

Die Noten sind Schätzungen aus Code und Desktop-Screenshot. Prompts bringen ein Projekt meist auf 7,5 bis 8,5. Für 9,5 braucht es zusätzlich die folgenden Punkte.

## Maßstab (alle Projekte)
1. **Sicherheit:** kein Admin-Zugriff ohne Login, RLS geprüft, Limits für KI und Formulare, Secrets nur serverseitig, Abhängigkeiten aktuell, Backup und Wiederherstellung getestet.
2. **Ehrlichkeit:** keine erfundenen Zahlen, Beispiele gekennzeichnet, nur belegte Aussagen.
3. **Funktion:** jeder Button tut etwas, jeder Hauptweg (Anmelden, Kaufen/Anfragen, Bezahlen) ist von Anfang bis Ende getestet, Fehler werden angezeigt statt verschluckt.
4. **Design und Bedienung:** auf 390 px geprüft, Kontrast AA, Tastatur, ruhige Navigation, echte Bilder statt Platzhalter.
5. **Qualität:** Tests für Kernregeln, End-to-End-Test der Hauptwege, Lighthouse mindestens 90 (Leistung, Barrierefreiheit, SEO), Fehlerüberwachung.
6. **Inhalt und Daten:** echte Inhalte statt Demo, Quellen und Stand, mehrsprachig, wo versprochen.
7. **Recht und Datenschutz:** durch den Betreiber/Anwalt geprüft (Rechtstexte sind nicht Teil dieser Prüfung), Einwilligungen, Löschkonzept.
8. **Wirkung:** echte Nutzer haben es getestet, 5 Rückmeldungen eingearbeitet, Zahlen (Anmeldungen, Abschlüsse) werden gemessen.

## Pro Projekt: was zusätzlich zu den Prompts fehlt

| Projekt | Note heute → nach Prompts | Zusätzlich nötig für 9,5 |
|---|---|---|
| R01 PunaKI (live) | 6,5 → 8 | Kunden-Login und Dashboard mit echten Daten (Roadmap offen); echte Betriebe und Referenzen statt Mock; Zahlungs- und Provisionsfluss end-to-end; Datenschutz/DAC7-Prüfung; Monitoring. |
| R02 AI Universe Style Shop | 4 → 7,5 | Echte Affiliate-Produkte mit Fotos und gültigen Links (statt 1.169 Platzhalter); Rechte an Marken/Bildern klären; Detailseite, Suche, Filter; ein Design. |
| R03 Wish Box Moments | 5 → 7,5 | Stripe-Checkout; echte Produkte mit Händlerlinks; Moderation für Community-Uploads; Versand/Retourenfluss; echte Fotos im Würfel-Konfigurator. |
| R04 Eagle Diaspora Connect | 5 → 7,5 | Moderationsteam und Meldeweg; echte Community-Inhalte statt Demo; Mehrsprachigkeit der Oberfläche; Behörden-Lotse mit Quellen; Löschkonzept für Profile. |
| R05 NationVerse Plattform 1 | 8 → 9 | Alle Coin-Bilder in hoher Auflösung; Zahlungsanbieter und Identitätsprüfung (nach Rechtsprüfung); echtes Backend statt Demo-Zustand; Länder-/Sanktionsprüfung. |
| R06 NationVerse Plattform 2 | 7,5 → 8,5 | Echtes Backend für Angebote und Gegenangebote; Verifizierung der VIP-Mitglieder von Plattform 1; Treuhand/Abwicklung nach Rechtsprüfung. |
| R07 Puna AI Digitalwerk | 6,5 → 8 | Echte Referenzen und Case Studies; öffentliche Live-URLs aller Projekte; Terminbuchung mit Kalender-Sync und Erinnerungen. |
| R08 World Watch Albania | 6 → 8 | Redaktionelle Prüfung strittiger Themen; Lizenzen für Bilder; Quellenliste mit Bewertungsgrundlage; Last-/Kostenkontrolle der KI-Zusammenfassungen. |
| R09 Die Alba Familie | 6 → 8 | Elterliche Einwilligung und Datenschutz für Kinderdaten geprüft; Moderation der KI-Ausgaben; echte Videos; größeres Quiz. |
| R10 Lucky Star Numbers | 6 → 7,5 | Obergrenze wegen Glücksspielrecht: keine Gewinnversprechen; Jugendschutz; ehrliche Funktionen (Erwartungswert, Beliebtheits-Filter, Limit). Mehr als 8 ist nur mit rechtlicher Prüfung sinnvoll. |
| R11 Web & AI Solutions Hub | 7 → 8,5 | Echte Kundenreferenzen; CRM/E-Mail-Anbindung für Leads; Blog/Inhalte für SEO; Leistung und Barrierefreiheit gemessen. |
| R12 ClipCraft | 7 → 8,5 | Zahlungsfluss, Rechnungen, Abo-Verwaltung; Plattform-Analytics (Entwicklerzugänge); Tests der KI-Funktionen; EU-Datenhaltung belegt. |
| R13 Puna Beauty Hub | 5,5 → 7,5 | Echte Anbieterinnen und Bewertungen; Zahlungen, Push und Support; alle 16 Sprachen oder ehrliche Reduktion. |
| R14 Puna Beauty Shop | 6,5 → 8 | Zahlungs- und Versandfluss; echte Bewertungen; Tests für Bestellung und Preise; Hauttyp-Finder mit Datenschutzhinweis. |
| R15 Voteverse | 6 → 8 | Login/Konto gegen Mehrfachstimmen; redaktionelle Tagesfragen; echte Stimmen mit Verlauf; Moderationswerkzeuge. |
| R16 Bastion of Freedom | 7 → 8,5 | Echte Fotos, Lagerbestand und Seriennummern; Zertifikatsregister; Datenschutz für Warteliste; echte Auktion nur mit Rechtsprüfung. |
| R17 StarkGemeinsam | 6 → 8 | Echter Shopify-Shop mit Produktfotos; Checkout; Newsletter-Anbindung; Social-Kanäle; Nachhaltigkeitsangaben belegt. |
| R18 Amazing AI Universe | 6 → 7,5 | Rechtsklärung bezahlte Stimmen und Marken; Admin-Sicherheit; konsistente Zahlen; Bildoptimierung; 20 Sprachen vollständig. |
| R19 Kühlschrank WG Hub | 6 → 7,5 | Echte Videos und Ton statt Standbilder; Porträts für alle 30 Figuren; Episodenseiten; Moderation der Community-Zitate. |
| R20 Creator's Hub AI | 6 → 7,5 | Echte Plattform-Anbindung (OAuth) und Videostatus; Rollen/Rechte; Tests; ehrliche Beschreibung. |
| R21 One Plis | 7 → 8,5 | Konsistentes Weltmodell (Name, Zeitraum); Quellen/Urheberrecht der Karten; mobiles Archiv; Tests für Konsistenzprüfung; Studio-Import getestet. |
| R22 Die 13 Illuminaten | 7 → 8,5 | Mobile Chronik; RLS im Repo; Bilder zu Figuren; ehrliche Kennzeichnung realer Institutionen; Merch mit echten Preisen oder entfernt. |
| R23 Pflege Compass | 7,5 → 8,5 | Quelle und Stand für jede Angabe; Prüfung durch Fachberatung/Anerkennungsstelle; geprüfte Übersetzungen; Barrierefreiheit-Audit. |
| R24 PunaKI Handwerker Shop | 7,5 → 8,5 | Echte Preise und Lieferanten; Zahlung/Anfrage-Abwicklung; Produktfotos optimiert; Size-/Logo-Konfigurator getestet. |
