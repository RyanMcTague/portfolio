const nextJest = require("next/jest");
const path = require("path");
const createJestConfig = nextJest({
  dir: "./",
});
/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  coverageDirectory: path.join(process.cwd(), "./coverage/pages"),
  moduleDirectories: ["node_modules", "<rootDir>/pages"],
  testEnvironment: "jest-environment-jsdom",
  roots:[
    '<rootDir>'
  ]
};
module.exports = createJestConfig(config);