export default defineNuxtConfig({

    devtools: { enabled: true },
  
    modules: [
        '@nuxt/ui',
        '@nuxt/content', 
        '@nuxt/image', 
        '@nuxtjs/mdc', 
        '@nuxtjs/tailwindcss', 
        '@nuxtjs/color-mode',
    ],

    srcDir: 'src/',

    content: {
        documentDriven: true,
        // Ignore "Number Dot" ordering in /content
        ignores: ['^\\.', '^-', '^[0-5]\\d*\\.'],

        sources: {
            github: {
              prefix: '/docs', // Prefix for routes used to query contents
              driver: 'github', // Driver used to fetch contents (view unstorage documentation)
              repo: "annebrown/content-base",
              branch: "main",
              dir: "content", // Directory where contents are located. It could be a subdirectory of the repository.
              // Imagine you have a blog inside your content folder. You can set this option to `content/blog` with the prefix option to `/blog` to avoid conflicts with local files.
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

  })
  

