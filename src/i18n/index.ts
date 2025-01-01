import Hello, { HelloError } from "@/utility/Hello"

const getDictionary = async () => {
  const locale = await Hello.determineLocale()
  const localeToUse = Hello.localeToUse(locale)

  switch (localeToUse) {
    case "tr":
      return import("@/i18n/turkish.json")
    case "en":
    default:
      return import("@/i18n/english.json")
  }
}

export default getDictionary

declare global {
  type Dictionary = ReturnType<typeof getDictionary>
}