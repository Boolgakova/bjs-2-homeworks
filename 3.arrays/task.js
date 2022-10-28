function compareArrays(arr1, arr2) {
  let result = false;
  if(arr1.length == arr2.length){
  result = arr1.every(i => arr1[i] == arr2[i]);
  }
  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter(element => element > 0)
                  .filter(element => element % 3 === 0)
                  .map(element => element * 10);
  return resultArr;
}
