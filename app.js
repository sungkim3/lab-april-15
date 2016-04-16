var sumFn = document.getElementById('sumFunction');
var productFn = document.getElementById('multiplyFunction');
var sumStash;
var productStash;

function sum(number1, number2) {
  sumFn.textContent = ('The sum of ' + number1 + ' and ' + number2 + ' is ' + (number1 + number2) + '.');
  return number1 + number2;
}

function multiply(a, b) {
  productFn.textContent = ('The product of ' + a + ' and ' + b + ' is ' + (a * b) + '.');
  return a * b;
}

function sumAndMultiply(number1, number2, number3) {
  var add = sum(sum(number1, number2), number3);
  var product = multiply(multiply(number1, number2), number3);
  sumStash = sumFn.textContent;
  productStash = productFn.textContent;
  var addFn = document.getElementById('sumOnly');
  var prodFn = document.getElementById('productOnly');
  sumFn.textContent = sumStash;
  productFn.textContent = productStash;
  addFn.textContent = (x + ' and ' + y + ' and ' + z + ' sum to ' + add + '.');
  prodFn.textContent = ('The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + product + '.');
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
