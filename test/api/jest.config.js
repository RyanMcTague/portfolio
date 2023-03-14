const nextJest = require("next/jest");
const path = require("path");
const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  moduleDirectories: ["node_modules", "<rootDir>/pages/api"],
  collectCoverage: true,
  coverageDirectory: path.join(process.cwd(), "./coverage/components"),
  testEnvironment: "node",
  roots:[
    '<rootDir>'
  ],
};
module.exports = createJestConfig(config);