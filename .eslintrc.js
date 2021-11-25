module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", "import", "jsx-a11y"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["off", { args: "all", argsIgnorePattern: "^_" }],
    "react-hooks/exhaustive-deps": 2,
    "react-hooks/rules-of-hooks": 2,
    "func-names": "off",
    "react/jsx-no-useless-fragment": "off",
    "@typescript-eslint/ban-types": [
      "warn",
      {
        types: {
          // add a custom message to help explain why not to use it
          Foo: "Don't use Foo because it is unsafe",

          // add a custom message, AND tell the plugin how to fix it
          String: {
            message: "Use string instead",
            fixWith: "string",
          },

          "{}": {
            message: "Use object instead",
            fixWith: "object",
          },
        },
      },
    ],
    "@typescript-eslint/no-var-requires": 0,
    "object-curly-newline": "off",
    "consistent-return": "off",
    "no-unused-vars": ["warn"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prefer-template": "error",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight", "to"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    radix: "error",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "react/react-in-jsx-scope": "off",
    "space-before-blocks": "error",
    "react/state-in-constructor": 0,
    "react/button-has-type": 0,
    "react/jsx-filename-extension": [0],
    "import/extensions": "off",
    "import/no-named-as-default": 0,
    "import/no-duplicates": "off",
    "import/no-import-module-exports": [
      "warn",
      {
        exceptions: ["**/*/some-file.js"],
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "warn",
      {
        devDependencies: ["jest.setup.ts", "**/*.test.tsx", "**/*.spec.tsx", "**/*.test.ts", "**/*.spec.ts"],
      },
    ],
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
    "no-param-reassign": 0,
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": [0],
    "react/jsx-indent": [0],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "max-len": [
      "off",
      {
        code: 80,
      },
    ],

    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling", "object", "index"]],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        project: ".",
      },
    },
  },
};
