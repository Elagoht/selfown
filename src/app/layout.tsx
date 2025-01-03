import AsideMenu from "@/components/layout/Aside"
import Header from "@/components/layout/Header"
import "@/design/globals.css"
import getDictionary from "@/i18n"
import { Poppins } from "next/font/google"
import { FC } from "react"

const RootLayout: FC<ParentComponent> = async ({
  children
}) => {
  const dictionary = await getDictionary()

  return <html lang={dictionary.meta.lang}>
    <body className={font.className}>
      <AsideMenu dictionary={dictionary} />

      <div className="flex-1 p-4 pl-0">
        <Header />

        {children}
      </div>
    </body>
  </html>
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

export default RootLayout