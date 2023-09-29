// range of numbers using recursion
function rangeOfNumbers(startNum, endNum) {
  // it wiil be a BASE CASE
  if (endNum - startNum === 0) {
    // if both nums are equal to zero it will return the startNum
    return [startNum];
  } else {
    const numRecur = rangeOfNumbers(startNum, endNum - 1); // start of the recursion of endNum
    numRecur.push(endNum); // adds the endNum in the end of arr
    console.log(numRecur);
    return numRecur;
  }
}

rangeOfNumbers(2, 5);
