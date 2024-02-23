module.exports = {
  "(apps|packages)/**/*.{js,ts,jsx,tsx}": [
    "prettier --write --ignore-unknown",
    "eslint --fix",
  ],
  "*.json": ["prettier --write"],
};
