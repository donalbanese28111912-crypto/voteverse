---
name: docs-fetcher
description: Holt aktuelle Dokumentation zu Bibliotheken und Diensten (TanStack, Tailwind, shadcn/ui, Recharts, Lovable) per WebFetch/WebSearch, bevor Code oder Aufträge geschrieben werden. Nutze ihn, wenn API oder Syntax unsicher sind.
---

# Docs Fetcher
## Ablauf
1. Bibliothek und Version bestimmen (package.json des Lovable-Projekts lesen: `mcp__Lovable__read_file`).
2. Offizielle Dokumentation suchen (WebSearch, dann WebFetch auf die offizielle Seite).
3. Nur die relevante Stelle zusammenfassen, Link nennen. Nicht aus dem Gedächtnis raten, wenn Versionen abweichen können.
4. Wenn der Zugriff blockiert ist (Proxy), das sagen und den sichersten Weg vorschlagen.
