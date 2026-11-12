// Site video boxes — INTERCHANGEABLE POOLS, rotated every 2 hours by the page itself.
// Landscape pool (window.VIDEOS) fills slots 0, 1, 2, 5, 6. Avatar pool (window.AVATAR_VIDEOS)
// fills ONE slot only (slot 3, one video of Ken, NO poster still). The daily system appends new clips to the
// landscape pool, so the mix keeps growing and changing. NOTE: keep a trailing comma on the
// last landscape entry — the daily append adds a new entry after it, and a missing comma
// breaks the whole file (Nov 9, 2026: one missing comma killed every video box).
// To swap any video: put the new mp4 + poster jpg in /assets, then update its entry below.
window.VIDEOS = [
  { src: '/assets/vid-reverse.mp4', poster: '/assets/vid-reverse.jpg', title: "Reverse-engineer any app", sub: "rea — the #1 pick in today's Top 10." },
  { src: '/assets/vid-studio.mp4', poster: '/assets/vid-studio.jpg', title: "A free studio for 600 AI models", sub: "Open-Generative-AI — a recent Top 10 pick." },
  { src: '/assets/vid-dictation.mp4', poster: '/assets/vid-dictation.jpg', title: 'Dictation that never phones home', sub: "Hex — from the rankings archive." },
  { src: '/assets/vid-memory.mp4', poster: '/assets/vid-memory.jpg', title: 'An agent that never forgets', sub: "claude-mem — #3 in today's Top 10." },
  { src: '/assets/vid-agents.mp4', poster: '/assets/vid-agents.jpg', title: 'A fleet of coding agents, one driver', sub: "Orca — from the rankings archive." },
  { src: '/assets/vid-cine-code.mp4', poster: '/assets/vid-cine-code-poster.jpg', title: 'The open-source constellation', sub: "Thousands of free projects, rising every day." },
  { src: '/assets/vid-cine-forge.mp4', poster: '/assets/vid-cine-forge-poster.jpg', title: 'Forged in the open', sub: "Tomorrow's tools are being built in public, right now." },
  { src: '/assets/vid-pool-2026-11-09.mp4', poster: '/assets/vid-pool-2026-11-09-poster.jpg', title: 'Code, decoded by agents', sub: 'rea — from today\'s Top 10.' },
  { src: '/assets/vid-pool-2026-11-10.mp4', poster: '/assets/vid-pool-2026-11-10-poster.jpg', title: 'Hunting a username across 400 networks', sub: 'sherlock-project/sherlock — from today\'s Top 10.' },
  { src: '/assets/vid-pool-2026-11-11.mp4', poster: '/assets/vid-pool-2026-11-11-poster.jpg', title: 'A design system opened up', sub: 'meta/astryx — from today\'s Top 10.' },
  { src: '/assets/vid-pool-2026-11-12.mp4', poster: '/assets/vid-pool-2026-11-12-poster.jpg', title: 'A cage for Claude', sub: 'Lee-xeo/Claude-Cage — from today's Top 10.' },
];
window.AVATAR_VIDEOS = [
  { src: '/assets/vid-avatar-desk.mp4', poster: '/assets/vid-avatar-desk-poster.jpg', title: 'At the desk', sub: "Inside the Operator Suite office — putting today's rankings together." },
  { src: '/assets/vid-avatar-papers.mp4', poster: '/assets/vid-avatar-papers-poster.jpg', title: 'Going through the papers', sub: "Reading the day's open-source news before it becomes the Top 10." },
  { src: '/assets/vid-avatar-headset.mp4', poster: '/assets/vid-avatar-headset-poster.jpg', title: 'On a call', sub: "Headset on — talking tools, rankings, and what's next." }
];
