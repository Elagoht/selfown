import getDictionary from "@/i18n"
import { IconCloud } from "@tabler/icons-react"
import { FC } from "react"
import AsideNavBar from "./AsideNavBar"
const AsideMenu: FC = async () => {
  const dictionary = await getDictionary()

  return <aside className="p-4 h-screen">
    <div className="flex flex-col bg-purple-500 w-72 h-full items-center
      gap-10 py-4 rounded-3xl scrollbar-hidden overflow-auto">
      <figure className="flex flex-col items-center">
        <IconCloud
          stroke={1.5}
          className="w-32 h-32 text-purple-100"
        />

        <h1 className="text-3xl text-purple-100 font-bold">
          {dictionary.layout.aside.title}
        </h1>
      </figure>

      <AsideNavBar />
    </div>
  </aside>
}

export default AsideMenu