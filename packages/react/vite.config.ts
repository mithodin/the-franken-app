import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' })],
  build: {
    lib: {
      entry: "src/main.ts",
      fileName: "bundle",
      formats: ["es"],
    }
  }
})
