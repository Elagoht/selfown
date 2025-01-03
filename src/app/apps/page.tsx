import BreadShop from "@/components/stores/BreadShop"
import getDictionary from "@/i18n"

const InstalledAppsPage = async () => {
  const dictionary = await getDictionary()

  return <div>
    <BreadShop breadcrumbs={[{
      title: dictionary.pages.myApps.title,
      href: "/apps"
    }]} />
  </div>
}

export default InstalledAppsPage