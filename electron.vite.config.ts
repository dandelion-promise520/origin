import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { codeInspectorPlugin } from 'code-inspector-plugin'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      react(),
      tailwindcss(),
      codeInspectorPlugin({
        bundler: 'vite',
        showSwitch: true,
        editor: 'code'
      })
    ],
    server: {
      host: '0.0.0.0',
      cors: true,
      proxy: {
        '/api': {
          target: 'http://192.168.1.242:8000', // 目标服务器地址
          changeOrigin: true, // 允许跨域
          rewrite: (path) => path.replace(/^\/api/, '') // 重写路径
        }
      }
    }
  }
})
