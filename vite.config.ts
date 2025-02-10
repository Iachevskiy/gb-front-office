import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const FSDPath = fileURLToPath(new URL("./src/FSD", import.meta.url));
const FSDPathAlias = {
  "FSD/App"     : `${FSDPath}/1-App`,
  "FSD/Pages"   : `${FSDPath}/2-Pages`,
  "FSD/Widgets" : `${FSDPath}/3-Widgets`,
  "FSD/Features": `${FSDPath}/4-Features`,
  "FSD/Entities": `${FSDPath}/5-Entities`,
  "FSD/Shared"  : `${FSDPath}/6-Shared`
};

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@"  : fileURLToPath(new URL("./src", import.meta.url)),
      icons: fileURLToPath(new URL("./src/assets/icons", import.meta.url)),
      logos: fileURLToPath(new URL("./src/assets/logos", import.meta.url)),
      ...FSDPathAlias
    }
  },

  server: { allowedHosts: [".ngrok-free.app"] }

});
