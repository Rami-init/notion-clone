/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

import sharedPlugin from './shared-plugin'

const sharedPreset = {
  darkMode: ['class'],
  content: [],
  plugins: [tailwindAnimate, sharedPlugin],
} satisfies Config
export default sharedPreset
