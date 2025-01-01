import getDictionary from "@/i18n"
import { FC, Suspense } from "react"

const DashboardPage: FC = async () => {
  const dictionary = await getDictionary()

  const systemInfo = await fetch("http://localhost:3000/api/system/info")
  const systemInfoData = await systemInfo.json()
  return <main>
    <h1>{dictionary.pages.dashboad.title}</h1>

    <h2>{dictionary.pages.dashboad.slogan}</h2>

    <Suspense fallback={<div>Loading...</div>}>
      <pre>{JSON.stringify(systemInfoData, null, 2)}</pre>
    </Suspense>
  </main>
}

export default DashboardPage