import { sharedPreset } from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets" | "content"> = {
  content: ["./app/**/*.tsx", "../../packages/ui/src/components/*.tsx"],
  presets: [sharedPreset],
};

export default config;
