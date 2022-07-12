// Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]

// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.

// Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

// Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

const setMatrixZeros = (arr) => {
  let zeroIndex = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        zeroIndex.push([i, j]);
      }
    }
  }
  zeroIndex.map((indexes) => {
    for (let j = 0; j < arr.length; j++) {
      arr[indexes[0]][j] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i][indexes[1]] = 0;
    }
  });
  return arr;
};
