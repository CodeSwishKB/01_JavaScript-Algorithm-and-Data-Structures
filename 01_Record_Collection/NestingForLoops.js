// 2D array
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// this i itertaion is for row
for (let i = 0; i < arr.length; i++) {
  // this j iteration is for column
  for (let j = 0; j < arr[i].length; j++) {
    // console.log(arr[i][j]); // row = [i] and column =  [j]
  }
}

// MY EXAMPLE
const myArray = [
  ["kobe", "jordan", "lebron"],
  ["magic", "bird", "russell"],
  ["reaves", "uyang", "wade"],
];

// loop to access each index of myArray
for (let i = 0; i < myArray.length; i++) {
  //   console.log(myArray[i]);

  // loop to access each index of outer index which is the 3 array
  for (let j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}
