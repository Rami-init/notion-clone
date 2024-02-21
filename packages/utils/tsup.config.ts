import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/**/*.ts"],
  entryPoints: ["src/index.ts"],
  format: ["cjs"],
  dts: true,
  minify: true,
  clean: true,
  ...options,
}));
