export default [
    {
      ignores: ["node_modules", "dist"], // Directories to ignore
    },
    {
      files: ["**/*.js", "**/*.mjs"], // Specify file patterns
      languageOptions: {
        ecmaVersion: "latest", // Use the latest ECMAScript version
        sourceType: "module",  // Enable ES modules
      },
      rules: {
        "no-unused-vars": "warn", // Example rule: Warn about unused variables
        "eqeqeq": "error",        // Example rule: Enforce `===` over `==`
      },
    },
  ];
  