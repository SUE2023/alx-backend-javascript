export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const int8Array = new Int8Array(length);
  int8Array[position] = value;

  return int8Array.buffer;
}
