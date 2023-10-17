import type { Config } from 'tailwindcss'
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xxs': '0.625rem',    // Extra Extra Small
        'xs': '0.75rem',      // Extra Small
        'sm': '0.875rem',     // Small
        'base': '1rem',       // Base size (default)
        'lg': '1.125rem',     // Large
        'xl': '1.25rem',      // Extra Large
        '2xl': '1.5rem',      // 2X Large
      },
    },
  },
  plugins: [],
}
export default config
