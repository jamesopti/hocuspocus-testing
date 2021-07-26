export default {
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  extensionsToTreatAsEsm: ['.ts'],
  rootDir: '.',
  testRegex: '(?:src|test)/.*\\.(?:e2e-)?spec\\.ts$',
  testTimeout: 30000,
  restoreMocks: true,
  transformIgnorePatterns: ['node_modules/(?!@hocuspocus/)'],
  transform: {
    'node_modules/@hocuspocus/.+\\.(j|t)sx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  setupFiles: [],
}
