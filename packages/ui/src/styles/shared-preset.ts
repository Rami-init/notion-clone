/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from 'tailwindcss'

import sharedPlugin from './shared-plugin'

const sharedPreset = {
  darkMode: ['class'],
  content: [],
  plugins: [sharedPlugin],
} satisfies Config
export default sharedPreset
