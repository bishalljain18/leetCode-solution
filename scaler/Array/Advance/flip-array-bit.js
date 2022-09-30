// You are given a binary string A(i.e., with characters 0 and 1) consisting of characters A1, A2, ..., AN. In a single operation, you can choose two indices, L and R, such that 1 ≤ L ≤ R ≤ N and flip the characters AL, AL+1, ..., AR. By flipping, we mean changing character 0 to 1 and vice-versa.

// Your aim is to perform ATMOST one operation such that in the final string number of 1s is maximized.

// If you don't want to perform the operation, return an empty array. Else, return an array consisting of two elements denoting L and R. If there are multiple solutions, return the lexicographically smallest pair of L and R.

// NOTE: Pair (a, b) is lexicographically smaller than pair (c, d) if a < c or, if a == c and b < d.

// Example Input
// Input 1:

// A = "010"
// Input 2:

// A = "111"

// Example Output
// Output 1:

// [1, 1]
// Output 2:

// []

// idea is to find the maximum sum of the subarray with flip of 0 to 1
// so convert the 1 to -1 and 0 to 1
function flip(A) {
  let a = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] == '0') {
      a[i] = 1;
    } else {
      a[i] = -1;
    }
  }
  let curr = 0; // maintain current sum
  let best = 0;
  let l = 0;
  let r = -1;
  let idx = 0;
  for (let i = 0; i < a.length; i++) {
    curr += a[i];
    if (curr < 0) {
      curr = 0;
      idx = i + 1;
    } else if (curr > best) {
      l = idx;
      r = i;
      best = curr;
    }
  }
  if (r != -1) {
    return [l + 1, r + 1];
  } else {
    return [];
  }
}
