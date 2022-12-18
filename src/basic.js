module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  reportUnusedDisableDirectives: true,
  extends: [
    "eslint-config-standard",
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
    "plugin:markdown/recommended"
  ],
  ignorePatterns: [
    "*.min.*",
    "*.d.ts",
    "CHANGELOG.md",
    "dist",
    "build",
    "out",
    "output",
    "LICENSE*",
    "coverage",
    "public",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "!.github",
    "!.vscode"
  ],
  plugins: ["html", "unicorn"],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs"] }
    }
  },
  overrides: [
    {
      files: ["*.json", "*.json5"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/array-bracket-spacing": ["error", "never"],
        "jsonc/comma-dangle": ["error", "never"],
        "jsonc/comma-style": ["error", "last"],
        "jsonc/indent": ["error", 2],
        "jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true }],
        "jsonc/no-octal-escape": "error",
        "jsonc/object-curly-newline": ["error", { multiline: true, consistent: true }],
        "jsonc/object-curly-spacing": ["error", "always"],
        "jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }]
      }
    },
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
      rules: {
        "spaced-comment": "off"
      }
    },
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^$",
            order: [
              "name",
              "publisher",
              "displayName",
              "type",
              "version",
              "private",
              "description",
              "author",
              "license",
              "funding",
              "homepage",
              "repository",
              "bugs",
              "keywords",
              "categories",
              "sideEffects",
              "exports",
              "main",
              "module",
              "types",
              "typesVersions",
              "bin",
              "icon",
              "files",
              "engines",
              "packageManager",
              "activationEvents",
              "contributes",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "devDependencies",
              "pnpm",
              "overrides",
              "resolutions",
              "eslintConfig"
            ]
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" }
          },
          {
            pathPattern: "^exports.*$",
            order: ["types", "require", "import"]
          }
        ]
      }
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off"
      }
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      rules: {
        "no-void": ["error", { allowAsStatement: true }]
      }
    },
    {
      files: ["scripts/**/*.*", "cli.*"],
      rules: {
        "no-console": "off"
      }
    },
    {
      files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off"
      }
    },
    {
      files: ["**/*.md/*.*"],
      rules: {
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "import/no-unresolved": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-restricted-imports": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off"
      }
    },
    {
      files: [".github/workflows/*.yml"],
      rules: {
        "yml/no-empty-mapping-value": "off"
      }
    }
  ],
  rules: {
    "import/order": "error",
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",
    "semi": ["warn", "always"],
    "curly": ["error", "multi-or-nest", "consistent"],
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent-as-needed"],
    "no-unused-vars": "warn",
    "no-param-reassign": "off",
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    "camelcase": "off",
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "never"],
    "no-constant-condition": "warn",
    "no-debugger": "error",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "no-cond-assign": ["error", "always"],
    "func-call-spacing": ["off", "never"],
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "indent": ["error", 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    "no-restricted-syntax": [
      "error",
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "object-curly-spacing": ["error", "always"],
    "no-return-await": "off",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "no-multiple-empty-lines": ["warn", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true
      }
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
    "generator-star-spacing": "off",
    "spaced-comment": ["error", "always", {
      line: {
        markers: ["/"],
        exceptions: ["/", "#"]
      },
      block: {
        markers: ["!"],
        exceptions: ["*"],
        balanced: true
      }
    }],
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "consistent-return": "off",
    "complexity": ["off", 11],
    "eqeqeq": ["error", "smart"],
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-void": "error",
    "no-useless-escape": "off",
    "vars-on-top": "error",
    "require-await": "off",
    "no-return-assign": "off",
    "operator-linebreak": ["error", "before"],
    "max-statements-per-line": ["error", { max: 1 }],

    // unicorns
    // Pass error message when throwing errors
    "unicorn/error-message": "error",
    // Uppercase regex escapes
    "unicorn/escape-case": "error",
    // Array.isArray instead of instanceof
    "unicorn/no-instanceof-array": "error",
    // Prevent deprecated `new Buffer()`
    "unicorn/no-new-buffer": "error",
    // Keep regex literals safe!
    "unicorn/no-unsafe-regex": "off",
    // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    "unicorn/number-literal-case": "error",
    // includes over indexOf when checking for existence
    "unicorn/prefer-includes": "error",
    // String methods startsWith/endsWith instead of more complicated stuff
    "unicorn/prefer-string-starts-ends-with": "error",
    // textContent instead of innerText
    "unicorn/prefer-text-content": "error",
    // Enforce throwing type error when throwing error while checking typeof
    "unicorn/prefer-type-error": "error",
    // Use new when throwing error
    "unicorn/throw-new-error": "error",

    "no-use-before-define": ["error", { functions: false, classes: false, variables: true }],
    "eslint-comments/disable-enable-pair": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/namespace": "off",
    "n/no-callback-literal": "off",

    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false
      }
    ],
    "yml/quotes": ["error", { prefer: "single", avoidEscape: false }],
    "yml/no-empty-document": "off",
    "padded-blocks": "off",
    "no-trailing-spaces": ["error", { skipBlankLines: true }]
  }
};
