import Link from "next/link"
import { FC } from "react"

type BreadcrumbProps = {
  icon?: React.ReactNode
  title?: string
  href: string
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  icon, title, href
}) => {
  return <Link
    href={href}
    className="p-4 first:rounded-l-3xl last:rounded-r-3xl"
  >
    {icon}

    {title}
  </Link>
}

export default Breadcrumb