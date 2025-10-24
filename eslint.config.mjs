import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import {  globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
  //   ignores: [
  //     "node_modules/**",
  //     ".next/**",
  //     "out/**",
  //     "build/**",
  //     "next-env.d.ts",
  //   ],
   },
    ...nextVitals,
   globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ])
];
//const  = defineConfig([
 
  // Override default ignores of eslint-config-next.
  

export default eslintConfig;
