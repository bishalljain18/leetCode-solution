//Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.
//Input 1:
// A = [1, 2, 3, 4, 5]
// Output 1:
// [120, 60, 40, 30, 24]

const productArr = (A) => {
  let prefixSum = [A[0]];
  let suffixSum = [A[A.length - 1]];
  let sum = A[0];
  let res = 1;
  let resultArr = [];
  for (let i = 1; i < A.length; i++) {
    sum = sum * A[i];
    prefixSum.push(sum);
  }
  sum = A[A.length - 1];
  suffixSum[A.length - 1] = sum;
  for (let i = A.length - 2; i >= 0; i--) {
    sum = sum * A[i];
    suffixSum[i] = sum;
  }

  for (let i = 0; i < A.length; i++) {
    res = 1;
    if (i === 0) {
      res = res * suffixSum[i + 1];
    } else if (i === A.length - 1) {
      res = res * prefixSum[i - 1];
    } else {
      res = res * prefixSum[i - 1] * suffixSum[i + 1];
    }
    resultArr.push(res);
  }

  return resultArr;
};
