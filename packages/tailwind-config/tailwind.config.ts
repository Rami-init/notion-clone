import type { Config } from "tailwindcss";
import { sharedPreset } from "./src";

const config: Omit<Config, "content"> = {
  content: [],
  presets: [sharedPreset],
  // plugins: [typographyPlugin, animatePlugin],
};
export default config;
