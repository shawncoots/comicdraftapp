---
title: Characters and the Cast List
description: Managing character names, the cast inspector, autocomplete, and series-level cascading cast.
---

The right-side **Inspector** has four tabs — **Info**, **Outline**, **Cast**, **Notes**. The Cast tab manages the characters who appear in an Issue or Graphic Novel.

## Per-issue cast

Add characters to an issue by clicking **+ Add Character** at the bottom of the Cast tab. Names you type into the script are also added automatically — when ComicDraft sees a new character heading like `JOKER:`, it adds **JOKER** to the issue's cast on save.

## Series-level cast (cascading)

Select a **Series** in the sidebar. The right pane shows a **Series Characters** section. Add a character there — say, `BATMAN` or `ALFRED` — and it cascades to every issue in that series.

When you then open an issue under that series, the Cast tab shows two groups:

1. **Series characters at the top** — muted, no remove button. To remove them, go to the Series.
2. **A divider line.**
3. **Issue-specific characters** — full color, with an `×` to remove just from this issue.

This keeps the recurring cast in one place and lets each issue add guest stars without duplicating the regulars.

## Autocomplete while writing

Type the first letter of a known character on a fresh line, and a small popover appears with matching names. Press ↓/↑ to move through the list, Return or Tab to accept. ComicDraft inserts `NAME:` and drops you into the dialog block.

:::tip[Caption with a character]
Press ⌘6 (or type `CAPTION (` yourself) and the character autocomplete offers your cast for the name inside the parens. Pick one, press Return, and ComicDraft finishes it as `CAPTION (NAME):` with a dialog line below.
:::

Autocomplete works in documents you've opened from outside the Library too — the cast travels inside the `.comicdraft` file, so a collaborator's characters are already there.

## How character names are stored

All character lines in a script are auto-uppercased by the engine (you can type `batman:` or `Batman:` — both become `BATMAN:`). Annotations like `(V.O.)`, `[off]`, `(CONT)` are recognized but not added as separate characters in the cast.

**CAPTION** and **SFX** are formatting, not cast. They behave like character headings while you're typing — Return drops you onto a dialog line the same way — but they never enter the cast list or the autocomplete dropdown. Neither does a name written inside an off-page section: `BATMAN:` in a `#` note is a note, not a cast member.

ComicDraft also teaches your system spell-checker the character names you add, so they stop getting red-underlined as misspellings.

:::caution[macOS spell-check scope]
On macOS, learned character names are added to your user-wide spelling dictionary (visible to every Mac app). Fictional comic names are fine; **don't put real-world PII or secrets through the cast field** if you share your Mac. On iPad/iOS the learned list is per-app and sandboxed.
:::
