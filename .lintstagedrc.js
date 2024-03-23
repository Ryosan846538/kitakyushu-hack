const { ESLint } = require("eslint");
const path = require("path");

const targetFiles = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file);
    }),
  );
  return files.filter((_, i) => !isIgnored[i]);
};

module.exports = {
  "*.{js,jsx,ts,tsx}": [
    (filenames) =>
      `yarn lint:fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`,
    async (filenames) => {
      const files = await targetFiles(filenames);
      if (files.length === 0) {
        return "";
      }
      return `yarn lint:fix --file ${files.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;
    },
    "yarn format",
  ],
};
