---
title: Writing a Comic Script in ComicDraft
description: A walkthrough of how to use ComicDraft to plan, write, format, and export a comic book script — from your first PAGE seed to a finished PDF you can send to an artist or letterer.
---

ComicDraft is built around a single idea: writing a comic script should feel like writing, not like wrestling a word processor into shape. The script's structure — pages, panels, character lines, dialog, captions, sound effects — comes from your typing, and the app handles the formatting, numbering, and layout in the background.

This guide walks through every feature in roughly the order a writer would meet it, from creating a new project to exporting a draft for review.

## The library: Series, Arcs, Issues, Graphic Novels

The left sidebar is your library. ComicDraft organizes work into four kinds of entities:

| Type | When to use it |
|------|---------------|
| **Series** | A long-running title (e.g. _Batman_, _Saga_). Holds arcs and standalone issues. Volume and starting-issue numbers live here. |
| **Arc** | A multi-issue storyline inside a series. Optional — issues can live directly under a series if you don't track arcs. |
| **Issue** | A single comic book issue. The script lives here, plus issue-specific outline, cast, and notes. |
| **Graphic Novel** | A standalone book outside the Series/Arc/Issue tree. Same script-writing surface as an issue. |

To create any of these, use the **+ button** at the bottom of the sidebar — it opens a menu with New Series / New Arc / New Issue / New Graphic Novel — or use the keyboard shortcuts from the **File menu**:

| Action | Shortcut |
|--------|----------|
| New Series | ⇧⌘S |
| New Arc… | ⇧⌘A |
| New Issue… | ⇧⌘I |
| New Graphic Novel | ⇧⌘N |

:::tip
Arcs and Issues open a small sheet that lets you pick the parent series and number. New Series and New Graphic Novel create the item immediately and drop you into editing the title.
:::

### Sidebar controls

At the bottom of the sidebar you'll find three controls:

- **🔍 Search** — filter the library by name. Matches recursively, so searching for an issue title also expands the series and arc that contain it.
- **Sort** — order series and graphic novels alphabetically or by most recently modified.
- **+** — the create menu described above.

You can also right-click any item in the sidebar to delete it. On iPad, tap **Edit** in the top right and tick the items you want to remove; a red **Delete N Items** button appears at the bottom.

## Writing a script

Open any Issue or Graphic Novel and the middle of the window becomes the editor. ComicDraft's editor is a single, focused writing surface — there are no rich-text toolbars in your face, just text. Structure emerges as you type.

### Script elements

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

### Inserting elements

You have three equally valid ways to insert any element. Pick whichever feels most natural — they all produce the same result.

#### 1. Type the seed

Type the first character or word of the element and press **Enter**. ComicDraft expands it.

- `P` then Enter → `PAGE-ONE`
- `p` then Enter → `PANEL 1`

After a character heading like `BATMAN:`, hitting Enter automatically drops you into a dialog-indented continuation line.

#### 2. Press a keyboard shortcut

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

#### 3. Tap the Format Bar

A horizontal **Format Bar** sits at the bottom of the editor with the same nine labels as buttons. Click or tap any label to insert the element at your cursor.

Show or hide the Format Bar with **⌘'** (apostrophe) or the toolbar button (the small bar icon in the top right of the editor).

:::note[Auto-numbering]
Page numbers and panel numbers are managed by the app, not by you. Insert as many PAGEs and PANELs as you want, in any order, and ComicDraft renumbers them sequentially every time. If you delete page 3, the rest renumber automatically. Page numbers are spelled out as words (`PAGE-ONE`, `PAGE-TWO`, …) — a comic convention that prevents ambiguity in scripts that include numbered dialog or counts.
:::

### Writing dialog

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

### Captions

A simple caption uses `CAPTION:` on its own:

```
CAPTION: It was the third night in a row.
```

A caption attributed to a character takes the `CAPTION (NAME):` form. Press ⌘6 to insert the open paren, type the character name (autocomplete will offer matches), then Enter — ComicDraft formats the rest:

```
CAPTION (BATMAN):
  The third night. No leads.
```

### Sound effects

Press ⌘7. ComicDraft inserts `SFX:` and drops you onto an indented continuation line where you type the sound:

```
SFX:
  KRAKOOM!
```

### Splash pages and double-page spreads

Press ⌘8. ComicDraft inserts two adjacent PAGE lines, which collapse to a single splash heading:

```
PAGE-ONE & PAGE-TWO (SPLASH)
Wide establishing shot of Gotham at midnight…
```

The numbering picks up correctly on the next page.

