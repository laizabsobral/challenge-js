function validateBrackets(input) {
  const pendingBrackets = [];
  const bracketPairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (const char of input) {
    if (bracketPairs[char]) {
      pendingBrackets.push(char);
    } else if (Object.values(bracketPairs).includes(char)) {
      if (bracketPairs[pendingBrackets.pop()] !== char) {
        return false;
      }
    }
  }

  return pendingBrackets.length === 0;
}

// Example Usage (Console)

const examples = ["{[]}", "{(])}", "{([)]}", "", "}"];

examples.forEach((example) => {
  const result = validateBrackets(example);
  console.log(`Input: "${example}" => Balanced: ${result}`);
});

// Export for Jest
module.exports = validateBrackets;
