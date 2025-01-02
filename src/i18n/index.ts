import Hello from "@/utility/Hello"

const getDictionary = async () => {
  const locale = await Hello.determineLocale()
  const localeToUse = Hello.localeToUse(locale)

  switch (localeToUse) {
    case "tr":
      return (await import("@/i18n/turkish.json")).default
    case "en":
    default:
      return (await import("@/i18n/english.json")).default
  }
}

export default getDictionary

declare global {
  type Dictionary = Awaited<ReturnType<typeof getDictionary>>
}