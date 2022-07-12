const pascalTringle = (n) => {
  let arr = []; // final arr to be return
  for (let i = 0; i < n; i++) {
    const row = [1]; // initially all the first element is 1
    // below loop is for the 3rd row onwards
    for (let j = 1; j < i; j++) {
      row.push(arr[i - 1][j - 1] + arr[i - 1][j]); // push the prev row 1st and 2nd element for each jth element sum
    }
    if (i > 0) row.push(1); // as the last element is also 0

    arr.push(row); // finally push the each row at the end of each 1st loop
  }
  return arr;
};
