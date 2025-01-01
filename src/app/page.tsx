import getDictionary from "@/i18n"
import { FC } from "react"

const DashboardPage: FC = async () => {
  const dictionary = await getDictionary()

  return <main>
    <h1>{dictionary.pages.dashboad.title}</h1>

    <h2>{dictionary.pages.dashboad.slogan}</h2>
  </main>
}

export default DashboardPage