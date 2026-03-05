import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cherrybomb: ['"Cherry Bomb One"', 'system-ui', 'sans-serif']
      },

      colors: {
        primary: "#F4B400",
        secondary: "#FFF4D6",
        accent: "#2E7D32",
        dark: "#222222",
      },
    },
  },
  plugins: [],
}

export default config