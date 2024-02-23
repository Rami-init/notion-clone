module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "build",
        "fix",
        "docs",
        "chore",
        "style",
        "refactor",
        "ci",
        "test",
        "revert",
        "vercel",
      ],
    ],
  },
};
