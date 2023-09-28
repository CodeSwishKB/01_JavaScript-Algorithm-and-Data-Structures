// for loop version
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

// recursion
function multiplyRecursion(arr, n) {
  if (n <= 0) {
    // if n <= return 1
    return 1;
  } else {
    // call the function multiplyRecursion t
    return multiplyRecursion(arr, n - 1) * arr[n - 1]; // arr[n - 1] => gets the last index of the array than gonna multiply
  }
}
