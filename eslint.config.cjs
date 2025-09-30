const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([globalIgnores(["**/dist/"]), {
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