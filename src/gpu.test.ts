import { vi, describe, it, expect, beforeEach } from "vitest"
import { spawnSync } from "node:child_process"

vi.mock("node:child_process", () => ({
  spawnSync: vi.fn(),
}))

const mockSpawnSync = vi.mocked(spawnSync)

const makeResult = (stdout: string) =>
  ({ stdout, stderr: "", status: 0, pid: 0, output: [], signal: null }) as ReturnType<
    typeof spawnSync
  >

describe("currentMode", () => {
  beforeEach(() => {
    vi.resetModules()
    mockSpawnSync.mockReset()
  })

  it("returns 'integrated' when gpuswitch is 0", async () => {
    mockSpawnSync.mockReturnValue(
      makeResult("System-wide power settings:\ngpuswitch     0\n"),
    )
    const { currentMode } = await import("./gpu.js")
    expect(currentMode()).toBe("integrated")
  })

  it("returns 'discrete' when gpuswitch is 1", async () => {
    mockSpawnSync.mockReturnValue(
      makeResult("System-wide power settings:\ngpuswitch     1\n"),
    )
    const { currentMode } = await import("./gpu.js")
    expect(currentMode()).toBe("discrete")
  })

  it("returns 'auto' when gpuswitch is 2", async () => {
    mockSpawnSync.mockReturnValue(
      makeResult("System-wide power settings:\ngpuswitch     2\n"),
    )
    const { currentMode } = await import("./gpu.js")
    expect(currentMode()).toBe("auto")
  })

  it("returns 'unknown' when stdout contains no gpuswitch line", async () => {
    mockSpawnSync.mockReturnValue(
      makeResult("System-wide power settings:\nhibernatemode 3\n"),
    )
    const { currentMode } = await import("./gpu.js")
    expect(currentMode()).toBe("unknown")
  })

  it("returns 'unknown' when gpuswitch has an unrecognised value", async () => {
    mockSpawnSync.mockReturnValue(
      makeResult("System-wide power settings:\ngpuswitch     9\n"),
    )
    const { currentMode } = await import("./gpu.js")
    expect(currentMode()).toBe("unknown")
  })
})
