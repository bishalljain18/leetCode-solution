const MaxSubArray = (nums) => {
  let result = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result = sum > result ? sum : result;
    sum = sum > 0 ? sum : 0;
  }
};
