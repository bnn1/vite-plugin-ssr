import preact from '@preact/preset-vite'
import ssr from 'vite-plugin-ssr/plugin'

const config = {
  plugins: [preact(), ssr()],
  optimizeDeps: {
    include: ['preact/devtools'],
  },
}

export default config
