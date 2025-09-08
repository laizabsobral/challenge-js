function maxCarrots(carrotTypes, capacity) {
    if (!Array.isArray(carrotTypes)) throw new TypeError("carrotTypes can be only an array");
    if (!Number.isInteger(capacity) || capacity < 0) throw new TypeError("capacity can be only a non-negative integer");

    const dp = Array(capacity + 1).fill(0);
  
    for (let c = 1; c <= capacity; c++) {
      for (const carrot of carrotTypes) {
        if (carrot.kg <= c) {
          dp[c] = Math.max(dp[c], dp[c - carrot.kg] + carrot.price);
        }
      }
    }
  
    return dp[capacity];
  }
  
// Example Usage (Console)
  if (require.main === module) {
    const carrotTypes = [
      { kg: 5, price: 100 },
      { kg: 7, price: 150 },
      { kg: 3, price: 70 }
    ];
    const capacity = 36;
  
    const maxValue = maxCarrots(carrotTypes, capacity);
    console.log(`Valor máximo possível para a capacidade ${capacity}kg: ${maxValue}`);
  }
  

// Export for Jest
  module.exports = { maxCarrots };
  