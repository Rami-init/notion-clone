import type { Config } from 'tailwindcss'
import sharedPreset from './src/styles/shared-preset'

const config = {
  presets: [sharedPreset],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: 'ui-',
} satisfies Config

export default config
