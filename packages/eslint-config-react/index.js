const { isPackageExists } = require("local-pkg");

const TS = isPackageExists("typescript");

if (!TS) {
  console.warn(
    "[@luxass/eslint-config] TypeScript is not installed, fallback to JS only.",
  );
}

module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    TS
      ? "@luxass/eslint-config-ts"
      : "@luxass/eslint-config-js",
  ],
  settings: {
    react: {
      version: "17.0",
    },
  },
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    "react/react-in-jsx-scope": "off",
  },
};
