var pivotIndex = function(nums) {
  let totalSum = 0;
  nums.forEach((a) => (totalSum += a));
  let leftSum = 0;
  let temp = 0;
  for (let i = -1; i < nums.length; i++) {
    temp = totalSum - leftSum - nums[i + 1];
    if (temp === leftSum) {
      return i + 1;
    }
    leftSum = leftSum + nums[i + 1];
  }
  return -1;
};
