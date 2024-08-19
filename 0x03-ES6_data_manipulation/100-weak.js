// Create and export the WeakMap instance
export const weakMap = new WeakMap();

// Create and export the queryAPI function
export function queryAPI(endpoint) {
  // Get current count for endpoint from the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the WeakMap with new coun
  weakMap.set(endpoint, count);

  // Check if the count is >= 5 and throw an error if it is
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

