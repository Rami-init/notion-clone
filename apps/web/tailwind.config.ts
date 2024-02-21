import sharedPreset from "@repo/ui/styles/shared-preset";
import type { Config } from "tailwindcss";

const config = {
  presets: [sharedPreset],
  content: [
    "./**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
  ],
} satisfies Config;

export default config;
