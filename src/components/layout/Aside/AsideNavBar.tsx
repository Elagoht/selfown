"use client"

import { usePathname } from "next/navigation"
import { FC } from "react"
import AsideMenuItem from "./AsideMenuItem"
import asideMenu from "./menu"

const AsideNavBar: FC = () => {
  const pathname = usePathname()

  const findActiveLinkIndex = () => {
    return asideMenu.findIndex((item) => item.href === pathname)
  }

  return <nav className="flex flex-col gap-2 w-full mt-12 relative">
    <div className="absolute left-6 h-16 right-0 bg-zinc-100 dark:bg-zinc-900
      rounded-l-full transition-all"
      style={{
        top: 0,
        bottom: 0,
        transform: `translateY(${findActiveLinkIndex() * 4
          - 0.25}rem)`
      }}
    />

    {/* Inverted radius */}
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
        className="fill-zinc-100 dark:fill-zinc-900"
        d="M19.999813 0C19.99971 11.045549 11.045549 19.99971 0 19.999813h19.999813z"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="w-4 h-4 right-0 transition-all"
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        transform: `translateY(${findActiveLinkIndex() * 4
          + 3.75}rem) scaleY(-1)`
      }}
    >
      <path
        className="fill-zinc-100 dark:fill-zinc-900"
        d="M19.999813 0C19.99971 11.045549 11.045549 19.99971 0 19.999813h19.999813z"
      />
    </svg>

    {asideMenu.map((item) =>
      <AsideMenuItem
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