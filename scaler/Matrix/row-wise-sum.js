//You are given a 2D integer matrix A, return a 1D integer vector containing row-wise sums of original matrix.

const rowWiseSum = (A) => {
  let resArr = [];
  for (let i = 0; i < A.length; i++) {
    let res = 0;
    for (let j = 0; j < A[0].length; j++) {
      res += A[i][j];
    }
    resArr.push(res);
  }
  return resArr;
};
