const scopePattern = /^FED-\d+$/;

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [2, "never"],
    "scope-format": [2, "always"],
    "scope-case": [2, "always", "upper-case"],
  },
  plugins: [
    {
      rules: {
        "scope-format": ({ scope }) => {
          if (!scope) {
            return [false, "scope is required and must match format: FED-123"];
          }

          return [
            scopePattern.test(scope),
            `scope must match format: FED-123, got: ${scope}`,
          ];
        },
      },
    },
  ],
};
