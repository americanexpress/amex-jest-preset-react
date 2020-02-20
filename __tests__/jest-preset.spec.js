test('a jest configuration is exported', () => {
  const jestPreset = require('../jest-preset');

  expect(jestPreset).toMatchSnapshot({
    setupFilesAfterEnv: expect.any(Array),
    testResultsProcessor: expect.any(String),
    cache: expect.any(Boolean)
  });
});