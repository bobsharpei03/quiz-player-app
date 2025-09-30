import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["**/dist/"]), {
    extends: compat.extends("@salesforce/eslint-config-lwc/recommended"),

    rules: {
        "@lwc/lwc/no-async-operation": "warn",
        "@lwc/lwc/no-inner-html": "warn",
        "@lwc/lwc/no-document-query": "warn",
        "@lwc/lwc/no-unknown-wire-adapters": "off",
    },
}, {
    files: ["src/server/**"],

    languageOptions: {
        globals: {
            ...globals.node,
        },
    },

    rules: {
        "no-console": "off",
    },
}]);