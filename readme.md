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
npm i bit-consumer
```

#### Import the ES module into Node.js

```js
import {
  dataToArrayBuffer,
  dataToTypedArray,
  dataToDataView
} from 'whichever-data'
```
Got problems using ES modules? [Click here](https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js/56350495#56350495) or [read this](https://nodejs.org/api/esm.html).

#### Import the ES module into the browser or Deno

```js
import {
  dataToArrayBuffer,
  dataToTypedArray,
  dataToDataView
} from '/node_modules/whichever-data/source/whicheverData.js'
```

Cumbersome? Consider using [import maps](https://github.com/WICG/import-maps#readme) also see the [Deno specific doc.](https://deno.land/manual/linking_to_external_code/import_maps)

### Funding

If you find this useful then please consider helping me out (I'm jobless and sick). For more information visit my [GitHub sponsors page](https://github.com/sponsors/JoakimCh), my [profile](https://github.com/JoakimCh) or my [simple website](https://joakimch.github.io/funding.html).

### Documentation

#### dataToTypedArray(data, TypedArray)

Creates a `TypedArray` of the chosen type from an `Array`, another `TypedArray`, `DataView`, `ArrayBuffer` or Node.js `Buffer`. When not created from an `Array` it doesn't copy any data, instead it will create a view into the underlying `ArrayBuffer` (hence changes in the viewed data will also affect the content of this `TypedArray`).

#### dataToArrayBuffer(data)

Copies the viewed part of the underlying `ArrayBuffer` from the supplied object (e.g. `DataView`, `TypedArray` or Node.js `Buffer`). Or if supplied an array it treats it like unsigned bytes and creates the `ArrayBuffer` from it. If supplied an `ArrayBuffer` it creates a copy of it.

#### dataToDataView(data)

Creates a `DataView` from a `TypedArray`, `DataView`, `ArrayBuffer`, Node.js `Buffer` or an `Array` (of unsigned bytes). When not created from an `Array` it doesn't copy any data, instead it will create a view into the underlying `ArrayBuffer` (hence changes in the viewed data will also affect the content of this `DataView`).

### The bottom

You reached the bottom, good. Most people just skim the top... But I guess that you have an attention to detail and a higher intelligence than the average person. I like you! 😃

To get back up [click here](#whichever-data) or find your own way.