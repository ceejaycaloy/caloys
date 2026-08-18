# CC Visuals — Portfolio Site

## Purpose & Target User

CC Visuals is a personal portfolio and lead-generation site for Carlo Cordero, a freelance photographer/videographer in M'lang, North Cotabato. It targets prospective clients (individuals, couples, small businesses, schools) browsing on mobile or desktop to judge his work quality and reach out to book a shoot.

## Heuristic Evaluation

| Heuristic | Where it's applied |
|---|---|
| **Visibility of system status** | `.nav.scrolled` changes background/shadow on scroll so users always know where they are on the page; `:focus-visible` gives a clear outline state for keyboard nav; hover states on buttons, service cards, and social pills confirm interactivity. |
| **Match between system and the real world** | The "viewfinder"/focus-bracket motif (`.bracket` elements) borrows a photographer's own framing device, so the visual language matches the photography domain rather than generic UI chrome. |
| **User control and freedom** | The lightbox (`#lightbox`) can be closed via the × button, clicking the overlay, or the Escape key — three ways out, no dead ends. |
| **Consistency and standards** | Section pattern is consistent throughout: `.eyebrow` + `.section-title` + `.section-sub`, same card styling (`.service-col`, `.equipment-col`, `.skill-col`) reused across Services, Equipment, and Skills sections. |
| **Recognition rather than recall** | Sticky nav (`#nav`) with all section anchors (`#photography`, `#services`, `#contact`, etc.) means users never have to remember where a section was or scroll to find it. |
| **Flexibility and efficiency of use** | Single-page anchor navigation lets users jump straight to what they care about (e.g., straight to Contact) without scrolling through everything; CTA buttons ("View My Work," "Let's Talk") shortcut to relevant sections from multiple entry points. |
| **Aesthetic and minimalist design** | Restrained 3-color palette (forest green, cream/gold, burnt orange used sparingly per the CSS comments) and generous whitespace (`--container: 1180px`, `96px` section padding) keep photography as the visual focus rather than competing UI. |

## What I'd Improve With More Time

The gallery and video items currently show a text placeholder (`[ ADD PHOTO ]` / `[ ADD VIDEO ]`) when `img`/`embedUrl` is null — several categories (Portraits, Events, Corporate, both videos) have no real media yet based on the project's asset folder. This violates *visibility of system status* and *aesthetic design* simultaneously: a portfolio site's core job is to prove competence visually, so empty-looking galleries undercut the client's trust before they even reach Services or Contact. I'd prioritize populating real images/embeds (or hiding empty categories entirely) over any other polish, since it directly affects conversion — a client won't book someone whose "portfolio" looks unfinished.
