
import {
  dataToArrayBuffer,
  dataToTypedArray,
  dataToDataView
} from '../source/whicheverData.js'

export default function() {
  for (const key in testDataAs) {
    verifyTestData(testDataAs[key])
  }
}

// The same data in various data holding objects
const testDataAs = {array: [1,2,3,4]}
testDataAs.uint8array = new Uint8Array(testDataAs.array)
testDataAs.arrayBuffer = testDataAs.uint8array.buffer
testDataAs.uint32array = new Uint32Array(testDataAs.arrayBuffer)
testDataAs.buffer = Buffer.from(testDataAs.array)
testDataAs.dataView = new DataView(testDataAs.arrayBuffer)

function verifyTestData(data) {
  let uint32array = dataToTypedArray(data, Uint32Array)
  if (Array.isArray(data)) {
    assert(uint32array[0], 1)
    assert(uint32array.length, 4)
  } else {
    assert(uint32array[0], 0x04030201) // Uint32Array's are little-endian
    assert(uint32array.length, 1)
  }
  uint32array = new Uint32Array(dataToArrayBuffer(data))
  assert(uint32array[0], 0x04030201)
  assert(uint32array.length, 1)
  const dataView = dataToDataView(data)
  assert(dataView.byteLength, 4)
  assert(dataView.getUint32(0), 0x01020304) // returned as big-endian
}

function assert(...arg) {
  switch (arg.length) {
    case 1: if (!arg[0]) throw Error('Assertion failed!'); break
    case 2:
    case 3: if (arg[0] !== arg[1]) throw Error(arg[0]+' !== '+arg[1]+' '+(arg[2] || 'Assertion failed!')); break
  }
}
