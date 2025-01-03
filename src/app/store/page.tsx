import BreadShop from "@/components/stores/BreadShop"
import getDictionary from "@/i18n"

const StorePage = async () => {
  const dictionary = await getDictionary()

  return <div>
    <BreadShop breadcrumbs={[{
      title: dictionary.pages.store.title,
      href: "/store"
    }]} />
  </div>
}

export default StorePage