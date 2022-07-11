var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let start = 0;
    let end = n;
    let succ;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        succ = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return succ;
  };
};
