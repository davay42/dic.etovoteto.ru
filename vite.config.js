import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'


export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("src", import.meta.url)),
    },
  },
  plugins: [
    vue(),
    Unocss({
      transformers: [
        transformerDirectives(),
      ],
      presets: [
        presetIcons({ /* options */ }),
        presetUno()
      ],
      extractors: [
        extractorSplit,
        extractorPug()
      ]
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: [
        'vue',
        {
          '@vueuse/core': ['useStorage'],
          '@vueuse/math': ['useClamp'],
        },
      ],
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      directoryAsNamespace: false,
      globalNamespaces: ['global'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
      resolvers: [
        IconsResolver({
          componentPrefix: 'icon',
        }),
      ],
    }),
    Icons({
      defaultStyle: 'vertical-align: middle;',
    }),
    Pages({
      dirs: [
        { dir: "src/pages", baseRoute: "." },
      ],
      routeBlockLang: 'yaml',
      exclude: ['**/node_modules/**/*.*'],
      extensions: ['vue'],
      importMode: 'async'
    }),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
    //   manifest: {
    //     name: 'TouchMe experience',
    //     short_name: 'Journey to the music of touch',
    //     description: 'Playtronica and Chromatone collaboration',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: 'apple-touch-icon.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: 'apple-touch-icon.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //       {
    //         src: 'apple-touch-icon.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any maskable',
    //       }
    //     ]
    //   }
    // }),
  ],
  optimizeDeps: {
    include: ['vue', '@vueuse/core'],
  },

  build: {
    cssCodeSplit: false,
    sourcemap: true,
    chunkSizeWarningLimit: Infinity,
    rollupOptions: {
      manualChunks: {
        'use': ['@vueuse/core', '@vueuse/math', '@vueuse/gesture']
      }
    }
  },
})
