export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    "^.+\\.jsx?$": ["babel-jest", { presets: ["@babel/preset-react"] }]
  },
  extensionsToTreatAsEsm: [".jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};
