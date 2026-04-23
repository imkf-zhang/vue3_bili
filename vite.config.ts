import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy(),
    vue()
    // Components({
    //   resolvers: [
    //     AntDesignVueResolver({
    //       importStyle: 'css', // 或者 'less'
    //       resolveIcons: true,
    //     })
    //   ],
    //   dts: 'src/components.d.ts' 
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
