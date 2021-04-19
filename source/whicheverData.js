/**
 * An ES module with some functions making it easier to accept a wide range of binary-data holding objects like Array, TypedArray, DataView, ArrayBuffer and Node.js's Buffer as input without having to actually know which of them were used as the input.
 * @module whichever-data
 * @typicalname whichever
 */
/**
 * @typedef {ArrayBufferView} Buffer
 * @ignore
 * Node.js's Buffer (a subclass of JavaScript's Uint8Array).
 */

/**
 * Copies the viewed part of the underlying `ArrayBuffer` from the supplied object (e.g. `DataView`, `TypedArray` or Node.js `Buffer`). Or if supplied an array it treats it like unsigned bytes and creates the `ArrayBuffer` from it. If supplied an `ArrayBuffer` it creates a copy of it.
 * @param {(ArrayBuffer|ArrayBufferView|Buffer|number[])} data
 * @returns {ArrayBuffer} A new ArrayBuffer.
 */
export function dataToArrayBuffer(data) {
  const uint8array = dataToTypedArray(data, Uint8Array)
  // slice creates a copy of the viewed part of the underlying ArrayBuffer
  return uint8array.buffer.slice(uint8array.byteOffset, uint8array.byteOffset + uint8array.byteLength)
}

/**
 * Creates a `TypedArray` of the chosen type from an `Array`, another `TypedArray`, `DataView`, `ArrayBuffer` or Node.js `Buffer`. When not created from an `Array` it doesn't copy any data, instead it will create a view into the underlying `ArrayBuffer` (hence changes in the viewed data will also affect the content of this `TypedArray`).
 * @param {(ArrayBuffer|ArrayBufferView|Buffer|number[])} data
 * @param {TypedArray} TypedArray The TypedArray constructor to use, e.g. Uint8Array.
 * @returns {TypedArray} A new TypedArray.
 */
export function dataToTypedArray(data, TypedArray) {
  let typedArray
  if (data instanceof ArrayBuffer || Array.isArray(data)) {
    typedArray = new TypedArray(data)
  } else if (globalThis.Buffer && data instanceof Buffer) { // Node.js Buffer
    typedArray = new TypedArray(data.buffer, data.byteOffset, data.length / TypedArray.BYTES_PER_ELEMENT)
  } else if (ArrayBuffer.isView(data)) { // DataView, TypedArray or Node.js Buffer
    typedArray = new TypedArray(data.buffer, data.byteOffset, data.byteLength / TypedArray.BYTES_PER_ELEMENT)
  } else {
    throw Error('Data is not an Array, ArrayBuffer, TypedArray, DataView or a Node.js Buffer.')
  }
  return typedArray
}

/**
 * Creates a `DataView` from a `TypedArray`, `DataView`, `ArrayBuffer`, Node.js `Buffer` or an `Array` (of unsigned bytes). When not created from an `Array` it doesn't copy any data, instead it will create a view into the underlying `ArrayBuffer` (hence changes in the viewed data will also affect the content of this `DataView`).
 * @param {(ArrayBuffer|ArrayBufferView|Buffer|number[])} data
 * @returns {DataView} A new DataView.
 */
export function dataToDataView(data) {
  if (Array.isArray(data)) {
    return new DataView(new Uint8Array(data).buffer)
  } else if (data instanceof ArrayBuffer) {
    return new DataView(data)
  } else if (globalThis.Buffer && data instanceof Buffer) { // Node.js Buffer
    return new DataView(data.buffer, data.byteOffset, data.length)
  } else if (ArrayBuffer.isView(data)) { // DataView, TypedArray or Node.js Buffer
    return new DataView(data.buffer, data.byteOffset, data.byteLength)
  } else {
    throw Error('Data is not an Array, ArrayBuffer, TypedArray, DataView or a Node.js Buffer.')
  }
}

/**
 * Checks if the data given to it is the same binary data. Accepts `Array`, `TypedArray`, `DataView`, `ArrayBuffer` or Node.js `Buffer` as input. If comparing two Arrays then normal array comparison is done, but if comparing one Array against data of another type then the array is treated as an array of unsigned bytes.
 * @param {(ArrayBuffer|ArrayBufferView|Buffer|number[])} a
 * @param {(ArrayBuffer|ArrayBufferView|Buffer|number[])} b
 * @returns {Boolean} true or false
 */
export function compareData(a, b) {
  if (!(Array.isArray(a) && Array.isArray(b))) {
    a = dataToTypedArray(a, Uint8Array) // it's just a view of the buffer, not a copy
    b = dataToTypedArray(b, Uint8Array)
  }
  if (a.length != b.length) return false
  return a.every((val, i) => val == b[i])
} // ToDo: For better performance consider this: https://stackoverflow.com/a/52181275/4216153
