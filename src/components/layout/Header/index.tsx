import { FC } from "react"
import Breadcrumbs from "./Breadcrumbs"
import SettingsButton from "./SettingsButton"

const Header: FC = () => {
  return <header className="flex justify-between items-center">
    <Breadcrumbs />

    <SettingsButton />
  </header>
}

export default Header