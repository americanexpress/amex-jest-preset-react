module.exports = {
  setupTestFrameworkScriptFile: require.resolve('./jest-setup'),
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!test-results/**'
  ]
}
