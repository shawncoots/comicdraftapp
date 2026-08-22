---
title: Writing a Script
description: The focused script editor, script elements, and how to insert and format each one.
---

Open any Issue or Graphic Novel and the middle of the window becomes the editor. ComicDraft's editor is a single, focused writing surface — there are no rich-text toolbars in your face, just text. Structure emerges as you type.

## Script elements

A comic script is made of a handful of recurring elements. ComicDraft recognizes each one and formats it on the fly:

| Element | What it looks like | When to use |
|---------|-------------------|-------------|
| **Page** | `PAGE-ONE` (bold, underlined, larger) | The start of a new page |
| **Panel** | `PANEL 1` (bold, underlined) | A panel inside a page |
| **Character** | `BATMAN:` (bold, uppercase) | A character heading before dialog |
| **Dialog** | `  I am vengeance.` (indented, no caps) | A character's spoken line |
| **Parenthetical** | `(whispering)` (italic, indented) | A short tone/action note before dialog |
| **Continued** | `(CONT)` | A character whose dialog continues after a beat |
| **Caption** | `CAPTION (BATMAN): The night was cold.` | Narration boxes (optionally character-attributed) |
| **SFX** | `SFX: KRAKOOM!` | A sound effect |
| **Splash** | `PAGE-ONE & PAGE-TWO (SPLASH)` | A two-page spread (auto-collapsed from two PAGE lines) |
| **Note** | `NOTE: Locked tone for issue #3 retcon.` (italic, muted) | Editorial / production notes (excluded from export by default) |

## Inserting elements

You have two equally valid ways to insert any element. Pick whichever feels most natural — they both produce the same result.

### 1. Press a keyboard shortcut

Each element has a dedicated `⌘ + number` shortcut. The cursor lands in the right place to start typing immediately.

| Shortcut | Element | What it inserts |
|----------|---------|-----------------|
| ⌘1 | Page | `PAGE` (renumbers itself) |
| ⌘2 | Panel | `PANEL 1` (renumbers itself per page) |
| ⌘3 | Character | A blank line ready for a name; cast autocomplete pops on first letter |
| ⌘4 | Parenthetical | `(` with cursor inside; Enter closes the paren and drops a dialog line |
| ⌘5 | Continued | `(CONT)` + dialog continuation line |
| ⌘6 | Caption | `CAPTION (` with cursor inside the paren; Enter completes as `CAPTION (NAME):` + dialog line |
| ⌘7 | SFX | `SFX:` + dialog continuation line for the sound text |
| ⌘8 | Splash | Two adjacent `PAGE` lines that auto-collapse to a splash spread |
| ⌘9 | Note | `NOTE: ` with cursor after the space for inline note text |

### 2. Tap the Format Bar

A horizontal **Format Bar** sits at the bottom of the editor with the same nine labels as buttons. Click or tap any label to insert the element at your cursor.

Show or hide the Format Bar with **⌘'** (apostrophe) or the toolbar button (the small bar icon in the top right of the editor).

:::note[Auto-numbering]
Page numbers and panel numbers are managed by the app, not by you. Insert as many PAGEs and PANELs as you want, in any order, and ComicDraft renumbers them sequentially every time. If you delete page 3, the rest renumber automatically. Page numbers are spelled out as words (`PAGE-ONE`, `PAGE-TWO`, …) — a comic convention that prevents ambiguity in scripts that include numbered dialog or counts.
:::

## Writing dialog

After any character heading like `BATMAN:`, press Enter. The cursor lands on the next line indented two spaces — this is the dialog block. Type the line.

```
BATMAN:
  I am vengeance. I am the night.
  I am Batman.
```

Press Enter twice (once for a blank line, once again) to exit the dialog block back to a panel description.

To indicate a parenthetical (tone marker) between the character and the dialog:

```
BATMAN:
  (whispering)
  I am vengeance.
```

Press ⌘4 to start the parenthetical; type the action; hit Enter and ComicDraft closes the paren and indents you for dialog.

For continued dialog after an interruption (a beat, a different speaker, a panel break), press ⌘5:

```
BATMAN:
  First half.
(CONT)
  Second half, after a beat.
```

## Captions

A simple caption uses `CAPTION:` on its own:

```
CAPTION: It was the third night in a row.
```

A caption attributed to a character takes the `CAPTION (NAME):` form. Press ⌘6 to insert the open paren, type the character name (autocomplete will offer matches), then Enter — ComicDraft formats the rest:

```
CAPTION (BATMAN):
  The third night. No leads.
```

## Sound effects

Press ⌘7. ComicDraft inserts `SFX:` and drops you onto an indented continuation line where you type the sound:

```
SFX:
  KRAKOOM!
```

## Splash pages and double-page spreads

Press ⌘8. ComicDraft inserts two adjacent PAGE lines, which collapse to a single splash heading:

```
PAGE-ONE & PAGE-TWO (SPLASH)
Wide establishing shot of Gotham at midnight…
```

The numbering picks up correctly on the next page.

## Notes and editorial

Need to leave a note for an editor, artist, or future-you that **shouldn't** appear in the exported script? Press ⌘9:

```
NOTE: Revised after Issue #3 retcon — Bruce's father uses the cane in this scene.
```

Notes are italicized and muted in the editor. They're excluded from PDF/DOCX/TXT exports by default.

## Off-page sections

For anything longer than a one-line `NOTE:` — a synopsis, a pitch, a running list of continuity you keep checking — start a line with `#` or `##`:

```
# Continuity

Bruce's father uses the cane in every flashback from Issue #3 on.
Gordon does not know about the cave yet.
```

Everything from that heading onward is off-page: styled as a heading and body text, never counted as script content, and never exported. The section closes at the next page header, panel header, or a `---` separator on its own line — so you can drop one between scenes and pick the script straight back up.

Character-looking lines inside an off-page section stay off-page. Writing `BATMAN:` in a note doesn't add Batman to your cast.
