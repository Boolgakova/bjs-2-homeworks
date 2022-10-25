"use strict"

function getArrayParams(arr) {
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

function worker(arr) {
  let sum = 0;
  for (let element of arr){
  sum += element;
  }
  return sum;
}

function makeWork (arrOfArr, func) {
  let max = 0;
  for (let arr of arrOfArr){
    const funcResult = func(arr);
    if (funcResult > max){
      max = funcResult;
    }
  }
  return max;
}

function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let element of arr){
    if (element < min){
    min = element;
    } else if (element > max){
    max = element;
    }
  }
  return Math.abs(max - min);
}
