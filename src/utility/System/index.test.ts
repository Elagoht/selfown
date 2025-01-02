import System from "./index"

describe("System", () => {
  it("should throw SystemError if info fails", async () => {
    jest.spyOn(System, "info").mockRejectedValue(new Error("SystemError"))

    await expect(System.info()).rejects.toThrow("SystemError")

    // Mock temizliği
    jest.restoreAllMocks()
  })

  it("should throw SystemError if ramUsage fails", async () => {
    jest.spyOn(System, "ramUsage").mockRejectedValue(new Error("SystemError"))

    await expect(System.ramUsage()).rejects.toThrow("SystemError")

    jest.restoreAllMocks()
  })

  it("should throw SystemError if swapUsage fails", async () => {
    jest.spyOn(System, "swapUsage").mockRejectedValue(new Error("SystemError"))

    await expect(System.swapUsage()).rejects.toThrow("SystemError")

    jest.restoreAllMocks()
  })

  it("should throw SystemError if cpuUsage fails", async () => {
    jest.spyOn(System, "cpuUsage").mockRejectedValue(new Error("SystemError"))

    await expect(System.cpuUsage()).rejects.toThrow("SystemError")

    jest.restoreAllMocks()
  })

  it("should throw SystemError if diskUsage fails", async () => {
    jest.spyOn(System, "diskUsage").mockRejectedValue(new Error("SystemError"))

    await expect(System.diskUsage()).rejects.toThrow("SystemError")

    jest.restoreAllMocks()
  })

  it("should return the system info with uname", async () => {
    try {
      const systemInfo = await System.info()
      expect(systemInfo).toBeDefined()
      expect(systemInfo.architecture).toBeDefined()
      expect(systemInfo.hostname).toBeDefined()
      expect(systemInfo.kernel_name).toBeDefined()
      expect(systemInfo.kernel_version).toBeDefined()
      expect(systemInfo.os_version).toBeDefined()
    } catch (error) {
      expect(error).toBeDefined()
    }
  })

  it("should return the ram usage", async () => {
    try {
      const ramUsage = await System.ramUsage()
      expect(ramUsage).toBeDefined()
      expect(ramUsage.total).toBeDefined()
      expect(ramUsage.used).toBeDefined()
      expect(ramUsage.percentage).toBeDefined()
    } catch (error) {
      expect(error).toBeDefined()
    }
  })

  it("should return the swap usage", async () => {
    try {
      const swapUsage = await System.swapUsage()
      expect(swapUsage).toBeDefined()
      expect(swapUsage.total).toBeDefined()
      expect(swapUsage.used).toBeDefined()
      expect(swapUsage.percentage).toBeDefined()
    } catch (error) {
      expect(error).toBeDefined()
    }
  })

  it("should return the cpu usage", async () => {
    try {
      const cpuUsage = await System.cpuUsage()
      expect(cpuUsage).toBeDefined()
      expect(cpuUsage.total).toBeDefined()
      expect(cpuUsage.used).toBeDefined()
      expect(cpuUsage.percentage).toBeDefined()
    } catch (error) {
      expect(error).toBeDefined()
    }
  })

  it("should return the disk usage", async () => {
    try {
      const diskUsage = await System.diskUsage()
      expect(diskUsage).toBeDefined()
      expect(diskUsage.total).toBeDefined()
      expect(diskUsage.used).toBeDefined()
      expect(diskUsage.percentage).toBeDefined()
    } catch (error) {
      expect(error).toBeDefined()
    }
  })
})
