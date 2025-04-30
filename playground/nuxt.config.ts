export default defineNuxtConfig({
  compatibilityDate: '2025-04-30',

  // buildDir: './.nuxt', // uncomment it and no build error, because buildDir not in node_modules

  future: {
    compatibilityVersion: 4, // change to 3 and no build error, because the buildDir is .nuxt. Doesn't changed to node_modules/.cache/nuxt/.nuxt
  },

  extends: [
    '@gabortorma/nuxt-eslint-layer',
  ],

  modules: ['../src/module'],
})