### Notes and editorial

Need to leave a note for an editor, artist, or future-you that **shouldn't** appear in the exported script? Press ⌘9:

```
NOTE: Revised after Issue #3 retcon — Bruce's father uses the cane in this scene.
```

Notes are italicized and muted in the editor. They're excluded from PDF/DOCX/TXT exports by default.

## Inline formatting

Inside dialog, captions, or descriptions, you can emphasize words for the letterer:

| Shortcut | Effect |
|----------|--------|
| ⌘B | **Bold** |
| ⌘I | _Italic_ |
| ⇧⌘U | ~~Strikethrough~~ |

These work like any other word processor: select the text, press the shortcut, the formatting toggles.

## Characters and the cast list

The right-side **Inspector** has four tabs — **Info**, **Outline**, **Cast**, **Notes**. The Cast tab manages the characters who appear in an Issue or Graphic Novel.

### Per-issue cast

Add characters to an issue by clicking **+ Add Character** at the bottom of the Cast tab. Names you type into the script are also added automatically — when ComicDraft sees a new character heading like `JOKER:`, it adds **JOKER** to the issue's cast on save.

### Series-level cast (cascading)

Select a **Series** in the sidebar. The right pane shows a **Series Characters** section. Add a character there — say, `BATMAN` or `ALFRED` — and it cascades to every issue in that series.

When you then open an issue under that series, the Cast tab shows two groups:

1. **Series characters at the top** — muted, no remove button. To remove them, go to the Series.
2. **A divider line.**
3. **Issue-specific characters** — full color, with an `×` to remove just from this issue.

This keeps the recurring cast in one place and lets each issue add guest stars without duplicating the regulars.

### Autocomplete while writing

Type the first letter of a known character on a fresh line, and a small popover appears with matching names. Press ↓/↑ to move through the list, Return or Tab to accept. ComicDraft inserts `NAME:` and drops you into the dialog block.

The autocomplete also surfaces **Caption** and **SFX** as suggestions if you type `C` or `S` — useful for inline caption/SFX without using the keyboard shortcut.

:::tip[Caption with a character]
Typing `Caption` and pressing Return inserts `CAPTION (` and offers the character autocomplete again. Pick a name, press Return, and ComicDraft finishes as `CAPTION (NAME):` with a dialog line below.
:::

### How character names are stored

All character lines in a script are auto-uppercased by the engine (you can type `batman:` or `Batman:` — both become `BATMAN:`). Annotations like `(V.O.)`, `[off]`, `(CONT)` are recognized but not added as separate characters in the cast.

ComicDraft also teaches your system spell-checker the character names you add, so they stop getting red-underlined as misspellings.

:::caution[macOS spell-check scope]
On macOS, learned character names are added to your user-wide spelling dictionary (visible to every Mac app). Fictional comic names are fine; **don't put real-world PII or secrets through the cast field** if you share your Mac. On iPad/iOS the learned list is per-app and sandboxed.
:::

## Outline (Beats)

The **Outline** tab in the inspector is a lightweight 3-act beat tracker. Add beats with **+ Add Beat**; each one has a title, an expandable description, and a status (Idea / Drafting / Done). Drag to reorder.

The outline is for your reference; it doesn't appear in the exported script unless you specifically include it via export options.

## Notes (per-issue)

The **Notes** tab in the inspector holds free-form notes about the issue — themes, callbacks, things you want to remember. There's also a **Title Page Text** field where you can put any cover-page text you want for this issue specifically.

The bottom of the Notes tab shows the **Draft History** — every time you export the script, ComicDraft records the draft number, date, and format.

## Settings (author info)

Open **Settings** (macOS: ⌘, ; iPad: gear icon in the toolbar) and fill in:

- **Author Name** — appears on the cover page byline as "Written by …"
- **Contact Info** — appears on the cover page bottom-left
- **Editor Font Size** — adjust with ⌘+ / ⌘- / ⌘0 (Bigger / Smaller / Normal)
- **Appearance** — Light, Dark, or System

Author and contact info are used as defaults for every issue. Individual issues can override via the Info tab.

## Preview and Export

When you're ready to see how the script will look on the page, hit **Preview** in the toolbar or **⇧⌘P**. The middle pane switches to a read-only view showing each page formatted as it will appear in the exported PDF — cover page, running headers, page numbers, panel and dialog formatting.

Tweak how the preview renders via the **format options popover** (font family, font size, dialog positioning, panel description layout). The same options drive the actual export.

### Exporting

The export menu has three formats:

