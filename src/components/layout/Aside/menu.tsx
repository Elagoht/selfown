import {
  IconApps, IconBuildingStore,
  IconDashboard, IconSettings
} from "@tabler/icons-react"

const iconProps = {
  stroke: 2
}

const asideMenu: AsideMenuItem[] = [{
  title: "Dashboard",
  icon: <IconDashboard {...iconProps} />,
  href: "/"
}, {
  title: "Installed Apps",
  icon: <IconApps {...iconProps} />,
  href: "/apps"
}, {
  title: "Store",
  icon: <IconBuildingStore {...iconProps} />,
  href: "/store"
}, {
  title: "Settings",
  icon: <IconSettings {...iconProps} />,
  href: "/settings"
}]

export default asideMenu

type AsideMenuItem = {
  title: string
  icon: React.ReactNode
  href: string
}