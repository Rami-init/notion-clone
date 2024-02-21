import sharedConfig from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config = {
  presets: [sharedConfig],
  content: [
    "./**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
  ],
} satisfies Config;

export default config;
