// You are given an array A of N elements. Find the number of triplets i,j and k such that i<j<k and A[i]<A[j]<A[k]

const findTriplets = (A) => {
  let count = 0;
  for (let j = 1; j < A.length; j++) {
    let is_I_Exist = 0;
    let is_K_Exist = 0;
    for (let i = 0; i <= j - 1; i++) {
      if (A[i] < A[j]) {
        is_I_Exist++;
      }
    }
    for (let k = j + 1; k < A.length; k++) {
      if (A[k] > A[j]) {
        is_K_Exist++;
      }
    }
    if (is_I_Exist && is_K_Exist) {
      count += is_I_Exist * is_K_Exist;
    }
  }
  return count;
};
