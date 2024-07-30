// weakMap.js
const weakMap = new WeakMap();
export { weakMap };

// queryAPI.js
import { weakMap } from './weakMap.js';

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

