import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['./tests/*.spec.ts']
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, '.')
    }
  }
})
