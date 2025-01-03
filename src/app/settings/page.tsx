import BreadShop from "@/components/stores/BreadShop"
import getDictionary from "@/i18n"

const SettingsPage = async () => {
  const dictionary = await getDictionary()

  return <div>
    <BreadShop breadcrumbs={[{
      title: dictionary.pages.settings.title,
      href: "/settings"
    }]} />
  </div>
}

export default SettingsPage