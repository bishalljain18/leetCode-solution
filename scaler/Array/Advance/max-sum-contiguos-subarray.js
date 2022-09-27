//Find the contiguous non-empty subarray within an array, A of length N, with the largest sum.
//Input 1:

//  A = [1, 2, 3, 4, -10]
//  Input 2:

//   A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Output 1:

//  10
// Output 2:

//  6

//Kadane's algo

const MaxSum = (A) => {
  let ans = A[0];
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    ans = Math.max(ans, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return ans;
};
