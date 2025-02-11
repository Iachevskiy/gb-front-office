import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema   : "http://localhost:4000/graphql",
  documents: [
    "src/**/*.vue",
    "src/**/*.ts"
  ],
  ignoreNoDocuments: true,
  generates        : {
    "./src/FSD/6-Shared/Fetch/types/": {
      preset: "client",

      config: { useTypeImports: true }
    }
  }
};

export default config;
