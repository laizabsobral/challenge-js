const { maxCarrots } = require("./maxCarrots");

describe("maxCarrots - Unlimited Carrot Backpacks", () => {
  test("prime example", () => {
    const carrotTypes = [
      { kg: 5, price: 100 },
      { kg: 7, price: 150 },
      { kg: 3, price: 70 },
    ];
    const capacity = 36;

    const maxValue = maxCarrots(carrotTypes, capacity);
    console.log("[TEST] Capacity:", capacity);
    console.log("[TEST] Maximum calculated value:", maxValue);

    expect(maxValue).toBe(840);
  });

  test("Capacity smaller than smaller carrot", () => {
    const carrotTypes = [
      { kg: 5, price: 100 },
      { kg: 7, price: 150 },
    ];
    const capacity = 3;

    const maxValue = maxCarrots(carrotTypes, capacity);

    console.log("[TEST] Small capacity:", capacity);
    console.log("[TEST] Calculated maximum value:", maxValue);
    expect(maxValue).toBe(0);
  });

  test("Capacity exactly a multiple of a carrot", () => {
    const carrotTypes = [{ kg: 3, price: 50 }];
    const capacity = 9;

    const maxValue = maxCarrots(carrotTypes, capacity);

    console.log("[TEST] Multiple capacity:", capacity);
    console.log("[TEST] Calculated maximum value:", maxValue);
    expect(maxValue).toBe(150); // 3 carrots of 3kg = 150
  });

  test("Large capacity with various typess", () => {
    const carrotTypes = [
      { kg: 2, price: 30 },
      { kg: 5, price: 80 },
      { kg: 3, price: 50 },
    ];
    const capacity = 10;

    const maxValue = maxCarrots(carrotTypes, capacity);

    console.log("[TEST] Capacity 10kg:", capacity);
    console.log("[TEST] Maximum calculated value:", maxValue);
    expect(maxValue).toBe(160);
  });
});
