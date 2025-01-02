import classNames from "classnames"
import Link from "next/link"
import { FC } from "react"

type AsideMenuItemProps = DictedComponent<{
  title: keyof Dictionary["layout"]["aside"]["menu"]
  icon: React.ReactNode
  href: string
  isActive?: boolean
}>

const AsideMenuItem: FC<AsideMenuItemProps> = ({
  dictionary, title, icon, href, isActive = false
}) => {
  return <Link
    key={title}
    href={href}
    className={classNames(
      "flex items-center gap-2 p-4 px-12",
      "transition-all font-semibold relative", {
      "dark:text-purple-100 text-purple-900": isActive,
      "text-purple-100": !isActive
    })}
  >
    {icon}

    {dictionary.layout.aside.menu[title]}
  </Link>
}

export default AsideMenuItem