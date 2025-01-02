"use client"

import { getSystemStatus } from "@/services/system"
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip
} from "chart.js"
import { useEffect, useState } from "react"
import UsageMetricCard from "./UsageMetricCard"

// Register the controllers and elements needed for doughnut charts
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

const SystemStatus = () => {
  const [systemStatus, setSystemStatus] = useState<
    SystemStatusResponse | null
  >()

  useEffect(() => { // Initial fetch
    getSystemStatus().then(setSystemStatus)
  }, [])

  useEffect(() => {
    setInterval(async () => {
      const systemStatus = await getSystemStatus()
      setSystemStatus(systemStatus)
    }, 3000)
  }, [])

  if (!systemStatus) return <div>Loading...</div>

  return <div className="grid grid-cols-4 gap-4">
    <UsageMetricCard name="RAM" metric={systemStatus.ram} convertTo="GB" />

    <UsageMetricCard name="Swap" metric={systemStatus.swap} convertTo="GB" />

    <UsageMetricCard name="CPU" metric={systemStatus.cpu} convertTo="None" />

    <UsageMetricCard name="Disk" metric={systemStatus.disk} convertTo="GB" />
  </div>
}

export default SystemStatus