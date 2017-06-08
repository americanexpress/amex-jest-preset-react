/*
 * Copyright (c) 2017 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

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

jest.mock('amex-jest-preset/jest-preset.json', () => mockBasePreset);

jest.mock('../../react-specific-preset.json', () => mockReactSpecificPreset);

fs.writeFileSync = jest.fn();

describe('create-jest-preset', () => {
  it('should combine merge one-amex-jest-preset.json with react-specific-preset.json and write it out to a file named jest-preset.json', () => {
    require('../../scripts/create-jest-preset');

    const mergedJson = Object.assign({}, mockBasePreset, mockReactSpecificPreset);
    expect(fs.writeFileSync).toHaveBeenCalledWith('jest-preset.json', JSON.stringify(mergedJson, null, 2));
  });
});
