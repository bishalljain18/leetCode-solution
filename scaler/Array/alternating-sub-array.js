//You are given an integer array A of length N comprising of 0's & 1's, and an integer B.

//You have to tell all the indices of array A that can act as a center of 2 * B + 1 length 0-1 alternating subarray.

//A 0-1 alternating array is an array containing only 0's & 1's, and having no adjacent 0's or 1's. For e.g. arrays [0, 1, 0, 1], [1, 0] and [1] are 0-1 alternating, while [1, 1] and [0, 1, 0, 0, 1] are not.

const alternatingSubArray = (A, B) => {
  let window = 2 * B + 1;
  let ansArr = [];

  if (B === 0) {
    //return index of A;
    for (let i = 0; i < A.length; i++) {
      ansArr.push(i);
    }
    return ansArr;
  }
  for (let i = 0; i < A.length - window + 1; i++) {
    let curr = window;
    let curr_val = A[i];
    let noOfYes = 0;
    while (curr > 0) {
      if (i % 2 === 0 && A[i] === curr_val) {
        noOfYes++;
      } else if (i % 2 !== 0 && A[i] === !curr_val) {
        noOfYes++;
      }
      curr--;
    }
    if (window === noOfYes) {
      ansArr.push(i + window / 2);
    }
  }
  console.log(ansArr);
};

//A = [1, 0, 1, 0, 1]
//  B = 1
// O/P: [1, 2, 3]

// Index 1 acts as a centre of alternating sequence: [A0, A1, A2]
//  Index 2 acts as a centre of alternating sequence: [A1, A2, A3]
//  Index 3 acts as a centre of alternating sequence: [A2, A3, A4]
