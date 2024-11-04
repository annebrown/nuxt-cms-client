export default defineNuxtConfig({

    devtools: { enabled: true },
  
    modules: [
        '@nuxt/ui',
        '@nuxt/content', 
        '@nuxt/image', 
        '@nuxtjs/mdc', 
        '@nuxtjs/tailwindcss', 
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts'
    ],
    colorMode: {
        classSuffix: '',
        preference: 'dark',
    },
    srcDir: 'src/',

    content: {
        documentDriven: true,
        // Ignore "Number Dot" ordering in /content
        ignores: ['^\\.', '^-', '^[0-5]\\d*\\.'],
        highlight: {
            // Themes on:
            // github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
            theme: {
                dark: 'github-dark',
                default: 'github-dark'
            }
        },

        sources: {
            github: {
              prefix: '/docs', // Prefix for routes used to query contents
              driver: 'github', // 
              repo: "annebrown/content-base",
              branch: "main",
              dir: "content", 
            },
        }
      
    },
      nitro: {
        prerender: {
          crawlLinks: true,
          failOnError: false,
        },
      },
    compatibilityDate: '2024-09-28',
   css: ['@/assets/styles/fleet.css'],
   googleFonts: {
    download: true,
    families: {
      Roboto: true,
    }
  }
  })
  

