const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(`one: ${one}, two: ${two}, rest: ${rest}`);