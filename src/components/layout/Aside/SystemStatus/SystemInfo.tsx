import { IconDeviceDesktop } from "@tabler/icons-react"
import { FC } from "react"

interface SystemInfoProps {
  systemInfo: SystemInfo
}

const SystemInfo: FC<SystemInfoProps> = ({
  systemInfo
}) => {
  return <div className="flex px-4 py-2 text-xs items-center text-center">
    <IconDeviceDesktop />

    <span className="flex flex-col w-full">
      {systemInfo.architecture}<br />
      {systemInfo.kernel_version
      } {systemInfo.os_version}
    </span>
  </div>
}

export default SystemInfo