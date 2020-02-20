# amex-jest-preset-react

An opinionated [Jest preset](http://facebook.github.io/jest/docs/en/configuration.html#preset-string) for React modules

For non-React projects use [amex-jest-preset](https://github.com/americanexpress/amex-jest-preset)

> Want to get paid for your contributions to `amex-jest-preset-react`?
> Send your resume to oneamex.careers@aexp.com

## Configurations

Extends [amex-jest-preset](https://github.com/americanexpress/amex-jest-preset) and adds the following configurations that are specific to testing React modules:

- [testEnvironment](https://jestjs.io/docs/en/configuration.html#testenvironment-string) tells Jest to use `jsdom` test environment as it is often used while testing React components ([amex-jest-preset](https://github.com/americanexpress/amex-jest-preset) sets `testEnvironment` to `node`)

- [moduleNameMapper](http://facebook.github.io/jest/docs/en/configuration.html#modulenamemapper-object-string-string) tells Jest to treat CSS modules as identity objects

- [setupFilesAfterEnv](http://facebook.github.io/jest/docs/en/configuration.html#setuptestframeworkscriptfile-string) is where we setup [enzyme with enzyme-adapter-react-16](http://airbnb.io/enzyme/docs/installation/react-16.html)

- [snapshotSerializers](http://facebook.github.io/jest/docs/en/configuration.html#snapshotserializers-array-string) tells Jest to use [enzyme-to-json's](https://github.com/adriantoine/enzyme-to-json) serializer

## Usage

1. Install:
```bash
npm install --save-dev amex-jest-preset-react
```
2. And in your [Jest configuration][]:
```json
...
{
  "preset": "amex-jest-preset-react"
}
...
```
And... that's it! You now have all the boilerplate Jest configurations set up for you! Running `jest` from your `npm test` script will use all these configurations!

### Extending the preset provided configuration

You can add on and/or override any values provided in this preset as you wish in your [Jest configuration][].

It should be noted that if overriding the `setupFilesAfterEnv` option you may want to extend off of the [setup file provided by amex-jest-preset-react](./jest-setup.js) in order to preserve that files' content. Otherwise you will lose anything we provide for you in [there](./jest-setup.js). Do so as follows:

```javascript
// in custom-jest-setup.js
require('amex-jest-preset-react/jest-setup');

// your own custom setup
```

## Compatibility

This package is compatible only with React 16+.

## Contributing
We welcome Your interest in the American Express Open Source Community on Github.
Any Contributor to any Open Source Project managed by the American Express Open
Source Community must accept and sign an Agreement indicating agreement to the
terms below. Except for the rights granted in this Agreement to American Express
and to recipients of software distributed by American Express, You reserve all
right, title, and interest, if any, in and to Your Contributions. Please [fill
out the Agreement](https://cla-assistant.io/americanexpress/).

Please feel free to open pull requests and see [CONTRIBUTING.md](./CONTRIBUTING.md) to learn how to get started contributing.

## License
Any contributions made under this project will be governed by the [Apache License
2.0](./LICENSE.txt).

## Code of Conduct
This project adheres to the [American Express Community Guidelines](./CODE_OF_CONDUCT.md).
By participating, you are expected to honor these guidelines.

[Jest configuration]: http://facebook.github.io/jest/docs/en/configuration.html
