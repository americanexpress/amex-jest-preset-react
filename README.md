amex-jest-preset-react
========

An opinionated [Jest preset](http://facebook.github.io/jest/docs/configuration.html#preset-string) for React modules

For non-React modules use [amex-jest-preset](https://github.com/americanexpress/amex-jest-preset)

## Configurations

Extends [amex-jest-preset](https://github.com/americanexpress/amex-jest-preset) and adds the following configurations that are specific to testing React modules:

- [snapshotSerializers](http://facebook.github.io/jest/docs/configuration.html#snapshotserializers-array-string) tells Jest to use [enzyme-to-json's](https://github.com/adriantoine/enzyme-to-json) serializer

- [moduleNameMapper](http://facebook.github.io/jest/docs/configuration.html#modulenamemapper-object-string-string) tells Jest to treat CSS modules as identity objects

- [enzyme-adapter-react-16](http://airbnb.io/enzyme/docs/installation/react-16.html) configures enzyme for React 16

## Usage

1. Install:
```bash
npm install --save-dev amex-jest-preset-react
```
2. And in your package.json:
```json
...
"jest": {
    "preset": "amex-jest-preset-react"
}
...
```
And... that's it! You now have all the boilerplate Jest configurations set up for you! Running `jest` from your `npm test` script will use all these configurations!

**Note:** You can (but better have a good reason to) override these configurations by [providing your own](http://facebook.github.io/jest/docs/configuration.html) `jest` configuration

## Compatability

Version 4.x of this package is compatible only with React 16.

## Contributing
We welcome Your interest in the American Express Open Source Community on Github.
Any Contributor to any Open Source Project managed by the American Express Open
Source Community must accept and sign an Agreement indicating agreement to the
terms below. Except for the rights granted in this Agreement to American Express
and to recipients of software distributed by American Express, You reserve all
right, title, and interest, if any, in and to Your Contributions. Please [fill
out the Agreement](http://goo.gl/forms/mIHWH1Dcuy).

## License
Any contributions made under this project will be governed by the [Apache License
2.0](https://github.com/americanexpress/amex-jest-preset-react/blob/master/LICENSE.txt).

## Code of Conduct
This project adheres to the [American Express Community Guidelines](https://github.com/americanexpress/amex-jest-preset-react/wiki/Code-of-Conduct).
By participating, you are expected to honor these guidelines.
