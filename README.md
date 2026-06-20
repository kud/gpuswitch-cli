<div align="center">

<img src="assets/icon.png" width="128" alt="gpuswitch-cli icon" />

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![npm](https://img.shields.io/npm/v/%40kud%2Fgpuswitch-cli?style=flat-square&color=CB3837)
![MIT](https://img.shields.io/badge/licence-MIT-22C55E?style=flat-square)

**Switch between integrated, discrete, and auto GPU on Intel Macs via pmset**

<a href="https://kud.io/projects/gpuswitch-cli">Website</a> · <a href="https://kud.io/projects/gpuswitch-cli/docs">Documentation</a>

</div>

## Features

- **Three GPU modes** — switch between `integrated`, `discrete`, and `auto` with a single command or keystroke.
- **Interactive TUI** — run `gpuswitch` with no arguments to open a keyboard-driven mode picker built with Ink.
- **Headless scripting** — pass a mode directly (`gpuswitch integrated`) for use in scripts, aliases, and automation.
- **Status check** — `gpuswitch status` reads `pmset -g` and prints the active mode without requiring elevated privileges.
- **Persistent changes** — mode switches apply immediately and survive reboots until you switch again.

## Install

```sh
npm install -g @kud/gpuswitch-cli
```

## Usage

```console
$ gpuswitch --help
usage: gpuswitch [command]

commands:
  integrated   use integrated GPU only (saves battery)
  discrete     use discrete GPU only (full performance)
  auto         let macOS decide (default behaviour)
  status       print current GPU mode

run with no arguments to open interactive mode

$ gpuswitch status
current GPU mode: auto

$ gpuswitch integrated
GPU mode set to: integrated

$ gpuswitch discrete
GPU mode set to: discrete

$ gpuswitch auto
GPU mode set to: auto
```

## Development

```sh
git clone https://github.com/kud/gpuswitch-cli.git
cd gpuswitch-cli
npm install
npm run dev
```

📚 **Full documentation → [gpuswitch-cli/docs](https://kud.io/projects/gpuswitch-cli/docs)**
