jest.setTimeout(40000);

const itemsModule = require('./itemsDelay');

const itemsDelay =
  (itemsModule && itemsModule.itemsDelay) ||
  itemsModule.default ||
  itemsModule;

if (typeof itemsDelay !== 'function') {
  throw new Error(
    'itemsDelay import failed. Expected a function but got: ' + typeof itemsDelay
  );
}

describe('itemsDelay function with console logs and timing (includes 8s for item d)', () => {
  test('should add items to collector in correct order and log elapsed times (1+2+4+8 = 15s)', async () => {
    const collector = [];
    const items = ['a', 'b', 'c', 'd']; // delays: 1s, 2s, 4s, 8s => total 15s

    const expectedTotalSeconds = items
      .map((_, idx) => Math.pow(2, idx))
      .reduce((s, v) => s + v, 0); // 1 + 2 + 4 + 8 = 15

    console.log(`Expected total delay (s): ${expectedTotalSeconds}`);
    const testStart = Date.now();

    const result = await itemsDelay(items, collector);

    const testEnd = Date.now();
    const elapsedSeconds = ((testEnd - testStart) / 1000).toFixed(2);
    const elapsedSecondsNum = parseFloat(elapsedSeconds);

    console.log('Final collector:', collector);
    console.log(`Total elapsed time (sec): ${elapsedSeconds}`);


    expect(result).toEqual(items);
    expect(collector).toEqual(items);

    const marginSeconds = 0.5;
    expect(elapsedSecondsNum).toBeGreaterThanOrEqual(expectedTotalSeconds - marginSeconds);
  });

});
