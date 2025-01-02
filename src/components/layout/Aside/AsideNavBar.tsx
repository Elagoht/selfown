"use client"

import { usePathname } from "next/navigation"
import { FC } from "react"
import AsideMenuItem from "./AsideMenuItem"
import asideMenu from "./menu"

const AsideNavBar: FC<DictedComponent> = ({
  dictionary
}) => {
  const pathname = usePathname()

  const findActiveLinkIndex = () => {
    return asideMenu.findIndex((item) => item.href === pathname)
  }

  return <nav className="flex flex-col gap-2 w-full mt-12 relative">
    <div
      className="absolute left-6 h-16 right-0 bg-black bg-opacity-30
      backdrop-blur-md rounded-l-full transition-all drop-shadow-md"
      style={{
        top: 0,
        bottom: 0,
        transform: `translateY(${findActiveLinkIndex() * 4
          - 0.25}rem)`
      }}
    />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="w-4 h-8 right-0 transition-all"
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        transform: `translateY(${findActiveLinkIndex() * 4
          - 1.75}rem)`
      }}
    >
      <path
        className="fill-black opacity-30"
        d="M19.999813 0C19.99971 11.045549 11.045549 19.99971 0 19.999813h19.999813z"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="w-4 h-4 right-0 transition-all drop-shadow-md"
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        transform: `translateY(${findActiveLinkIndex() * 4
          + 3.75}rem) scaleY(-1)`
      }}
    >
      <path
        className="fill-black opacity-30"
        d="M19.999813 0C19.99971 11.045549 11.045549 19.99971 0 19.999813h19.999813z"
      />
    </svg>

    {asideMenu.map((item) =>
      <AsideMenuItem
        dictionary={dictionary}
        key={item.title}
        title={item.title}
        icon={item.icon}
        href={item.href}
        isActive={pathname === item.href}
      />
    )}
  </nav>
}

export default AsideNavBar