# PunaAI ("Projob AI – Dein SmartMeister") — Ursprungs-Prompt

> **Herkunft:** Dies ist der ursprüngliche Lovable-Erstellungs-Prompt für
> **PunaAI** (interner Projektname `projob-smartmeister-ai`, später als
> „PunaAI – Dein SmartHandwerker" gebrandet). Ein **eigenständiges Produkt,
> nicht Teil von Voteverse** — siehe `docs/PUNAKI_MEMORY.md` für den
> aktuellen Stand. Wortlaut unverändert aus der Lovable-Projektbeschreibung
> übernommen.

---

**Lovable-Prompt: Projob AI – Dein SmartMeister**

Diesen kompletten Text in Lovable als ersten Prompt einfügen. Er ist bewusst sehr detailliert, damit Lovable eine möglichst vollständige erste Version (Design + Kernstruktur) generiert. Bei Bedarf in mehreren Nachrichten aufteilen, falls Lovable zu viel auf einmal ablehnt.

## PROMPT (zum Kopieren)

Baue eine Web-App namens „Projob AI – Dein SmartMeister". Es ist ein zweiseitiger KI-Marktplatz für Deutschland, der Privatkunden mit Handwerkern/Dienstleistern verbindet. Die App hat zwei komplett unterschiedliche Nutzeroberflächen: eine für Auftraggeber (Kunden) und eine für Handwerker. Nutzer wählen bei Registrierung ihre Rolle.

Design-Anspruch: modern, vertrauenswürdig, clean, freundlich – nicht verspielt oder billig wirkend, sondern seriös wie ein professionelles Business-Tool, aber mit warmer, einladender Farbgebung (kein reines Behörden-Grau). Deutschsprachige UI. Mobile-first, da viele Handwerker die App auf der Baustelle per Smartphone nutzen.

### 1. Rollenwahl & Onboarding

- Startbildschirm mit zwei klaren Optionen: „Ich brauche einen Handwerker" vs. „Ich bin Handwerker"
- Getrennte Registrierungs-Flows je Rolle
- Für Handwerker: Onboarding-Assistent, der Schritt für Schritt durchs Profil führt (siehe Abschnitt 4)

### 2. Kundenseite – Auftrag erstellen (KI-Diagnose-Flow)

Zentrales Feature: Der Kunde macht ein Foto seines Problems und schreibt einen kurzen Satz dazu. Die KI erstellt daraus automatisch:

- Einen professionell formulierten, klaren Auftragstext/Angebot
- Eine grobe Kategorisierung des Gewerks (Elektro, Sanitär, Garten, Kfz, Bau, etc.)
- Optional: eine visuelle Vorher/Nachher-Darstellung des möglichen Ergebnisses

Beispiele, die der Flow unterstützen soll (als UI-Beispiele/Platzhalter im Formular):
- „Mein Auto verliert Kühlwasser" + Foto vom Auto
- „Garten ist ungepflegt, Hecke schneiden, Unkraut entfernen" + Fotos vom Garten
- „Möchte elektrisches Garagentor" + Foto der Garage

Formular-Schritte:
1. Foto(s) hochladen (Mehrfach-Upload möglich)
2. Kurzer Freitext, was das Problem/der Wunsch ist
3. KI generiert Vorschau: Auftragstext + geschätzte Kategorie + (Platzhalter für) Vorher/Nachher-Bild
4. Kunde kann Text vor Veröffentlichung bearbeiten
5. Standort/Adresse angeben (für Entfernungsberechnung zu Handwerkern)
6. Wunschzeitraum (dringend / diese Woche / flexibel)
7. Auftrag veröffentlichen

Nach Veröffentlichung: Kunde sieht Status-Dashboard mit eingehenden Interessensbekundungen von Handwerkern, kann Profile ansehen, Angebote vergleichen und einen Handwerker auswählen.

### 3. Handwerkerseite – Auftrags-Feed (Swipe-Interface)

- Kartenbasierter Feed mit neuen Aufträgen in der Nähe (Tinder-artiges Swipe-Verhalten)
- Jede Karte zeigt: Fotos des Auftrags, KI-generierter Auftragstext, geschätzter Arbeitsaufwand, geschätzte Arbeitszeit, geschätzte Materialkosten, Entfernung zum Auftragsort, geschätzte Spritkosten
- Grüner Button/Swipe rechts = Interesse bekunden
- Roter Button/Swipe links = nicht interessiert, Auftrag verschwindet aus dem Feed
- Filter-Möglichkeiten oben: Gewerk, Entfernung, Mindestauftragswert, Dringlichkeit
- Nach „Interesse bekunden": Möglichkeit, einen kostenlosen Besichtigungstermin vorzuschlagen oder direkt einen Kostenvoranschlag einzureichen

### 4. Handwerker-Profil

Ausführliches, öffentlich einsehbares Profil:

**Vorstellung** — Profilfoto/Firmenlogo, Upload-Feld für ein kurzes Vorstellungsvideo (max. 60 Sek.), Firmenname, Rechtsform, tätig seit (Jahr), „Über mich"-Freitextfeld.

**Qualifikation** — Ausbildung/Meistertitel (Textfeld + Datei-Upload für Nachweise), frühere Stationen/Arbeitgeber, Berufsjahre, Spezialisierungen (Mehrfachauswahl je Gewerk, z. B. bei Elektro: Photovoltaik, Smart-Home, Sicherungskästen), Upload-Bereich für Schulungsnachweise/Zertifikate.

**Portfolio** — Galerie mit Fotos/Videos abgeschlossener Projekte, automatische Anzeige der KI-generierten Vorher/Nachher-Bilder aus abgeschlossenen Aufträgen, Kundenbewertungen mit Sternebewertung + Freitext + optionalem Ergebnisfoto.

**Praktische Infos** — Einsatzradius (Slider in km oder PLZ-Gebiete-Auswahl), Preisrahmen/Stundensatz (ungefähre Angabe, kein Festpreis), Verfügbarkeitskalender (nächster freier Termin sichtbar), bevorzugter Kontaktweg (Anruf/WhatsApp/In-App-Chat).

**Vertrauenssignale** (prominent darstellen) — Verifizierungs-Badge („Gewerbeanmeldung, Handwerksrolle-Eintrag und Haftpflichtversicherung geprüft"), Antwortquote in %, durchschnittliche Reaktionszeit, Anzahl abgeschlossener Aufträge über die App, Live-Auslastungsanzeige („2 freie Slots diese Woche").

**Profil-Vervollständigung** — Fortschrittsbalken mit Tipps („Lade ein Video hoch, um deine Sichtbarkeit zu erhöhen").

### 5. Matching & Kommunikation

- In-App-Chat zwischen Kunde und Handwerker pro Auftrag
- Statusanzeigen: angefragt → Besichtigung vereinbart → Angebot erhalten → beauftragt → in Arbeit → abgeschlossen
- Automatische Benachrichtigungen bei Statuswechsel (Platzhalter für Push/E-Mail/WhatsApp)
- Bei Beauftragung: automatischer Kalendereintrag für den Handwerker mit Ort, Zeit, Kundenname, benötigten Werkzeugen (aus dem Auftragstext von der KI vorgeschlagen)

### 6. Handwerker-Backoffice (Dashboard-Bereich)

Eigener Dashboard-Bereich „Mein Büro" mit Modulen:

- **Angebote & Rechnungen** — Angebot → Auftragsbestätigung → Rechnung mit einem Klick, Vorlagen für Standardaufträge, Nachkalkulation (geplant vs. tatsächlich)
- **Kalender & Termine** — Wochen-/Monatsansicht, Werkzeug-/Maschinenverwaltung
- **Steuern & Finanzen** — Einnahmen/Ausgaben-Übersicht, Beleg-Upload mit automatischer Kategorisierung (Platzhalter KI), Fahrtenbuch-Modul, Jahresabschluss-Button (PDF für Steuerberater/Finanzamt), Liquiditätsvorschau (30/60/90 Tage), Rücklagen-Rechner
- **Material & Lager** — einfache Lagerbestandsliste mit Mindestbestand-Warnung
- **Kunden & Bewertungen** — Kundenliste mit Auftragshistorie, automatische Bewertungsanfrage nach Abschluss (Platzhalter)
- **Business-Analytics** — Profitabilität pro Auftragstyp, Auslastung über die Monate (Saisonalität)

### 7. Monetarisierung (im Produkt sichtbar machen)

- Hinweis im Handwerker-Bereich: „5% Erfolgsprovision – nur wenn ein Auftrag über die App zustande kommt, keine Grundgebühr"
- Übersichtsseite „Meine Provisionen" mit Historie abgerechneter Aufträge

### 8. Technische Rahmenbedingungen

- Responsive Design, Mobile-first
- Zwei getrennte Navigationsstrukturen je Rolle (Kunde/Handwerker), aber gemeinsames Design-System
- Platzhalter-Komponenten für KI-Funktionen (Bildgenerierung, Textgenerierung, Kostenschätzung) klar als „KI-Vorschlag" kennzeichnen, damit später echte KI-API-Anbindung erfolgen kann
- Farbschema: vertrauensbildend, z. B. ein kräftiges Blau oder Grün als Primärfarbe, warme Akzentfarbe für Call-to-Action-Buttons
- Klare, große Buttons für den grünen/roten Swipe-Mechanismus (auch per Klick bedienbar, nicht nur Wischgeste)

### 9. Startpunkt für den ersten Build

Kernseiten zuerst, bevor weitere Details ausgebaut werden:
1. Landingpage mit Rollenwahl
2. Kunden-Flow: Auftrag erstellen (Foto-Upload + Text → KI-Vorschau-Bildschirm)
3. Handwerker-Flow: Swipe-Feed mit Auftragskarten
4. Handwerker-Profil-Seite (Ansicht + Bearbeitung)
5. Einfaches Dashboard „Mein Büro" mit den Modul-Kacheln (Inhalte zunächst als Platzhalter/Mockdaten)

### Hinweise zur Nutzung dieses Prompts

- In Teilen einfügen: Falls Lovable bei einem so langen Prompt nicht alles umsetzt, zuerst Abschnitte 1–5 (Kern-Marktplatz) senden, dann in Folge-Prompts Abschnitt 6 (Backoffice) und 7 (Monetarisierung) nachreichen.
- KI-Funktionen sind zunächst Mockups: Lovable baut das UI/UX-Gerüst; die echte KI-Anbindung (Bildgenerierung, Kostenschätzung per LLM) muss danach separat per API integriert werden (z. B. über die Anthropic-API mit Bild- und Textmodellen).
- Iterativ vorgehen: Nach dem ersten Entwurf gezielt einzelne Screens verfeinern lassen, statt alles gleichzeitig perfektionieren zu wollen.
