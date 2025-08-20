function generateSessionId() {
  return crypto.randomUUID();
}

function generatePairCode(length = 6) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let pairCode = '';
  for (let i = 0; i < length; i++) {
    pairCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pairCode;
}

// Example usage:
const sessionId = generateSessionId();
const pairCode = generatePairCode();
console.log(`Session ID: ${sessionId}`);
console.log(`Pair Code: ${pairCode}`);
