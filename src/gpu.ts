import { spawnSync } from "node:child_process"

export type GpuMode = "integrated" | "discrete" | "auto"

export const GPU_VALUES: Record<GpuMode, number> = {
  integrated: 0,
  discrete: 1,
  auto: 2,
}

export const MODE_LABELS: Record<number, GpuMode> = {
  0: "integrated",
  1: "discrete",
  2: "auto",
}

export const currentMode = (): GpuMode | "unknown" => {
  const result = spawnSync("pmset", ["-g"], { encoding: "utf8" })
  const match = result.stdout.match(/gpuswitch\s+(\d)/)
  if (!match) return "unknown"
  return MODE_LABELS[Number(match[1])] ?? "unknown"
}

export const applyMode = (mode: GpuMode): boolean => {
  const result = spawnSync(
    "sudo",
    ["pmset", "-a", "gpuswitch", String(GPU_VALUES[mode])],
    { stdio: "inherit" },
  )
  return result.status === 0
}
