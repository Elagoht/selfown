import System from "@/utility/System"
import { NextResponse } from "next/server"

export const GET = async () => {
  const cpu = await System.cpuUsage()
  return NextResponse.json(cpu)
}