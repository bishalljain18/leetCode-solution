const twoSum = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === target) {
      return [start + 1, end + 1];
    }
    if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
};
