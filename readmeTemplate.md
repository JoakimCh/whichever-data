# whichever-data

### Description
An [ES module](https://flaviocopes.com/es-modules/) with some functions making it easier to accept a wide range of binary-data holding objects like Array, TypedArray, DataView, ArrayBuffer and Node.js's Buffer as input without having to actually know which of them were used as the input.

### Example

```js
import {dataToTypedArray} from 'whichever-data'

function giveMeAnyData(data) {
  const uint32array = dataToTypedArray(data, Uint32Array)
  // do something amazing here
}
```

### Supported platforms

* [Node.js](https://nodejs.org)
* [Deno](https://deno.land)
* A proper browser ([Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) based usually) or just [Babel](https://babeljs.io) the shit out of it if you need legacy support.

### How to use

#### Install using [NPM](https://www.npmjs.com/)

```shell
npm i whichever-data
```

#### Import the ES module into Node.js

```js
import {
  dataToArrayBuffer,
  dataToTypedArray,
  dataToDataView,
  compareData
} from 'whichever-data'
```
Got problems using ES modules? [Click here](https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js/56350495#56350495) or [read this](https://nodejs.org/api/esm.html).

#### Import the ES module into the browser or Deno

```js
import {
  dataToArrayBuffer,
  dataToTypedArray,
  dataToDataView,
  compareData
} from '/node_modules/whichever-data/source/whicheverData.js'
```

Cumbersome? Consider using [import maps](https://github.com/WICG/import-maps#readme) so you can import it just like in Node.js. Also see the [Deno specific documentation](https://deno.land/manual/linking_to_external_code/import_maps) for import maps if using Deno.

### Funding

If you find this useful then please consider helping me out (I'm jobless and sick). For more information visit my [GitHub sponsors page](https://github.com/sponsors/JoakimCh), my [profile](https://github.com/JoakimCh) or my [simple website](https://joakimch.github.io/funding.html).

# Auto-generated API documentation (from JSDoc)

{{>main}}

### The bottom

You reached the bottom, good. Most people just skim the top... But I guess that you have an attention to detail and a higher intelligence than the average person. I like you! 😃

To get back up [click here](#whichever-data) or find your own way.
