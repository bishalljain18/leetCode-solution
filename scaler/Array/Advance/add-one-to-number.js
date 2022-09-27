//Given a non-negative number represented as an array of digits, add 1 to the number ( increment the number represented by the digits ).

//The digits are stored such that the most significant digit is at the head of the list.

//Q: Can the input have 0's before the most significant digit. Or, in other words, is 0 1 2 3 a valid input?
//A: For the purpose of this question, YES
//Q: Can the output have 0's before the most significant digit? Or, in other words, is 0 1 2 4 a valid output?
//A: For the purpose of this question, NO. Even if the input has zeroes before the most significant digit.

//input: [1, 2, 3]
//output: [1, 2, 4]

const AddOneToNumber = (A) => {
  let newNum;
  if (A.length === 1 && A[0] === 0) {
    newNum = 1;
    return newNum.toString();
  }
  newNum = BigInt(A.join('')) + BigInt(1);
  return newNum.toString();
};
