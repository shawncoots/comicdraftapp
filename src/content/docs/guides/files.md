---
title: Working with Files
description: Opening .comicdraft documents from outside the Library, saving, duplicating, and moving them in.
---

Every script ComicDraft writes is a `.comicdraft` document — a package (a folder that macOS and iPadOS treat as a single file) holding the script, its metadata, cast, outline, and notes. The documents in your Library live inside it and are managed for you.

This page is about the other kind: a `.comicdraft` file that lives somewhere else — a collaborator's file in your Downloads folder, a script on a USB drive, something in a shared folder.

## Opening a document

| How | macOS | iPad |
|-----|-------|------|
| **File ▸ Open…** (⌘O) | ✓ | ✓ |
| Double-click in Finder | ✓ | — |
| Tap in the Files app, or **Open With ▸ ComicDraft** | — | ✓ |

Whichever route you take, ComicDraft edits the original **in place**, where it sits. It does not import a copy.

:::note
If the file you open is already part of your Library, ComicDraft just selects the Library item instead of opening a second copy of it.
:::

## The OPEN DOCUMENTS section

An externally-opened document appears in an **OPEN DOCUMENTS** section at the top of the sidebar, above SERIES. Select it and you get the full editing surface — the same editor, inspector, preview, print, and export you get for a Library issue. Character autocomplete works too; the cast travels inside the document, so a collaborator's characters are there.

A banner above the editor reminds you where you are:

> You're editing a document outside the ComicDraft Library. You can continue editing, or you can move it to the Library.

It carries a **Move to Library** button.

:::caution[Open documents are session-only]
The OPEN DOCUMENTS list is not remembered between launches. Quit ComicDraft and it's empty next time — the file itself is untouched, you simply open it again. Anything you want the Library to keep track of belongs in the Library.
:::

## The File menu

| Action | Shortcut | What it does |
|--------|----------|--------------|
| **Open…** | ⌘O | Pick a `.comicdraft` document from anywhere on disk or in iCloud Drive. |
| **Close** | ⌘W | Closes the selected open document, saving it first. |
| **Save** | ⌘S | Writes the document to disk immediately. |
| **Duplicate** | ⌘D | Makes a copy — see below. |
| **Show in Finder** (macOS) / **Share…** (iPad) | — | Reveals the document in Finder, or opens a share sheet. |
| **Move to Library** | — | Imports the open document into your Library. |

Editing autosaves as you go, so **Save** is there for when you want to be certain — and unlike autosave, it tells you outright if the write fails.

**Close** is deliberately overloaded on macOS: with an open document selected it closes the document, and with a Library item selected it closes the window, the way ⌘W normally does. iPad has no window to fall back on, so the item is simply disabled unless an open document is selected.

:::note[iPad has no Finder]
There's no supported way for an app to reveal a file in the Files app, so **Show in Finder** becomes **Share…** on iPad. It hands you the same document through the standard share sheet — AirDrop it, mail it, or save it somewhere in Files.
:::

### Duplicate

For a Library **Issue** or **Graphic Novel**, Duplicate creates a new item beside the original with its own copy of the script. A duplicated issue takes the next free number in its series rather than colliding with the original — duplicate `#3` in a series that runs to `#7` and you get `#8`. Gaps aren't filled on purpose: a comic's numbering is a sequence readers follow, so appending is less surprising.

For an **open document**, Duplicate asks where to put the copy — a save panel on macOS, the document picker on iPad — and then opens the copy for you. It has to ask: opening a file grants ComicDraft access to that file only, not to the folder around it, so there's no permission to drop a sibling copy next to it unasked.

### Move to Library

**Move to Library** imports the open document into your Library and selects it there. Where it lands:

- If the document names a series you already have, it joins that series.
- Otherwise ComicDraft creates the series, carrying over the volume number recorded in the file.
- A document with no series of its own gets a series named after the document, so unrelated one-off files stay separate instead of pooling under one untitled heading.

## When a document can't be saved

Two situations are called out rather than handled silently:

- **The original file is gone** — deleted or moved in Finder while it was open. The banner changes to say so, and your changes are still open in the editor. Use **Move to Library** to keep them.
- **The document was created by a newer version of ComicDraft.** It opens read-only, because saving would quietly downgrade the file. **Move to Library** still works if you need your edits somewhere safe.

In both cases ⌘W refuses to close the document rather than discarding your changes, and tells you what to do instead.
