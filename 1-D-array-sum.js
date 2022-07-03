var runningSum = function(nums) {
  let newArr = [];
  nums.reduce((a, b) => {
    newArr.push(a + b);
    return a + b;
  }, 0);

  return newArr;
};
