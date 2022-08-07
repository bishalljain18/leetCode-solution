// given a 2d matrix, find the 90 degree clockwise rotation

// find the transapose -> row becomes column and col becomes row
// then 90 degree rotation is same as the mirror image of the transpose matrix
// so just reverse each row of the transpose matrix

const findRotation = (A) => {
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let temp = A[i][j];
      A[i][j] = A[j][i];
      A[j][i] = temp;
    }
  }

  for (const element of A) {
    let j = A.length - 1;
    let k = 0;
    let tempMatrix = element;
    while (k < j) {
      let temp = tempMatrix[k];
      tempMatrix[k] = tempMatrix[j];
      tempMatrix[j] = temp;
      k++;
      j--;
    }
    A[i] = tempMatrix;
  }

  return A;
};
