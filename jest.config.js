export default {
  extensionsToTreatAsEsm: ['.ts'],
  rootDir: '.',
  testRegex: '(?:src|test)/.*\\.(?:e2e-)?spec\\.ts$',
  testTimeout: 30000,
  restoreMocks: true,
  transformIgnorePatterns: ['node_modules/(?!@hocuspocus/)'],
  transform: {
    '^.+\\.(t|j)s$': 'babel-jest',
  },
  testEnvironment: 'node',
  setupFiles: [],
}
