import {
  IconApps, IconBuildingStore,
  IconDashboard
} from "@tabler/icons-react"

const iconProps = {
  stroke: 2
}

const asideMenu: AsideMenuItem[] = [{
  title: "dashboard",
  icon: <IconDashboard {...iconProps} />,
  href: "/"
}, {
  title: "myApps",
  icon: <IconApps {...iconProps} />,
  href: "/apps"
}, {
  title: "store",
  icon: <IconBuildingStore {...iconProps} />,
  href: "/store"
}]

export default asideMenu

type AsideMenuItem = {
  title: keyof Dictionary["layout"]["aside"]["menu"]
  icon: React.ReactNode
  href: string
}