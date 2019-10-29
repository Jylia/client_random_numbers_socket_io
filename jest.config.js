module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy",
    },
    testPathIgnorePatterns : [
      "socket.io-client"
    ],
    setupFiles: [ "jest-canvas-mock" ],

    clearMocks: true,
    collectCoverage: true,
  };
  