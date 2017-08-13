@radioactivehamster/date-time
=============================
> An ISO 8601 extended & IETF compliant UTC (Zulu) timestamp generator.

[![npm (scoped)][NPM VERSION BADGE]][NPM PAGE] [![GitHub license][LICENSE BADGE]][LICENSE PAGE] [![Build Status][BUILD BADGE]][BUILD PAGE]

Installation
------------
```sh
npm install --save @radioactivehamster/date-time
```

Usage
-----
```js
const dateTime = require('@radioactivehamster/date-time');

dateTime(); // > "2017-08-13T22:09:20Z"
```

Optionally you can seed the function with a `Date` object.

```js
const dateTime = require('@radioactivehamster/date-time');

dateTime(new Date()); // > "2017-08-13T22:09:20Z"
```

Easy-peasy mac-n-cheesy!

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.

[BUILD BADGE]: https://travis-ci.org/radioactivehamster/date-time.svg?branch=master
[BUILD PAGE]: https://travis-ci.org/radioactivehamster/date-time
[LICENSE BADGE]: https://img.shields.io/github/license/radioactivehamster/date-time.svg
[LICENSE PAGE]: https://github.com/radioactivehamster/date-time/blob/master/LICENSE
[NPM PAGE]: https://www.npmjs.com/package/@radioactivehamster/date-time
[NPM VERSION BADGE]: https://img.shields.io/npm/v/@radioactivehamster/date-time.svg
