"use client"

import { getSystemStatus } from "@/services/system"
import { IconBrain, IconCpu, IconDeviceFloppy, IconReplace } from "@tabler/icons-react"
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip
} from "chart.js"
import { FC, useEffect, useState } from "react"
import SystemInfo from "./SystemInfo"
import UsageMetricCard from "./UsageMetricCard"

// Register the controllers and elements needed for doughnut charts
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

const SystemStatus: FC = () => {
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

  return <div className="flex flex-col w-full px-4 gap-4">
    <UsageMetricCard
      icon={<IconBrain />}
      name="RAM"
      metric={systemStatus.ram}
      convertTo="GB"
    />

    <UsageMetricCard
      icon={<IconReplace />}
      name="Swap"
      metric={systemStatus.swap}
      convertTo="GB"
    />

    <UsageMetricCard
      icon={<IconCpu />}
      name="CPU"
      metric={systemStatus.cpu}
    />

    <UsageMetricCard
      icon={<IconDeviceFloppy />}
      name="Disk"
      metric={systemStatus.disk}
      convertTo="GB"
    />

    <SystemInfo systemInfo={systemStatus.systemInfo} />
  </div>
}

export default SystemStatus