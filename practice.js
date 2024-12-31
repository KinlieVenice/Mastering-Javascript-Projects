function largestNum(array) {
  let largest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

console.log(largestNum([3, 33, 33, 6])); 
