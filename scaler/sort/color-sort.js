//Given an array with N objects colored red, white, or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

//We will use the integers 0, 1, and 2 to represent red, white, and blue, respectively.

//Note: Using the library sort function is not allowed.

const find = (A) => {
  let zero = 0;
  let one = 0;
  let two = 0;
  let ansArr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      zero++;
    }
    if (A[i] === 1) {
      one++;
    }
    if (A[i] === 2) {
      two++;
    }
  }
  while (zero) {
    ansArr.push(0);
    zero--;
  }
  while (one) {
    ansArr.push(1);
    one--;
  }
  while (two) {
    ansArr.push(2);
    two--;
  }

  return ansArr;
};
