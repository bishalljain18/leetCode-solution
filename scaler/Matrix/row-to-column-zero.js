//You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, make entire ith row and jth column zero.
// i/p =
// [1,2,3,4]
// [5,6,7,0]
// [9,2,0,4]

// o/p =
// [1,2,0,0]
// [0,0,0,0]
// [0,0,0,0]

const rowToColumnZero = () => {
  let storeI = new Set();
  let storeJ = new Set();
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 0) {
        storeI.add(i);
        storeJ.add(j);
      }
    }
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (storeI.has(i) || storeJ.has(j)) {
        A[i][j] = 0;
      }
    }
  }
  return A;
};
