one-amex-jest-preset-react
========

An opinionated [Jest preset](http://facebook.github.io/jest/docs/configuration.html#preset-string) for One Amex React modules

For non-React modules use [one-amex-jest-preset](****.com/stash/projects/UIE/repos/one-amex-jest-preset/browse)

Configurations
------------

Extends [one-amex-jest-preset](****.com/stash/projects/UIE/repos/one-amex-jest-preset/browse) and adds the following configurations that are specific to testing React modules:

- [snapshotSerializers](http://facebook.github.io/jest/docs/configuration.html#snapshotserializers-array-string) tells Jest to use [enzyme-to-json's](https://github.com/adriantoine/enzyme-to-json) serializer

- [moduleNameMapper](http://facebook.github.io/jest/docs/configuration.html#modulenamemapper-object-string-string) tells Jest to treat CSS modules as identity objects

Usage
-----

Install with npm by running `npm install --save-dev one-amex-jest-preset-react`

And in your package.json:
```
...
"jest": {
  "preset": "one-amex-jest-preset-react"
}
...
```
And... that's it! You now have all the boilerplate Jest configurations set up for you! Running `jest` from your `npm test` script will use all these configurations!

**Note:** You can (but better have a good reason to) override these configurations by [providing your own](http://facebook.github.io/jest/docs/configuration.html) `jest` configuration in `package.json`

If you feel that you have a configuration that is applicable to everyone [open up a PR!](****.com/stash/projects/UIE/repos/one-amex-jest-preset-react/pull-requests)
