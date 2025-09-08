function itemsDelay(items, collector) {
    return items.reduce((promiseChain, item, index) => {
      const delayMs = Math.pow(2, index) * 1000; // Exponential delay: 1s, 2s, 4s, ...
      return promiseChain.then(() =>
        new Promise(resolve => setTimeout(() => {
          collector.push(item);
          console.log(`Item added: "${item}" after ${delayMs / 1000}s`);
          resolve();
        }, delayMs))
      );
    }, Promise.resolve())
    .then(() => collector);
  }

  
// Example Usage (Console)

  if (require.main === module) {
    const collector = [];
    const items = ['a', 'b', 'c', 'd'];
  
    itemsDelay(items, collector)
      .then(finalArray => {
        console.log('All items added:', finalArray);
      })
      .catch(err => console.error(err));
  }
  

  // Export for Jest
  module.exports = { itemsDelay };