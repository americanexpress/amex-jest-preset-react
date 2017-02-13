const fs = require('fs');

const basePreset = require('one-amex-jest-preset/jest-preset.json');
const reactSpecificPreset = require('../react-specific-preset.json');
const combinedPreset = Object.assign({}, basePreset, reactSpecificPreset);

fs.writeFileSync('jest-preset.json', JSON.stringify(combinedPreset, null, 2), 'utf8');
