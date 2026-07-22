import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "lib/generated/**",
    "scripts/**",
    ".playwright-cli/**",
    ".remember/**",
    ".omc/**",
    ".omx/**",
    ".claude/**",
    "components/ui/**",
    "types/**",
    "node_modules/**",
  ]),
]);

export default eslintConfig;
