---
title: The Library
description: How ComicDraft organizes your work into Series, Arcs, Issues, and Graphic Novels.
---

ComicDraft is built around a single idea: writing a comic script should feel like writing, not like wrestling a word processor into shape. The script's structure — pages, panels, character lines, dialog, captions, sound effects — comes from your typing, and the app handles the formatting, numbering, and layout in the background.

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

## Sidebar controls

At the bottom of the sidebar you'll find three controls:

- **🔍 Search** — filter the library by name. Matches recursively, so searching for an issue title also expands the series and arc that contain it.
- **Sort** — order series and graphic novels alphabetically or by most recently modified.
- **+** — the create menu described above.

You can also right-click any item in the sidebar to delete it. On iPad, tap **Edit** in the top right and tick the items you want to remove; a red **Delete N Items** button appears at the bottom.

To copy an issue or graphic novel, select it and choose **File ▸ Duplicate** (⌘D) — see [Working with Files](/guides/files/#duplicate).

## Where your Library lives

By default your Library lives in **iCloud Drive**, in a ComicDraft folder you can open in Finder or the Files app, and it syncs between your Mac and your iPad. You can move it onto the device instead from **Settings ▸ Library Location** (macOS: ⌘, ; iPad: the gear icon in the toolbar).

| Option | What it means |
|--------|---------------|
| **iCloud Drive** | Your scripts sync between Mac and iPad. |
| **On My Device** | Your scripts stay on this device only. The sidebar still syncs between devices, but the scripts themselves do not. |

:::caution[What "On My Device" really does]
Your Library's structure — series, arcs, issue names, cast, outline, notes — syncs separately from the script files themselves. Choose On My Device and the sidebar keeps syncing while the scripts stop, so another device can list an issue whose script isn't there. It's a deliberate option, not a bug, but it's worth knowing before you pick it.
:::

### Moving your Library

Picking a different location opens a confirmation with two ways forward:

- **Move Library** — copies everything to the new location, verifies the copy has landed, switches over, and only then removes the old copy. Keep the app open while it runs; a large Library takes a while, and a progress line tells you it's still working.
- **Change Without Moving** — points ComicDraft at the new location and leaves your scripts where they were. Your Library will look empty there and existing issues will open blank until you move them across. ComicDraft withholds this option when the destination is empty, since choosing it would blank your Library for no reason.

If a move is interrupted — the app is force-quit halfway, the iPad reboots — the next attempt refuses and says so, and your scripts stay safely where they are. A **Discard the Partial Copy and Try Again** button clears the leftovers and runs the move again.

### When iCloud isn't available

If you've chosen iCloud Drive but iCloud can't be reached — not signed in, or iCloud Drive switched off — ComicDraft doesn't fail quietly and it doesn't lose your work. It saves to this device and puts a banner in the sidebar:

> iCloud Drive isn't available. Your scripts are being saved to this device and aren't syncing.

Sign in and turn on iCloud Drive, and the banner clears.
