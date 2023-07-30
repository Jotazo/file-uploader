import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const defaultConfig = {
  plugins: [react()],
  build: {
    outDir: "build",
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defaultConfig;
});

