import { IconCloud } from "@tabler/icons-react"
import { FC } from "react"
import AsideNavBar from "./AsideNavBar"
import SystemStatus from "./SystemStatus"

const AsideMenu: FC<DictedComponent> = ({
  dictionary
}) => {
  return <aside className="p-4 h-screen">
    <div className="flex flex-col bg-black bg-opacity-30 backdrop-blur-md
      h-full items-center gap-10 py-4 rounded-3xl scrollbar-hidden w-72
      overflow-auto"
    >
      <figure className="flex flex-col items-center">
        <IconCloud
          stroke={1.5}
          className="w-32 h-32 text-white"
        />

        <h1 className="text-3xl text-white font-bold">
          {dictionary.layout.aside.title}
        </h1>
      </figure>

      <AsideNavBar dictionary={dictionary} />

      <SystemStatus />
    </div>
  </aside>
}

export default AsideMenu