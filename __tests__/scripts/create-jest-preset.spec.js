const fs = require('fs');

const mockBasePreset = {
  baseConfig: {
    a: 'a',
    b: 'b',
  },
};

const mockReactSpecificPreset = {
  reactSpecific: {
    c: 'c',
    d: 'd',
  },
};

jest.mock('one-amex-jest-preset/jest-preset.json', () => mockBasePreset);

jest.mock('../../react-specific-preset.json', () => mockReactSpecificPreset);

fs.writeFileSync = jest.fn();

describe('create-jest-preset', () => {
  it('should combine merge one-amex-jest-preset.json with react-specific-preset.json and write it out to a file named jest-preset.json', () => {
    require('../../scripts/create-jest-preset');

    const mergedJson = Object.assign({}, mockBasePreset, mockReactSpecificPreset);
    expect(fs.writeFileSync).toHaveBeenCalledWith('jest-preset.json', JSON.stringify(mergedJson, null, 2));
  });
});
