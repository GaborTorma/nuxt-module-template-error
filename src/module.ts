import { addPlugin, addServerPlugin, addServerTemplate, addTemplate, createResolver, defineNuxtModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

const pluginContent = `import type { NitroApp } from 'nitropack'
import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin'

export default defineNitroPlugin((nitroApp: NitroApp) => {
  console.log('Hello from nitro plugin!')
})`

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, nuxt) {
    const resolver = createResolver(nuxt.options.buildDir)

    addTemplate({
      write: true,
      filename: 'nitro-plugin.ts',
      getContents: () => pluginContent,
    })

    addServerPlugin(resolver.resolve('nitro-plugin.ts'))
  }
})
