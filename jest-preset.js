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

const basePreset = require('amex-jest-preset');
const reactSpecificPreset = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [require.resolve('./jest-setup')],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!test-results/**'
  ]
};

module.exports = Object.assign({}, basePreset, reactSpecificPreset);
