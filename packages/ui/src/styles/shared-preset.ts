/* eslint-disable import/no-extraneous-dependencies */
import sharedPlugin from "./shared-plugin";
import type { Config } from "tailwindcss";

const sharedPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [sharedPlugin],
} satisfies Config;
export default sharedPreset;
