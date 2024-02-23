import type { Config } from "tailwindcss";
import sharedPlugin from "./shared-plugin";

export const sharedPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [sharedPlugin],
} satisfies Config;
