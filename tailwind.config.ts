import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "cloud": "url('/assets/design/cloud.webp')"
      }
    }
  },
  plugins: []
}

export default config