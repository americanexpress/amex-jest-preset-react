test('a jest configuration is exported', () => {
  const jestPreset = require('../jest-preset');

  expect(jestPreset).toMatchSnapshot({
    setupTestFrameworkScriptFile: expect.any(String),
    testResultsProcessor: expect.any(String),
    cache: expect.any(Boolean)
  });
});