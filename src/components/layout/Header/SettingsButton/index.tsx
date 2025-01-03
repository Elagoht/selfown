import { IconSettings } from "@tabler/icons-react"
import Link from "next/link"

const SettingsButton = () => {
  return <Link
    href="/settings"
    className="p-4 rounded-3xl backdrop-blur-md bg-black bg-opacity-30"
  >
    <IconSettings />
  </Link>
}

export default SettingsButton