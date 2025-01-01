import Hello, { HelloError } from "."

describe("Hello", () => {
  it("should have defined LOCALES", () => {
    expect(Hello.LOCALES).toBeDefined()
    expect(Array.isArray(Hello.LOCALES)).toBe(true)
    expect(Hello.LOCALES).toContain("en")
    expect(Hello.LOCALES).toContain("tr")
  })

  it("should have defined fallBackLocale", () => {
    expect(Hello.fallBackLocale).toBeDefined()
    expect(Hello.fallBackLocale).toBe("en")
  })

  it("should check if locale is available", () => {
    expect(Hello.isLocaleAvailable("en")).toBe(true)
    expect(Hello.isLocaleAvailable("tr")).toBe(true)
    // @ts-expect-error testing unknown locale
    expect(Hello.isLocaleAvailable("fr")).toBe(false)
  })

  it("should determine locale from cookies", async () => {
    const mockCookies = jest.fn().mockReturnValue([
      { name: "locale", value: "tr" }
    ])
    jest.spyOn(require("next/headers"), "cookies").mockImplementation(() => ({
      get: () => mockCookies()[0]
    }))

    const locale = await Hello.determineLocale()
    expect(locale).toBe("tr")

    jest.restoreAllMocks()
  })

  it(
    "should return fallback locale if cookie locale is not available",
    async () => {
      const mockCookies = jest.fn().mockReturnValue([
        { name: "locale", value: "fr" }
      ])
      jest.spyOn(require("next/headers"), "cookies").mockImplementation(() => ({
        get: (name: string) => mockCookies()[0]
      }))

      const locale = await Hello.determineLocale()
      expect(locale).toBe("en")

      jest.restoreAllMocks()
    }
  )

  it("should return correct locale to use", () => {
    expect(Hello.localeToUse("en")).toBe("en")
    expect(Hello.localeToUse("tr")).toBe("tr")
    // @ts-expect-error testing unknown locale
    expect(Hello.localeToUse("fr")).toBe("en")
  })

  it("should create HelloError with message", () => {
    const error = new HelloError("test error")
    expect(error).toBeInstanceOf(Error)
    expect(error.message).toBe("test error")
  })
})
