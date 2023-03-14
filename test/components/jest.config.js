const nextJest = require("next/jest");
const path = require("path");
const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  moduleDirectories: ["node_modules", "<rootDir>/components"],
  collectCoverage: true,
  coverageDirectory: path.join(process.cwd(), "./coverage/compoents"),
  testEnvironment: "jest-environment-jsdom",
  roots:[
    '<rootDir>'
  ],
};
module.exports = createJestConfig(config);