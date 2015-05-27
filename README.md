# date-time
An ISO 8601 extended &amp; IETF compliant UTC (Zulu) timestamp generator.


### Installation

```sh
npm install --save @radioactivehamster/date-time
```

### Usage

```js
var dateTime = require('date-time');
var timestamp = dateTime();
// > "2015-05-27T04:06:41Z"
```

Optionally you can seed the function with a `Date` object.

```js
var dateTime = require('date-time');
var timestamp = dateTime(new Date());
// > "2015-05-27T04:06:41Z"
```

Easy-peasy mac-n-cheesy!
