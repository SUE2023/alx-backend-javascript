// weakMap.js
const weakMap = new WeakMap();
export { weakMap };

// queryAPI.js
import { weakMap } from './weakMap.js';

export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

// Example usage:
// import { queryAPI } from './queryAPI.js';

// const endpoint = { protocol: 'http', name: 'getUsers' };

// try {
//   for (let i = 0; i < 6; i++) {
//     queryAPI(endpoint);
//   }
// } catch (error) {
//   console.error(error.message); // Output: Endpoint load is high
// }

