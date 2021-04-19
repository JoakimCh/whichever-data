
import {assert, nodejs} from './shared.js'
import {
  dataToArrayBuffer,
  dataToTypedArray,
  dataToDataView,
  compareData
} from '../source/whicheverData.js'

// The same data in various data holding objects
const testDataAs = {array: [1,2,3,4]}
testDataAs.uint8array = new Uint8Array(testDataAs.array)
testDataAs.arrayBuffer = testDataAs.uint8array.buffer
testDataAs.uint32array = new Uint32Array(testDataAs.arrayBuffer)
if (nodejs) testDataAs.buffer = Buffer.from(testDataAs.array)
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
  assert(compareData(testDataAs.array, testDataAs.uint8array), true)
  assert(compareData(testDataAs.uint32array, testDataAs.uint8array), true)
  if (nodejs) assert(compareData(testDataAs.buffer, testDataAs.arrayBuffer), true)
  assert(compareData([1234, 4567], [1234, 4567]), true)
  assert(compareData([1234, 4567], [1234, 4568]), false)
}

for (const key in testDataAs) {
  verifyTestData(testDataAs[key])
}
