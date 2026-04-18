import { Box, Text, useInput, useApp } from "ink"
import React, { useState } from "react"
import { type GpuMode, currentMode } from "./gpu.js"

const MODES: GpuMode[] = ["integrated", "discrete", "auto"]

const MODE_DESC: Record<GpuMode, string> = {
  integrated: "integrated GPU only — best battery life",
  discrete: "discrete GPU only — full performance",
  auto: "let macOS decide automatically",
}

type Props = {
  onSelect: (mode: GpuMode) => void
}

export const App = ({ onSelect }: Props) => {
  const { exit } = useApp()
  const initial = currentMode()
  const [selected, setSelected] = useState<number>(
    initial === "unknown" ? 0 : MODES.indexOf(initial as GpuMode),
  )

  useInput((input, key) => {
    if (key.upArrow) {
      setSelected((s) => (s === 0 ? MODES.length - 1 : s - 1))
    } else if (key.downArrow) {
      setSelected((s) => (s === MODES.length - 1 ? 0 : s + 1))
    } else if (key.return) {
      onSelect(MODES[selected])
      exit()
    } else if (input === "q" || key.escape) {
      exit()
    }
  })

  return (
    <Box flexDirection="column" padding={1}>
      <Text bold>GPU Mode</Text>
      <Text dimColor>current: {initial}</Text>
      <Box marginTop={1} flexDirection="column">
        {MODES.map((mode, i) => (
          <Box key={mode}>
            <Text color={i === selected ? "cyan" : undefined}>
              {i === selected ? "❯ " : "  "}
              <Text bold={i === selected}>{mode}</Text>
              {"  "}
              <Text dimColor>{MODE_DESC[mode]}</Text>
            </Text>
          </Box>
        ))}
      </Box>
      <Box marginTop={1}>
        <Text dimColor>↑↓ navigate · enter apply · q quit</Text>
      </Box>
    </Box>
  )
}
