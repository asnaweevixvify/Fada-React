import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'ฟาด้าน้ำปลาร้าฮาลาล',
          description: 'ฟาด้าน้ำปลาร้าฮาลาล น้ำปลาร้าฮาลาลที่ทำจากมุสลิมแท้ 100 % ผลิตจากปลาทะเล ขวดละ 35 บาท ผ่านการรับรองมาตรฐานฮาลาล',
        },
      },
    }),
  ],
})
