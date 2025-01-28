import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
      evmwider: '.50em',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    backgroundImage: {
      "img_bg_hero": "url('../assets/bg_hero.jpg)",
    },
    extend: {
      colors: {
        "white": "#FFFFFF",
        "black": "#000000",
        "primary-dark-grey": "#2B2B2B",
        "primary-grey": "#919191",
        "alternative-dark-grey": "#323232",
        "light-grey": "#CBCBCB",
        "medium-grey": "6D6C64",
      },
    },
  },
  plugins: [],
} satisfies Config;
