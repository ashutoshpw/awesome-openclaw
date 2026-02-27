# Awesome OpenClaw [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome tools, libraries, editors, and resources for [OpenClaw](https://github.com/pjasicek/OpenClaw) — the open-source reimplementation of the classic Captain Claw (1997) platformer by Monolith Productions.

OpenClaw is a multiplatform C++ project that faithfully recreates the original Captain Claw engine from scratch, supporting Windows, Linux, macOS, Android, and WebAssembly. It uses assets from the original game archive (`CLAW.REZ`).

---

## Contents

- [Core Engine](#core-engine)
- [Level Editors](#level-editors)
- [Libraries & Dependencies](#libraries--dependencies)
- [Mods & Patches](#mods--patches)
- [Community Resources](#community-resources)
- [Video Tutorials](#video-tutorials)
- [Speedrunning](#speedrunning)
- [Archive & Preservation](#archive--preservation)
- [Related Projects & Forks](#related-projects--forks)

---

## Core Engine

- **[OpenClaw](https://github.com/pjasicek/OpenClaw)** — The main open-source C++ reimplementation of Captain Claw (1997). Supports Windows, Linux, macOS, Android, and Emscripten/WebAssembly. Actively maintained with 400+ GitHub stars. Includes a built-in GUI launcher (`ClawLauncher`) for configuring video, audio, and assets.

## Level Editors

- **[WapMap](https://github.com/Zax37/WapMap)** — The most advanced and actively maintained level editor for Captain Claw. Originally developed by kijanek6 in 2010–2013, revived and significantly expanded by Zax37. Supports WAP32 file editing for Claw, Gruntz, and Get Medieval maps. Latest release: v0.5.0 (January 2026).
- **WapWorld** — The original level editor shipped with Captain Claw. Limited in scope but historically significant for level design.
- **[ClawEdit](https://archive.org/details/ClawEdit)** — The official but unsupported map editor released by Monolith Productions. Preserved on the Internet Archive for retro enthusiasts.

## Libraries & Dependencies

- **[libwap](https://github.com/pjasicek/OpenClaw/tree/master/libwap)** — A C++ library (part of OpenClaw) for reading and writing the WAP32 file format used by Captain Claw levels and assets. Includes a comprehensive test suite (`libwap_tests`).
- **[SDL2](https://www.libsdl.org/)** — Used by OpenClaw for graphics, input, font, and audio (SDL2, SDL2_Image, SDL2_TTF, SDL2_Mixer, SDL2_Gfx).
- **[Box2D](https://box2d.org/)** — Physics simulation library integrated into OpenClaw for collision detection and rigid-body dynamics.
- **[TinyXML](https://github.com/leethomason/tinyxml2)** — XML parsing library used for OpenClaw's data-driven configuration and level scripting.
- **[libsigc++](https://libsigcplusplus.github.io/libsigcplusplus/)** — Signals and slots library used internally by OpenClaw for event-driven architecture.
- **[HGE (Haaf's Game Engine)](https://github.com/Zax37/hge)** — Modified version used as the rendering backend for WapMap.

## Mods & Patches

- **CrazyHook** — A popular community mod for Captain Claw that improves compatibility with Windows 10/11, adds WASD controls, bug fixes, and MIDI music support. Distributed as part of the recommended modern Claw release package (v1.4.5.4). Available from [The Claw Recluse](https://captainclaw.net/en/downloads.html).
- **cnc-ddraw** — A DirectDraw wrapper used alongside CrazyHook to improve graphics compatibility on modern systems.
- **Community Level Pack** — A massive compilation of 600+ community-created custom levels, available from [The Claw Recluse](https://captainclaw.net/en/clevels.html).

## Community Resources

- **[The Claw Recluse](https://captainclaw.net/en/)** — The largest and most comprehensive Captain Claw fansite. Hosts downloads (game, patches, mods, editors), 600+ custom levels, guides, community news, and an active Discord server.
- **[The Claw Museum](https://captainclaw.net/en/museum.html)** — A narrative archive of player stories, fan art, game history, and community memories — maintained as a legacy project.
- **[Captain Claw on ModDB](https://www.moddb.com/games/captain-claw)** — Hosts downloads for the game, mods, community-created level packs, and modding tools.
- **[Captain Claw on VOGONS](https://www.vogons.org/viewtopic.php?t=91074)** — Discussion and help for running Captain Claw on modern hardware, including DOSBox and native solutions.
- **[OpenClaw on WebPRO News](https://www.webpronews.com/openclaw-the-open-source-resurrection-of-a-1990s-platformer-that-deserves-more-attention/)** — In-depth feature article on the OpenClaw project and its significance for classic game preservation.
- **[Claw Community Discord](https://discord.com/invite/eERu5uF)** — The primary real-time community hub for Captain Claw players, modders, speedrunners, and OpenClaw contributors.

## Video Tutorials

- **[OpenClaw Level 1 Playthrough](https://www.youtube.com/watch?v=ikXQNV_aw68)** — Official playthrough of the OpenClaw engine running Captain Claw Level 1, showcasing engine accuracy.
- **[WapMap Tutorial — Part 1](https://www.youtube.com/watch?v=9Hx90G-HD1M)** — Step-by-step guide to installing WapMap and creating custom Captain Claw levels (by rengagamingz).

## Speedrunning

- **[Captain Claw on Speedrun.com](https://www.speedrun.com/claw)** — Official leaderboard for Captain Claw speedruns, with categories including Any% and individual level runs.

## Archive & Preservation

- **[ClawEdit on Internet Archive](https://archive.org/details/ClawEdit)** — Preserved copy of the official Monolith Productions level editor (v1.0), free to download.
- **[OpenClaw Releases](https://github.com/pjasicek/OpenClaw/releases)** — Pre-compiled binaries for Windows and other platforms, maintained alongside the source repository.

## Related Projects & Forks

- **[gmh5225/Game-OpenClaw](https://github.com/gmh5225/Game-OpenClaw)** — A fork of OpenClaw maintained for reference and archival purposes.
- **[Emscripten SDK](https://emscripten.org/)** — The toolchain used to compile OpenClaw to WebAssembly, enabling the game to run in modern web browsers without plugins.

---

## Contributing

Contributions welcome! Please submit a pull request or open an issue to add new tools, resources, or projects to this list. Ensure all entries are directly related to OpenClaw or the Captain Claw community.

---

*Last updated: February 2026*