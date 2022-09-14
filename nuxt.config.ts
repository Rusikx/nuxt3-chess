import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({\
  router: {
    base: '/nuxt3-chess'
  },
  buildModules: ['@pinia/nuxt'],
  vite: {
    plugins: [eslintPlugin()]
  }
})
