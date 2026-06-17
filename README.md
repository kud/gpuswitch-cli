<div align="center">

<img src="assets/icon.png" width="160" alt="gpuswitch icon" />

&nbsp;

&nbsp;

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-%40kud%2Fgpuswitch--cli-CB3837?style=flat-square&logo=npm&logoColor=white)
![Licence](https://img.shields.io/badge/licence-MIT-22C55E?style=flat-square)

**Switch between integrated, discrete, and auto GPU on Intel Macs via pmset**

<a href="https://kud.io/projects/gpuswitch-cli">Website</a> · <a href="https://kud.io/projects/gpuswitch-cli/docs">Documentation</a>

</div>

---

Switch between integrated, discrete, and auto GPU on Intel Macs via `pmset` — a thin, scriptable wrapper with an interactive TUI.

## ✨ Features

- 🖥 **Integrated GPU Mode** — force the Intel iGPU for maximum battery life on long unplugged sessions
- ⚡ **Discrete GPU Mode** — activate the dedicated dGPU for full graphics performance when you need it
- 🤖 **Auto Mode** — restore macOS default behaviour, letting the system switch GPUs dynamically
- 🎨 **Interactive TUI** — arrow-key picker built with Ink/React, shows your current mode at a glance
- 🔋 **Headless Subcommands** — scriptable `integrated|discrete|auto|status` for shell scripts and Raycast
- 🛠 **Zero Config** — thin wrapper around `pmset`, no daemons, no background processes, no setup
- 📦 **Typed & Modern** — strict TypeScript, ESM-only, built with tsup

## 🚀 Install

```bash
npm install -g @kud/gpuswitch-cli
```

## 📖 Documentation

Full usage, options, and examples live on the docs site:

**→ [kud.io/projects/gpuswitch-cli/docs](https://kud.io/projects/gpuswitch-cli/docs)**

## 🔧 Development

```bash
git clone https://github.com/kud/gpuswitch-cli.git
cd gpuswitch-cli
npm install
npm run build
node dist/index.js
```

## License

MIT © [kud](https://github.com/kud)
