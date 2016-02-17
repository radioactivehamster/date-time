# date-time
> An ISO 8601 extended &amp; IETF compliant UTC (Zulu) timestamp generator.

[![GitHub license][LICENSE BADGE]][LICENSE PAGE] [![Build Status][BUILD BADGE]][BUILD PAGE]

### Installation

```sh
npm install --save @radioactivehamster/date-time
```

### Usage

```js
var dateTime = require('date-time');
var timestamp = dateTime(); // > "2015-05-27T04:06:41Z"
```

Optionally you can seed the function with a `Date` object.

```js
var dateTime = require('date-time');
var timestamp = dateTime(new Date()); // > "2015-05-27T04:06:41Z"
```

Easy-peasy mac-n-cheesy!

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.

[BUILD BADGE]: https://travis-ci.org/radioactivehamster/date-time.svg?branch=master
[BUILD PAGE]: https://travis-ci.org/radioactivehamster/date-time
[LICENSE BADGE]: https://img.shields.io/github/license/radioactivehamster/date-time.svg
[LICENSE PAGE]: https://github.com/radioactivehamster/date-time/blob/master/LICENSE
