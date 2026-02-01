import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // 👈 your desired port
     proxy:{
    '/api':'http://gateway-alb-504767746.ap-south-1.elb.amazonaws.com'
     }

  },
})
