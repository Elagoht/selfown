import { cookies } from "next/headers"

class Hello {
  public static LOCALES: Locale[] = ["en", "tr"]

  public static fallBackLocale: Locale = "en"

  public static isLocaleAvailable(locale: Locale) {
    return Hello.LOCALES.includes(locale)
  }

  public static async determineLocale() {
    const cookieStore = await cookies()
    const locale = cookieStore.get("locale")?.value as Locale

    if (Hello.isLocaleAvailable(locale)) return locale
    return Hello.fallBackLocale
  }

  public static localeToUse(wanted: Locale) {
    let locale: Locale = wanted
    if (!Hello.isLocaleAvailable(wanted)) locale = Hello.fallBackLocale

    return locale
  }
}

export default Hello

export class HelloError extends Error {
  public constructor(message: string) {
    super(message)
  }
}