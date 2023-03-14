const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
/** @type {import('jest').Config} */
const config = {
  moduleDirectories: ["node_modules", "<rootDir>/pages"],
  testEnvironment: "jest-environment-jsdom",
  roots:[
    '<rootDir>'
  ]
};
module.exports = createJestConfig(config);