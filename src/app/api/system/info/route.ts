import System from "@/utility/System"
import { NextResponse } from "next/server"

/**
 * Get system information about RAM, CPU, Disk usage
 */
export const GET = async () => {
  try {
    const ram = await System.ramUsage()
    const swap = await System.swapUsage()
    const cpu = await System.cpuUsage()
    const disk = await System.diskUsage()
    const systemInfo = await System.info()

    return NextResponse.json({
      ram, swap, cpu, disk, systemInfo
    })
  } catch (error) {
    return NextResponse.json({
      error:
        "Failed to fetch system information"
    }, { status: 500 })
  }
}
