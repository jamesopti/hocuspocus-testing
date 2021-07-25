export default {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '(?:src|test)/.*\\.(?:e2e-)?spec\\.ts$',
  testTimeout: 30000,
  restoreMocks: true,
  transformIgnorePatterns: ['node_modules/(?!@hocuspocus/)'],
  transform: {
    'node_modules/@hocuspocus/.+\\.(j|t)sx?$': 'ts-jest',
    // '^.+\\.(t|j)s$': 'babel-jest',
  },
  testEnvironment: 'node',
  setupFiles: [],
}