| Format | Where it works | What's in it |
|--------|----------------|--------------|
| **PDF** | macOS + iPad | Full script with cover page, running headers, page numbers. Default format. |
| **DOCX** | macOS only | Microsoft Word `.docx` package. Editable. |
| **TXT** | macOS + iPad | Plain text. No formatting; just the script content. |

Hit **⇧⌘E** or the export button (⬆ icon in the toolbar) to bring up the **Export Sheet**. Choose your format, configure the options (whether to include Notes, panel description layout, font), and click **Export**.

On macOS, an NSSavePanel opens — pick where to save. On iPad, the file is written to a temp directory and you get a Share Sheet to send it via Mail, Files, AirDrop, etc.

### Drafts

Every export creates a new **Draft N** entry on the issue. The draft number auto-increments, the date is recorded, and (optionally) a snapshot of the script at that moment is preserved. You can see your draft history in the inspector's Notes tab.

### Printing

⌘P opens the standard system print dialog with the formatted script. Useful for marking up paper drafts.

## Full keyboard shortcut reference

### File / library
| Shortcut | Action |
|----------|--------|
| ⇧⌘S | New Series |
| ⇧⌘A | New Arc… |
| ⇧⌘I | New Issue… |
| ⇧⌘N | New Graphic Novel |
| ⌘P | Print |
| ⇧⌘E | Export… |

### View
| Shortcut | Action |
|----------|--------|
| ⌘[ | Show / Hide Sidebar |
| ⌘] | Show / Hide Inspector |
| ⌘\ | Show / Hide Both Panels |
| ⌘' | Show / Hide Format Bar |
| ⇧⌘P | Show / Hide Preview |
| ⌃⌘F | Enter Full Screen (macOS only) |
| ⌘+ | Make Text Bigger |
| ⌘0 | Make Text Normal Size |
| ⌘- | Make Text Smaller |

### Inline formatting
| Shortcut | Action |
|----------|--------|
| ⌘B | Bold |
| ⌘I | Italic |
| ⇧⌘U | Strikethrough |

### Script elements
| Shortcut | Element |
|----------|---------|
| ⌘1 | Page |
| ⌘2 | Panel |
| ⌘3 | Character |
| ⌘4 | Parenthetical |
| ⌘5 | Continued |
| ⌘6 | Caption |
| ⌘7 | SFX |
| ⌘8 | Splash |
| ⌘9 | Note |

### Element seeds (alternative)
| Type then press | Result |
|-----------------|--------|
| `P` + Enter | PAGE |
| `p` + Enter | PANEL |
| `Caption` + accept autocomplete | CAPTION (…) |
| `SFX` + accept autocomplete | SFX: |

## Tips and conventions

- **Numbering is automatic.** Don't number pages or panels yourself — the engine does it. Type `P` and Enter; the page becomes `PAGE-ONE`. Type another; it becomes `PAGE-TWO`.
- **Two PAGEs in a row = splash.** Press ⌘8 or type two `P+Enter`s back to back — ComicDraft collapses them into a `PAGE-X & PAGE-Y (SPLASH)` heading.
- **Reorder freely.** Cut and paste pages around; renumbering happens on the next keystroke.
- **Character names are uppercased automatically.** Type lowercase if you want — the engine handles it.
- **Series characters once, issues forever.** Put recurring characters at the Series level and they appear in every issue's cast without re-entering.
- **Notes don't ship.** Use `NOTE:` (⌘9) liberally for editorial reminders; they're stripped from exports by default.
- **The Format Bar is optional.** Power users hide it (⌘') and rely on keyboard shortcuts. Touch users on iPad keep it visible.

## Cross-platform notes

ComicDraft runs on **macOS** and **iPad**. The feature surface is the same on both — same shortcuts (some iPad differences below), same export formats (except DOCX is macOS-only), same library, same documents.

| Capability | macOS | iPad |
|------------|-------|------|
| All ⌘1-9 element shortcuts | ✓ | ✓ (with hardware keyboard) |
| Format Bar | ✓ | ✓ |
| Inline formatting shortcuts | ✓ | ✓ (with hardware keyboard) |
| PDF export | ✓ | ✓ |
| DOCX export | ✓ | — |
| TXT export | ✓ | ✓ |
| Spell check | ✓ (system-wide learned dictionary) | ✓ (per-app learned list) |
| Menu bar | ✓ | ✓ (hold ⌘ to see shortcuts, or attach a hardware keyboard) |

Files created on one platform open transparently on the other.

---

That's the whole writing surface. Open an issue, type `P`, hit Enter, and you're in business.
