import getDictionary from "@/i18n"
import { FC } from "react"
import { Poppins } from "next/font/google"
import "@/design/globals.css"

const RootLayout: FC<ParentComponent> = async ({
  children
}) => {
  const dictionary = await getDictionary()

  return <html lang={dictionary.meta.lang}>
    <body className={font.className}>
      {children}
    </body>
  </html>
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

export default RootLayout