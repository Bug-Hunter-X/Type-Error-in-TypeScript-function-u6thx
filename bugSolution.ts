function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number | string): number {
  if (typeof b === 'string') {
    return a + parseInt(b);
  } else {
    return a + b;
  }
}

let result1 = add(1, 2); // Correct
let result2 = addSafe(1, "2"); // Correct
let result3 = addSafe(1, 2); //Correct