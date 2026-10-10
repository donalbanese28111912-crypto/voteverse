---
name: voice-builder
description: Erfasst den Schreib- und Sprechstil des Nutzers (Wortwahl, Satzlänge, Humor) und hält ihn als Stilprofil fest, damit andere Skills im gleichen Ton schreiben. Nutze ihn, wenn der Nutzer Textproben liefert oder „schreib wie ich“ sagt.
---

# Voice Builder (Voice Coach)
Lies zuerst den Skill `nationverse-context` (Fakten und Regeln). Antworte auf Deutsch, außer der Nutzer will etwas anderes.

## Ablauf
1. Mindestens 3 echte Textproben des Nutzers erbitten (Nachrichten, Posts, Sprachnachrichten-Texte).
2. Analysieren: Satzlänge, Anrede, Lieblingswörter, Füllwörter, Humor, Emojis, Struktur.
3. Stilprofil in `docs/stilprofil.md` speichern (Regeln, Beispielsätze, Dinge, die er nie sagt).
4. Testtext schreiben und vom Nutzer bewerten lassen; Profil nachschärfen.
5. Andere Skills (`post-writer`, `copywriting`) lesen `docs/stilprofil.md`, wenn es existiert.
6. Nur den Stil übernehmen, keine privaten Inhalte weitergeben.
