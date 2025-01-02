import System from "@/utility/System"
import { NextResponse } from "next/server"

export const GET = async () => {
  const ram = await System.ramUsage()
  const swap = await System.swapUsage()
  return NextResponse.json({ ram, swap })
}