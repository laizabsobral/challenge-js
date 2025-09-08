const validateBrackets = require('./validateBrackets');

describe('Bracket Validation Tests', () => {
  test('Returns true for balanced brackets "{[]}"', () => {
    expect(validateBrackets("{[]}")).toBe(true);
  });

  test('Returns false for unbalanced brackets "{(])}"', () => {
    expect(validateBrackets("{(])}")).toBe(false);
  });

  test('Returns false for unbalanced brackets "{([)]}"', () => {
    expect(validateBrackets("{([)]}")).toBe(false);
  });

  test('Returns true for an empty string', () => {
    expect(validateBrackets("")).toBe(true);
  });

  test('Returns false for a string with only closing bracket "}"', () => {
    expect(validateBrackets("}")).toBe(false);
  });
});
