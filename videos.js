// Site video boxes — INTERCHANGEABLE POOL, rotated every 2 hours by the page itself.
// Landscape pool (window.VIDEOS) fills slots 0, 1, 2, 3, 5, 6. The daily system appends new clips to the
// landscape pool, so the mix keeps growing and changing. NOTE: keep a trailing comma on the
// last landscape entry — the daily append adds a new entry after it, and a missing comma
// breaks the whole file (Nov 9, 2026: one missing comma killed every video box).
// To swap any video: put the new mp4 + poster jpg in /assets, then update its entry below.
// SUBS name the project AND its rank + date (verified against editions.json, Nov 14, 2026)
// so a clip never reads stale ("from today's Top 10" days later). The page itself
// rotates only the NEWEST 7 landscape clips (see index.html mountVideos) — older
// entries stay here but stop rotating.
// (Nov 14, 2026: the avatar clips were removed at Ken's order — no person on camera
// anywhere on the site. Slot 3 now takes a landscape clip like every other slot.)
window.VIDEOS = [
  { src: '/assets/vid-reverse.mp4', poster: '/assets/vid-reverse.jpg', title: "Reverse-engineer any app", sub: "morluto/rea — #1 on Nov 9." },
  { src: '/assets/vid-studio.mp4', poster: '/assets/vid-studio.jpg', title: "A free studio for 600 AI models", sub: "Anil-matcha/Open-Generative-AI — #1 on Nov 7." },
  { src: '/assets/vid-dictation.mp4', poster: '/assets/vid-dictation.jpg', title: 'Dictation that never phones home', sub: "anomalyco/hex — #3 on Nov 9." },
  { src: '/assets/vid-memory.mp4', poster: '/assets/vid-memory.jpg', title: 'An agent that never forgets', sub: "thedotmack/claude-mem — #3 on Nov 8." },
  { src: '/assets/vid-agents.mp4', poster: '/assets/vid-agents.jpg', title: 'A fleet of coding agents, one driver', sub: "stablyai/orca — #5 on Nov 14." },
  { src: '/assets/vid-cine-code.mp4', poster: '/assets/vid-cine-code-poster.jpg', title: 'The open-source constellation', sub: "Thousands of free projects, rising every day." },
  { src: '/assets/vid-cine-forge.mp4', poster: '/assets/vid-cine-forge-poster.jpg', title: 'Forged in the open', sub: "Tomorrow's tools are being built in public, right now." },
  { src: '/assets/vid-pool-2026-11-09.mp4', poster: '/assets/vid-pool-2026-11-09-poster.jpg', title: 'Code, decoded by agents', sub: 'morluto/rea — #1 on Nov 9.' },
  { src: '/assets/vid-pool-2026-11-10.mp4', poster: '/assets/vid-pool-2026-11-10-poster.jpg', title: 'Hunting a username across 400 networks', sub: 'sherlock-project/sherlock — #1 on Nov 10.' },
  { src: '/assets/vid-pool-2026-11-11.mp4', poster: '/assets/vid-pool-2026-11-11-poster.jpg', title: 'A design system opened up', sub: 'meta/astryx — #1 on Nov 11.' },
  { src: '/assets/vid-pool-2026-11-12.mp4', poster: '/assets/vid-pool-2026-11-12-poster.jpg', title: 'A cage for Claude', sub: 'Lee-xeo/Claude-Cage — #1 on Nov 12.' },
  { src: '/assets/vid-pool-2026-11-13.mp4', poster: '/assets/vid-pool-2026-11-13-poster.jpg', title: 'AWS, emulated on your laptop', sub: 'aws/aws-emulator — #1 on Nov 13.' },
  { src: '/assets/vid-pool-2026-11-14.mp4', poster: '/assets/vid-pool-2026-11-14-poster.jpg', title: 'The modern web, taught to your agent', sub: 'GoogleChrome/modern-web-guidance — #1 on Nov 14.' },
  { src: '/assets/vid-pool-2026-11-15.mp4', poster: '/assets/vid-pool-2026-11-15-poster.jpg', title: 'Your agent, finally fluent in the modern web', sub: 'GoogleChrome/modern-web-guidance — #1 on Nov 15.' },
  { src: '/assets/vid-pool-2026-11-16.mp4', poster: '/assets/vid-pool-2026-11-16-poster.jpg', title: 'Your own AI office', sub: 'dream-num/univer — #1 on Nov 16.' },
  { src: '/assets/vid-pool-2026-11-17.mp4', poster: '/assets/vid-pool-2026-11-17-poster.jpg', title: 'Skills that teach your agent new tricks', sub: 'obra/superpowers — #1 on Nov 17.' },
  { src: '/assets/vid-pool-2026-11-18.mp4', poster: '/assets/vid-pool-2026-11-18-poster.jpg', title: 'A battery widget that beat the agents', sub: 'krisgfx9/Wireless-Device-Battery-Monitor — #1 on Nov 18.' },
  { src: '/assets/vid-pool-2026-11-22.mp4', poster: '/assets/vid-pool-2026-11-22-poster.jpg', title: 'A classic game, rebuilt in gold code', sub: 'ItsNotRexed/Leonida — #1 on Nov 22.' },
  { src: '/assets/vid-pool-2026-11-23.mp4', poster: '/assets/vid-pool-2026-11-23-poster.jpg', title: 'GTA 6, rebuilt in gold code', sub: 'ItsNotRexed/Leonida — #1 on Nov 23.' },
];
