function detectDuplicates(arr) {
    const values = new Set();
    const duplicates = new Set();
  
    for (const item of arr) {
      if (values.has(item)) {
        duplicates.add(item);
      } else {
        values.add(item);
      }
    }
    return Array.from(duplicates);
  }
  

// Example Usage (Console)
const exampleArrays = [
  [1, 2, 3, 2, 4, 5, 1],
  ['a', 'b', 'a', 'c', 'd', 'b'],
  [10, 20, 30]
];

exampleArrays.forEach((arr, index) => {
  const result = detectDuplicates(arr);
  console.log(`Example ${index + 1}: [${arr}] => Duplicates: [${result}]`);
});

// Export for Jest
  module.exports = detectDuplicates;
  