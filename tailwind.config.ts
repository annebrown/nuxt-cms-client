import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    // Add your content sources here
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              fontSize: '0.5rem', // Adjust this value as needed
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Add other plugins if needed
  ],
}