

// Where every number is the sum of the two previous ones.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

function fibonacciGenerator(n) {

  let output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    let number;
    for (var i = 2; i < n; i++) {
      number = output[output.length - 1] + output[output.length - 2];
      output.push(number);
    }
  }
  return output;

}
console.log(fibonacciGenerator(15));
