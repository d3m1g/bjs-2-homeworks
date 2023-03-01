"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let rootOne;
  let rootTwo;
  let d = Math.pow(b, 2) - 4*a*c;

  if (d < 0) {
    console.log('Корней нет')
  } else if (d = 0) {
    let rootOne = -b/(2*a);
    arr [0] = rootOne;
    console.log(arr);
  } else {
    rootOne = (-b + Math.sqrt(d) )/(2*a);
    rootTwo = (-b - Math.sqrt(d) )/(2*a);
    arr [0] = rootOne;
    arr [1] = rootTwo;
    console.log('первый корень' + arr[0] + ';' + 'второй корень' + arr[1]);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let toPay;
  let payPerMonth;
  let fullSum;

  if (
  isNaN(percent);
  isNaN(contribution);
  isNaN(amount);
  isNaN(countMonths);
  ) {
    console.log('что-то пошло не так. smth went wrong');
    return false;
  }

  percent = (percent / 100) / 12;
  toPay = amount - contribution;
  payPerMonth = toPay * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  fullSum = parseFloat((payPerMonth * countMonths).toFixed(2));
  
  return fullSum;
}