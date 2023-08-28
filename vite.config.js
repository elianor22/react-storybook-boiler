/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components', replacement: resolve(__dirname, 'src/components')
      },
      {
        find: '@themeComponents', replacement: resolve(__dirname, 'src/theme/components')
      },
      {
        find: '@layouts', replacement: resolve(__dirname, 'src/layouts')
      },
      {
        find: '@utils', replacement: resolve(__dirname, 'src/utils')
      },
      {
        find: '@dispatch', replacement: resolve(__dirname, 'src/store')
      },
      {
        find: '@reducers', replacement: resolve(__dirname, 'src/store/reducers')
      },
      {
        find: 'src', replacement: resolve(__dirname, 'src')
      },
    ]
  }
})