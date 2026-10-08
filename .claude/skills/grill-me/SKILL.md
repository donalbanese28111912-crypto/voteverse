---
name: grill-me
description: Interviews the user with focused questions, a few at a time, until Claude fully understands a project, feature, name, or decision. Use when the user says "grill me", "Grill mich", "stell mir Fragen", or wants Claude to clarify requirements before building or writing a prompt.
---

# Grill me

Goal: remove every ambiguity before building. Answer in the user's language (default German).

## Process

1. Name the topic in one line. Check what is already known (conversation, code, notes) and do NOT ask what is already answered.
2. Ask in rounds of 3-5 questions, numbered, short, one decision per question. Use the AskUserQuestion tool for choices with 2-4 clear options; use plain text for open questions.
3. For every question with a trade-off (names, structure, rules), give your recommendation and a one-line reason, so the user can simply say "ja".
4. After each answer round: restate in 1-2 lines what is now decided, then dig into the next gap or contradiction. Point out conflicts in the user's statements directly.
5. Cover, as relevant: purpose and target audience; names and branding; who may do what (roles, limits, rules); data and content needed; screens and flows; money, legal and safety limits; what is demo vs. real; priorities and order of work; what "done" looks like.
6. Stop when no open gaps remain, or the user says stop.

## End

Deliver a compact summary: Decisions (list), Open points (list), Next steps. Offer to turn it into a build prompt or to apply it directly. Save it to a file only if the user asks.
