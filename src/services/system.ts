import Environment from "@/utility/Environment"

export const getSystemStatus = async (): Promise<SystemStatusResponse> => {
  const response = await fetch(`${Environment.HOST_URL}/api/system/info`)
  return response.json() as Promise<SystemStatusResponse>
}