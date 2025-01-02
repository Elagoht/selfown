import Environment from "@/utility/Environment"

export const getSystemStatus = async (): Promise<SystemStatusResponse> => {
  const response = await fetch(`${Environment.HOST_URL}/api/system/info`)
  return response.json() as Promise<SystemStatusResponse>
}

export const getSystemMemory = async (): Promise<SystemStatusResponse> => {
  const response = await fetch(`${Environment.HOST_URL}/api/system/ram`)
  return response.json() as Promise<SystemStatusResponse>
}

export const getSystemCpu = async (): Promise<UsageMetrics> => {
  const response = await fetch(`${Environment.HOST_URL}/api/system/cpu`)
  return response.json() as Promise<UsageMetrics>
}