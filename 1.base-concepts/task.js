"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2)-4*a*c;
  let x1 = (-b + Math.sqrt(d))/(2*a);
  let x2 = (-b - Math.sqrt(d))/(2*a);
  let x3 = -b/(2*a);
  if (d > 0){
  arr.push(x1);
  arr.push(x2);
  } else if (d = 0){
  arr.push(x3);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let creditBody = amount - contribution;
  let now = new Date();
  let term = date.getMonth() - now.getMonth() +
                (12 * (date.getFullYear() - now.getFullYear()));
  let monthlyRate = percent /(100 * 12);
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**term) - 1)));
  totalAmount = Number((monthlyPayment*term).toFixed(2));
  return totalAmount;
}
