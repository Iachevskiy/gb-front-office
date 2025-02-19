import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-expect-error */
  schema   : process.env.VITE_API_URL,
  documents: [
    "src/**/*.vue",
    "src/**/*.ts"
  ],
  ignoreNoDocuments: true,
  generates        : {
    "./src/FSD/6-Shared/Fetch/generatedTypes/": {
      preset: "client",

      config: { useTypeImports: true }
    }
  }
};

export default config;
