"use client"

import { breadcrumbStore } from "@/stores/breadcrumbs"
import { IconHome } from "@tabler/icons-react"
import { FC } from "react"
import Breadcrumb from "./Breadcrumb"

const Breadcrumbs: FC = () => {
  const { breadcrumbs } = breadcrumbStore()

  return <nav className="flex justify-center items-center w-fit
    backdrop-blur-md rounded-3xl bg-opacity-30 bg-black divide-x
    divide-black divide-opacity-20"
  >
    <Breadcrumb
      icon={<IconHome />}
      href="/"
    />

    {breadcrumbs.map((breadcrumb) =>
      <Breadcrumb
        key={breadcrumb.href}
        title={breadcrumb.title}
        href={breadcrumb.href}
      />
    )}
  </nav>
}

export default Breadcrumbs