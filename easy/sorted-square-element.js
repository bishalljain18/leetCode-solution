var sortedSquares = function (nums) {
  // const sortArr = nums.map(ele =>ele*ele)
  // return sortArr.sort((a,b) => a-b)

  let start = 0;
  let end = nums.length - 1;
  let i = nums.length - 1;
  let sortedArr = [];
  while (start <= end) {
    let v1 = Math.pow(nums[start], 2);
    let v2 = Math.pow(nums[end], 2);
    if (v1 > v2) {
      sortedArr[i] = v1;
      start++;
    } else if (v2 >= v1) {
      sortedArr[i] = v2;
      end--;
    }
  }
  i--;
  return sortedArr;
  // return sortArr.sort()
};
