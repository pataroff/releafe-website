const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // This is needed for Tailwind styles to be applied to the 404.ts page!
  ],
  theme: {
    // ...theme,
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      // mono: 'var(--font-mono)',
      // sans: 'var(--font-sans)',
      // serif: 'var(--font-serif)',
      sofia: ['sofia-pro', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
