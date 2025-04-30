export default defineNuxtConfig({
  compatibilityDate: '2025-04-30',

 // buildDir: './.nuxt',

  future: {
    compatibilityVersion: 4,
  },

  extends: [
    '@gabortorma/nuxt-eslint-layer',
  ],

  modules: ['../src/module'],
})
