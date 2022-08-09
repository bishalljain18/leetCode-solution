//You are given a N X N integer matrix. You have to find the sum of all the minor diagonal elements of A.

//Minor diagonal of a M X M matrix A is a collection of elements A[i, j] such that i + j = M + 1 (where i, j are 1-based).

const matrix = (A) => {
  const n = A.length;
  let res = 0;
  for (let i = 0; i < A.length; i++) {
    res += A[i][n - 1 - i];
  }
  return res;
};
