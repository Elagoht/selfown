import { exec } from "node:child_process"

class System {
  public static ramUsage(): Promise<UsageMetrics> {
    return this.handleProcesses<UsageMetrics>(
      'free | grep Swap | awk \'{printf "{\\"total\\":%d, \\"used\\":%d, \\"percentage\\":%.2f}\\n", $2, $3, $3/$2 * 100.0}\''
    )
  }

  public static swapUsage(): Promise<UsageMetrics> {
    return this.handleProcesses<UsageMetrics>(
      'free | grep Swap | awk \'{printf "{\\"total\\":%d, \\"used\\":%d, \\"percentage\\":%.2f}\\n", $2, $3, $3/$2 * 100.0}\''
    )
  }

  public static cpuUsage(): Promise<UsageMetrics> {
    return this.handleProcesses<UsageMetrics>(
      'top -bn1 | grep "Cpu(s)" | awk \'{printf "{\\"total\\":100.0, \\"used\\":%.2f, \\"percentage\\":%.2f}\\n", $2 + $4, $2 + $4}\''
    )
  }

  public static diskUsage(): Promise<UsageMetrics> {
    return this.handleProcesses<UsageMetrics>(
      'df --total | grep total | awk \'{printf "{\\"total\\":\\"%s\\", \\"used\\":\\"%s\\", \\"percentage\\":%.2f}\\n", $2, $3, ($3/$2)*100}\''
    )
  }

  public static info(): Promise<SystemInfo> {
    return this.handleProcesses<SystemInfo>(
      'uname -a | awk \'{printf "{\\"kernel_name\\":\\"%s\\", \\"hostname\\":\\"%s\\", \\"kernel_version\\":\\"%s\\", \\"os_version\\":\\"%s\\", \\"architecture\\":\\"%s\\"}\\n", $1, $2, $3, $4, $NF}\''
    )
  }

  private static handleProcesses<ResultType>(
    command: string
  ): Promise<ResultType> {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(new SystemError(`Error executing command: ${error.message}`))
          return
        }
        if (stderr) {
          reject(new SystemError(`Command stderr: ${stderr}`))
          return
        }
        try {
          const result = JSON.parse(stdout.trim()) as ResultType
          resolve(result)
        } catch (error) {
          reject(new SystemError("JSON parse error"))
        }
      })
    })
  }
}

export class SystemError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "SystemError"
  }
}

export default System

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