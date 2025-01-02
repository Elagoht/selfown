type UsageMetrics = {
  total: number
  used: number
  percentage: number
}

type SystemInfo = {
  kernel_name: string
  hostname: string
  kernel_version: string
  os_version: string
  architecture: string
}

type SystemMemoryResponse = {
  ram: UsageMetrics
  swap: UsageMetrics
}

type SystemStatusResponse = SystemMemoryResponse & {
  cpu: UsageMetrics
  disk: UsageMetrics
  systemInfo: SystemInfo
}
