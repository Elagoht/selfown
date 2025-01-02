"use client"

import { getSystemCpu, getSystemMemory } from "@/services/system"
import {
  IconBrain, IconCpu,
  IconDeviceFloppy, IconReplace
} from "@tabler/icons-react"
import { FC, useEffect, useState } from "react"
import SystemInfo from "./SystemInfo"
import UsageMetricCard from "./UsageMetricCard"

type SystemStatusProps = {
  initial: SystemStatusResponse
}

const SystemStatus: FC<SystemStatusProps> = ({
  initial
}) => {
  const [memory, setMemory] = useState<SystemMemoryResponse>()
  const [cpu, setCpu] = useState<UsageMetrics>()

  useEffect(() => {
    setInterval(async () => {
      setMemory(await getSystemMemory())
      setCpu(await getSystemCpu())
    }, 3000)
  }, [])

  return <div className="flex flex-col w-full px-4 gap-4">
    <UsageMetricCard
      icon={<IconBrain />}
      name="RAM"
      metric={memory?.ram || initial.ram}
      convertTo="GB"
    />

    <UsageMetricCard
      icon={<IconReplace />}
      name="Swap"
      metric={memory?.swap || initial.swap}
      convertTo="GB"
    />

    <UsageMetricCard
      icon={<IconCpu />}
      name="CPU"
      metric={cpu || initial.cpu}
    />

    <UsageMetricCard
      icon={<IconDeviceFloppy />}
      name="Disk"
      metric={initial.disk}
      convertTo="GB"
    />

    <SystemInfo systemInfo={initial.systemInfo} />
  </div>
}

export default SystemStatus