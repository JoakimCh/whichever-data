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

<a name="module_whichever-data"></a>

## whichever-data
An ES module with some functions making it easier to accept a wide range of binary-data holding objects like Array, TypedArray, DataView, ArrayBuffer and Node.js's Buffer as input without having to actually know which of them were used as the input.


* [whichever-data](#module_whichever-data)
    * [.dataToArrayBuffer(data)](#module_whichever-data.dataToArrayBuffer) ⇒ <code>ArrayBuffer</code>
    * [.dataToTypedArray(data, TypedArray)](#module_whichever-data.dataToTypedArray) ⇒ <code>TypedArray</code>
    * [.dataToDataView(data)](#module_whichever-data.dataToDataView) ⇒ <code>DataView</code>
    * [.compareData(a, b)](#module_whichever-data.compareData) ⇒ <code>Boolean</code>

<a name="module_whichever-data.dataToArrayBuffer"></a>

### whichever.dataToArrayBuffer(data) ⇒ <code>ArrayBuffer</code>
Copies the viewed part of the underlying `ArrayBuffer` from the supplied object (e.g. `DataView`, `TypedArray` or Node.js `Buffer`). Or if supplied an array it treats it like unsigned bytes and creates the `ArrayBuffer` from it. If supplied an `ArrayBuffer` it creates a copy of it.

**Kind**: static method of [<code>whichever-data</code>](#module_whichever-data)  
**Returns**: <code>ArrayBuffer</code> - A new ArrayBuffer.  
**Params**

- data <code>ArrayBuffer</code> | <code>ArrayBufferView</code> | <code>Buffer</code> | <code>Array.&lt;number&gt;</code>

<a name="module_whichever-data.dataToTypedArray"></a>

### whichever.dataToTypedArray(data, TypedArray) ⇒ <code>TypedArray</code>
Creates a `TypedArray` of the chosen type from an `Array`, another `TypedArray`, `DataView`, `ArrayBuffer` or Node.js `Buffer`. When not created from an `Array` it doesn't copy any data, instead it will create a view into the underlying `ArrayBuffer` (hence changes in the viewed data will also affect the content of this `TypedArray`).

**Kind**: static method of [<code>whichever-data</code>](#module_whichever-data)  
**Returns**: <code>TypedArray</code> - A new TypedArray.  
**Params**

- data <code>ArrayBuffer</code> | <code>ArrayBufferView</code> | <code>Buffer</code> | <code>Array.&lt;number&gt;</code>
- TypedArray <code>TypedArray</code> - The TypedArray constructor to use, e.g. Uint8Array.

<a name="module_whichever-data.dataToDataView"></a>

### whichever.dataToDataView(data) ⇒ <code>DataView</code>
Creates a `DataView` from a `TypedArray`, `DataView`, `ArrayBuffer`, Node.js `Buffer` or an `Array` (of unsigned bytes). When not created from an `Array` it doesn't copy any data, instead it will create a view into the underlying `ArrayBuffer` (hence changes in the viewed data will also affect the content of this `DataView`).

**Kind**: static method of [<code>whichever-data</code>](#module_whichever-data)  
**Returns**: <code>DataView</code> - A new DataView.  
**Params**

- data <code>ArrayBuffer</code> | <code>ArrayBufferView</code> | <code>Buffer</code> | <code>Array.&lt;number&gt;</code>

<a name="module_whichever-data.compareData"></a>

### whichever.compareData(a, b) ⇒ <code>Boolean</code>
Checks if the data given to it is the same binary data. Accepts `Array`, `TypedArray`, `DataView`, `ArrayBuffer` or Node.js `Buffer` as input. If comparing two Arrays then normal array comparison is done, but if comparing one Array against data of another type then the array is treated as an array of unsigned bytes.

**Kind**: static method of [<code>whichever-data</code>](#module_whichever-data)  
**Returns**: <code>Boolean</code> - true or false  
**Params**

- a <code>ArrayBuffer</code> | <code>ArrayBufferView</code> | <code>Buffer</code> | <code>Array.&lt;number&gt;</code>
- b <code>ArrayBuffer</code> | <code>ArrayBufferView</code> | <code>Buffer</code> | <code>Array.&lt;number&gt;</code>


### The bottom

You reached the bottom, good. Most people just skim the top... But I guess that you have an attention to detail and a higher intelligence than the average person. I like you! 😃

To get back up [click here](#whichever-data) or find your own way.
