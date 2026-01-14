import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // React 지원
    react(),

    // SVG를 React 컴포넌트처럼 import 가능하게
    svgr({
      svgrOptions: {
        icon: true, // true면 width/height를 1em으로 변환, 필요시 false로
      },
    }),
  ],
})