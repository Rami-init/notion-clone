import sharedPreset from '@repo/ui/styles/shared-preset'
import type { Config } from 'tailwindcss'

const config = {
  presets: [sharedPreset],
  content: ['./app/**/*.{ts,tsx}'],
} satisfies Config

export default config
