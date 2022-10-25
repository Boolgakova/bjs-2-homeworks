"use strict"

function solveEquation(a, b, c) {
  const array = [];
  const discriminant = Math.pow(b,2)-4*a*c;
  let x1 = (-b + Math.sqrt(discriminant))/(2*a);
  let x2 = (-b - Math.sqrt(discriminant))/(2*a);
  let x3 = -b/(2*a);
  if (discriminant > 0){
  array.push(x1);
  array.push(x2);
  } else if (discriminant == 0){
  array.push(x3);
  }
  return array;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)){
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (isNaN(contribution)){
  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (isNaN(amount)){
  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let totalAmount;
  const creditBody = amount - contribution;
  let now = new Date();
  let term = date.getMonth() - now.getMonth() +
                (12 * (date.getFullYear() - now.getFullYear()));
  const monthlyRate = percent /(100 * 12);
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**term) - 1)));
  totalAmount = Number((monthlyPayment*term).toFixed(2));
  return totalAmount;
}
