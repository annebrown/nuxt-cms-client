import { resolve } from "node:path"; // Local Content

export default defineNuxtConfig({

    telemetry: false, // F Telemetry

    devtools: { enabled: true },
  
    modules: [
        '@nuxt/ui',
        '@nuxt/content', 
        '@nuxt/image', 
        '@nuxtjs/mdc', 
        '@nuxtjs/tailwindcss', 
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        '@nuxt/icon',
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
            theme: {
              default: 'github-light',
              dark: 'github-dark',
            },
            langs: ['regexp', 'json', 'js', 'ts', 'tsx', 'html', 
                'css', 'vue','shell' , 'mdc', 'yaml', 'md', 
                'console', 'ini', 'java', 'diff' 
            ],
        },
        
        sources: {
            github: {
              prefix: '/docs', // Prefix for routes
              driver: 'github',
              repo: "annebrown/content-base",
              branch: "main",
              dir: "content", 
            },
            local: {
                prefix: '/local', // Prefix for routes
                driver: 'fs',
                base: resolve(__dirname, '/home/anne/prod/content-data/content-data/content'),
            },
        }
    }, // Content

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
    },
    features: {
        devLogs: true,
    },
  })