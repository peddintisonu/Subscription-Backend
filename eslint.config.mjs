// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
    // 1. Base ESLint Rules
    // This applies the recommended rules for modern JavaScript.
    js.configs.recommended,

    // 2. Environment Globals and Custom Rules
    // This defines global variables for a browser environment and custom rules.
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            // 3. Custom Rules
            // You can add or override rules here.
            "no-unused-vars": "warn", // Warn about unused variables
            "no-console": "off", // Allow console statements
            "no-undef": "error", // Disallow undefined variables
        },
    },

    // 4. Prettier Integration
    // This config MUST be the last item in the array.
    // It enables the Prettier plugin and automatically disables all
    // ESLint rules that might conflict with Prettier's formatting.
    eslintPluginPrettierRecommended,
];

//----------------------- Old way ------------------------
// import js from "@eslint/js";
// import globals from "globals";
// import { defineConfig } from "eslint/config";
// import prettierPlugin from "eslint-plugin-prettier";

// export default defineConfig([
//     {
//         files: ["**/*.{js,mjs,cjs}"],
//         languageOptions: {
//             globals: globals.browser,
//         },
//         plugins: {
//             prettier: prettierPlugin,
//         },
//         rules: {
//             ...js.configs.recommended.rules,
//             "no-unused-vars": "warn",
//             "prettier/prettier": "error",
//         },
//     },
// ]);
