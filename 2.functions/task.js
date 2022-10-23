"use strict"

function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let element of arr){
    if (element < min){
      min = element;
    } else if (element > max){
      max = element;
    }
    sum += element;
  }
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function worker(...arr) {
  let sum = 0;
  for (let element of arr){
  sum += element;
  }
  return sum;
}

function makeWork (func, ...arrOfArr) {
  let max = 0;
  for (let arr of arrOfArr){
    if (func(arr) > max){
      max = func(arr);
    }
  }
  return max;
}

function worker2(...arr) {
  let min = arr[0];
  let max = arr[0];
  for (let element of arr){
    if (element < min){
    min = element;
    } else if (element > max){
    max = element;
    }
  }
  let diff = Math.abs(max - min);
  return diff;
}
