import path from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import prettier from 'prettier'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import devtoolsJson from 'vite-plugin-devtools-json'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    devtoolsJson(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    dts({
      tsconfigPath: './tsconfig.build.json',
      rollupTypes: true,
      insertTypesEntry: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/main.tsx', 'src/App.tsx', 'src/**/*.test.tsx'],
      // Format the content before writing
      beforeWriteFile: async (filePath, content) => {
        if (filePath.endsWith('.d.ts')) {
          try {
            const formatted = await prettier.format(content, {
              parser: 'typescript',
              semi: false,
              singleQuote: true,
              tabWidth: 2,
              trailingComma: 'es5',
              printWidth: 80,
            })
            return { filePath, content: formatted }
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(`Error formatting ${filePath}:`, error)
          }
        }
        return { filePath, content }
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SyntechComponentLibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react-icons/im'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
        // Rename CSS file to styles.css
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'styles.css'
          }
          return '[name].[ext]'
        },
      },
    },
    cssCodeSplit: false,
  },
})
