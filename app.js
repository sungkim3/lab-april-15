// function yell(aString) {
//  var yellEl = document.getElementByID(‘yellElement’);
//  yellEl.textContent = (aString.toUpperCase() + ‘!!!!!’);
// }

function sum(number1, number2) {
  var sumFn = document.getElementById('sumFunction');
  sumFn.textContent = ('The sum of ' + number1 + ' and ' + number2 + ' is ' + (number1 + number2) + '.');
  return number1 + number2;
}

function multiply(number1, number2) {
  var productFn = document.getElementById('multiplyFunction');
  productFn.textContent = ('The product of ' + number1 + ' and ' + number2 + ' is ' + (number1 * number2) + '.');
  return number1 * number2;
}

function sumAndMultiply(number1, number2, number3) {
  var add = sum(sum(number1, number2), number3);
  var product = multiply(multiply(number1, number2), number3);
  var addFn = document.getElementById('sumOnly');
  var prodFn = document.getElementById('productOnly');
  addFn.textContent = (number1 + ' and ' + number2 + ' and ' + number3 + ' sum to ' + add + '.');
  prodFn.textContent = ('The numbers ' + number1 + ' and ' + number2 + ' and ' + number3 + ' have a product of ' + product + '.');
  return [add, product];
}

function sumArray(numberArray) {
  var total = 0;
  for (i = 0; i < numberArray.length; i++) {
    total += numberArray[i];
  }
  var sumArrayFunc = document.getElementById('sumArrayFn');
  console.table(numberArray);
  sumArrayFunc.textContent = (numberArray.join(', ') + ' was passed in as an array of numbers, and ' + total + ' is their sum.');
  return total;
}

function multiplyArray(numberArray) {
  var product = 1;
  for (i = 0; i < numberArray.length; i++) {
    product *= numberArray[i];
  }
  var prodArrayFunc = document.getElementById('multiplyArrayFn');
  console.table(numberArray);
  prodArrayFunc.textContent = ('The numbers ' + numberArray.join(', ') + ' have a product of ' + product + '.');
  return product;
}
