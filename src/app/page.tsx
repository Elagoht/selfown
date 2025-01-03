import BreadShop from "@/components/stores/BreadShop"
import getDictionary from "@/i18n"
import { FC } from "react"

const DashboardPage: FC = async () => {
  const dictionary = await getDictionary()

  return <main>
    <BreadShop breadcrumbs={[{
      title: dictionary.pages.dashboard.title,
      href: "/dashboard"
    }]} />
  </main>
}

export default DashboardPage