import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const defaultConfig = {
  plugins: [react()],
  build: {
    outDir: "build",
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const isDev = command === "serve";
  const proxyTarget = isDev ? "http://localhost:3001" : "/";
  return {
    ...defaultConfig,
    server: {
      proxy: {
        "/api": proxyTarget,
      },
    },
  };
});

