function sum(number1, number2) {
  //console.log('"The sum of ' + number1 + ' and ' + number2 + ' is ' + (number1 + number2) + '."');
  return number1 + number2;
}

function multiply(number1, number2) {
  //console.log('"The product of ' + number1 + ' and ' + number2 + ' is ' + (number1 * number2) + '."');
  return number1 * number2;
}

function sumAndMultiply(number1, number2, number3) {
  var add = sum(sum(number1, number2), number3);
  var product = multiply(multiply(number1, number2), number3);
  console.log('"' + number1 + ' and ' + number2 + ' and ' + number3 + ' sum to ' + add + '."');
  console.log('"The numbers ' + number1 + ' and ' + number2 + ' and ' + number3 + ' have a product of ' + product + '."');
  return [add, product];
}

function sumArray(numberArray) {
  var total = 0;
  for (i = 0; i < numberArray.length; i++) {
    total += numberArray[i];
  }
  console.table(numberArray);
  console.log(numberArray.join(', ') + ' was passed in as an array of numbers, and ' + total + ' is their sum.');
  return total;
}
