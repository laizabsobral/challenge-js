const {
    minTrialsTwoEggs,
    getDropSequence,
    findDropsForTarget
  } = require('./eggDrop');
  
  describe('Egg Drop - simplified tests', () => {
    test('minTrialsTwoEggs(100) should be 14', () => {
      const k = minTrialsTwoEggs(100);
      console.log('[test] k for 100 floors =', k);
      expect(k).toBe(14);
    });
  
    test('getDropSequence(14) length and coverage', () => {
      const seq = getDropSequence(14);
      console.log('[test] sequence length =', seq.length, 'last =', seq[seq.length - 1]);
      expect(seq.length).toBe(14);
      expect(seq[seq.length - 1]).toBeGreaterThanOrEqual(100);
    });
  
    test('findDropsForTarget uses <= k drops for several targets', () => {
      const floors = 100;
      const k = minTrialsTwoEggs(floors);
      const targets = [0, 1, 13, 14, 27, 50, 99, 100];
  
      for (const t of targets) {
        const drops = findDropsForTarget(floors, t);
        console.log(`[test] target=${t} => drops=${drops}`);
        expect(drops).toBeLessThanOrEqual(k);
      }
    });
  
    test('edge cases: floors 0 and 1', () => {
      expect(minTrialsTwoEggs(0)).toBe(0);
      expect(minTrialsTwoEggs(1)).toBe(1);
      expect(getDropSequence(0)).toEqual([]);
      expect(getDropSequence(1)).toEqual([1]);
      expect(findDropsForTarget(1, 0)).toBeLessThanOrEqual(1);
      expect(findDropsForTarget(1, 1)).toBeLessThanOrEqual(1);
    });
  });
  