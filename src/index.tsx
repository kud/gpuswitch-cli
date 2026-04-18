#!/usr/bin/env node
import { render } from "ink"
import React from "react"
import { App } from "./app.js"
import { type GpuMode, applyMode, currentMode } from "./gpu.js"

const MODES = ["integrated", "discrete", "auto"] as const
const command = process.argv[2]

const headless = (mode: GpuMode): void => {
  const ok = applyMode(mode)
  if (!ok) {
    process.stderr.write(`error: failed to set GPU mode to ${mode}\n`)
    process.exit(1)
  }
  process.stdout.write(`GPU mode set to: ${mode}\n`)
}

const printUsage = (): void => {
  process.stdout.write(
    [
      "usage: gpuswitch [command]",
      "",
      "commands:",
      "  integrated   use integrated GPU only (saves battery)",
      "  discrete     use discrete GPU only (full performance)",
      "  auto         let macOS decide (default behaviour)",
      "  status       print current GPU mode",
      "",
      "run with no arguments to open interactive mode",
      "",
    ].join("\n"),
  )
}

if (!command) {
  let pendingMode: GpuMode | null = null
  const { waitUntilExit } = render(
    <App
      onSelect={(m) => {
        pendingMode = m
      }}
    />,
  )
  await waitUntilExit()
  if (pendingMode) headless(pendingMode)
} else if (command === "status") {
  process.stdout.write(`current GPU mode: ${currentMode()}\n`)
} else if ((MODES as readonly string[]).includes(command)) {
  headless(command as GpuMode)
} else if (command === "--help" || command === "-h") {
  printUsage()
} else {
  process.stderr.write(`unknown command: ${command}\n\n`)
  printUsage()
  process.exit(1)
}
