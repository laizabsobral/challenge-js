function minTrialsTwoEggs(floors) {
    if (!Number.isInteger(floors) || floors < 0) {
      throw new TypeError('floors must be a non-negative integer');
    }
    let k = 0, sum = 0;
    while (sum < floors) {
      k += 1;
      sum += k;
    }
    return k;
  }
  
  function getDropSequence(k) {
    if (!Number.isInteger(k) || k < 0) {
      throw new TypeError('k must be a non-negative integer');
    }
    const seq = [];
    let current = 0;
    for (let i = k; i >= 1; i--) {
      current += i;
      seq.push(current);
    }
    return seq;
  }
  
  function findDropsForTarget(floors, target) {
    if (!Number.isInteger(floors) || floors < 0) {
      throw new TypeError('floors must be a non-negative integer');
    }
    if (!Number.isInteger(target) || target < 0 || target > floors) {
      throw new TypeError('target must be integer between 0 and floors inclusive');
    }
  
    const k = minTrialsTwoEggs(floors);
    const seq = getDropSequence(k);
    let lastSafe = 0;
    let drops = 0;
  
    for (const dropFloor of seq) {
      drops += 1; // drop first egg
      if (dropFloor > target) {
        const linearChecks = Math.max(0, target - lastSafe);
        drops += linearChecks;
        return drops;
      } else {
        lastSafe = Math.min(dropFloor, floors);
        if (lastSafe >= floors) return drops;
      }
    }

    return drops;
  }


// Example Usage (Console)
  if (require.main === module) {
    const floors = 100;
    const k = minTrialsTwoEggs(floors);
    const seq = getDropSequence(k);
    console.log('=== EGG DROP DEMO ===');
    console.log(`Floors: ${floors}`);
    console.log(`Minimal worst-case drops (k): ${k}`);
    console.log(`Drop sequence (first egg floors): ${seq.join(', ')}`);
  
    const demoTargets = [0, 1, 13, 14, 27, 50, 99, 100];
    for (const t of demoTargets) {
      const drops = findDropsForTarget(floors, t);
      console.log(`target=${t}  => drops used = ${drops}`);
    }
  }
  
// Export for Jest
    module.exports = {
        minTrialsTwoEggs,
        getDropSequence,
        findDropsForTarget
      };
      