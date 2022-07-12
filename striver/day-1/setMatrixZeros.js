// Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]

// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.

// Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

// Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

// solution1
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

// Sol 2

// const setMatrixZeros = (arr) => {
//     const rowLength = arr.length
//     const colLength = arr[0].length;

//     const dummyRow = new Array(rowLength).fill(-1)
//     const dummyCol = new Array(colLength).fill(-1)

//     for(let i=0;i<arr.length;i++) {
//         for(let j=0;j<colLength;j++) {
//           if(arr[i][j] ===0) {
//             dummyRow[i] = 0
//           dummyCol[j] = 0
//         }
//       }
//     }

//     for(let i=0;i<arr.length;i++) {
//         for(let j=0;j<colLength;j++) {
//           if(dummyRow[i] === 0 || dummyCol[j] === 0) {
//             arr[i][j] =0
//         }
//       }
//     }

//     console.log(arr)

//   }

setMatrixZeros([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
setMatrixZeros([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
