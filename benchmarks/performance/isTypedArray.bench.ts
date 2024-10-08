import { bench, describe } from 'vitest';
import { isTypedArray as isTypedArrayToolkit_ } from 'es-toolkit';
import { isTypedArray as isTypedArrayCompatToolkit_ } from 'es-toolkit/compat';
import { isTypedArray as isTypedArrayLodash_ } from 'lodash';

const isTypedArrayToolkit = isTypedArrayToolkit_;
const isTypedArrayCompatToolkit = isTypedArrayCompatToolkit_;
const isTypedArrayLodash = isTypedArrayLodash_;

describe('isTypedArrayToolkit', () => {
  bench('es-toolkit/isTypedArray', () => {
    isTypedArrayToolkit(new Uint8Array(new ArrayBuffer(8)));
    isTypedArrayToolkit(new Uint8ClampedArray(new ArrayBuffer(8)));
    isTypedArrayToolkit(new Uint16Array(new ArrayBuffer(8)));
    isTypedArrayToolkit(new Uint32Array(new ArrayBuffer(8)));
    isTypedArrayToolkit(new BigUint64Array(new ArrayBuffer(8)));
    isTypedArrayToolkit(new Int8Array(new ArrayBuffer(8)));
    isTypedArrayToolkit(new Int16Array(new ArrayBuffer(8)));
    isTypedArrayToolkit(new Int32Array(new ArrayBuffer(8)));
    isTypedArrayToolkit(new BigInt64Array(new ArrayBuffer(8)));
    isTypedArrayToolkit(new Float32Array(new ArrayBuffer(8)));
    isTypedArrayToolkit(new Float64Array(new ArrayBuffer(8)));
  });

  bench('es-toolkit/compat/isTypedArray', () => {
    isTypedArrayCompatToolkit(new Uint8Array(new ArrayBuffer(8)));
    isTypedArrayCompatToolkit(new Uint8ClampedArray(new ArrayBuffer(8)));
    isTypedArrayCompatToolkit(new Uint16Array(new ArrayBuffer(8)));
    isTypedArrayCompatToolkit(new Uint32Array(new ArrayBuffer(8)));
    isTypedArrayCompatToolkit(new BigUint64Array(new ArrayBuffer(8)));
    isTypedArrayCompatToolkit(new Int8Array(new ArrayBuffer(8)));
    isTypedArrayCompatToolkit(new Int16Array(new ArrayBuffer(8)));
    isTypedArrayCompatToolkit(new Int32Array(new ArrayBuffer(8)));
    isTypedArrayCompatToolkit(new BigInt64Array(new ArrayBuffer(8)));
    isTypedArrayCompatToolkit(new Float32Array(new ArrayBuffer(8)));
    isTypedArrayCompatToolkit(new Float64Array(new ArrayBuffer(8)));
  });

  bench('lodash/isTypedArray', () => {
    isTypedArrayLodash(new Uint8Array(new ArrayBuffer(8)));
    isTypedArrayLodash(new Uint8ClampedArray(new ArrayBuffer(8)));
    isTypedArrayLodash(new Uint16Array(new ArrayBuffer(8)));
    isTypedArrayLodash(new Uint32Array(new ArrayBuffer(8)));
    isTypedArrayLodash(new BigUint64Array(new ArrayBuffer(8)));
    isTypedArrayLodash(new Int8Array(new ArrayBuffer(8)));
    isTypedArrayLodash(new Int16Array(new ArrayBuffer(8)));
    isTypedArrayLodash(new Int32Array(new ArrayBuffer(8)));
    isTypedArrayLodash(new BigInt64Array(new ArrayBuffer(8)));
    isTypedArrayLodash(new Float32Array(new ArrayBuffer(8)));
    isTypedArrayLodash(new Float64Array(new ArrayBuffer(8)));
  });
});
