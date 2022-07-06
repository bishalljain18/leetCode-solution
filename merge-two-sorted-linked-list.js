const MergeTwoList = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;

  const mergeList = (smaller, greater) => {
    smaller.next = MergeTwoList(smaller.next, greater);
    return smaller;
  };
  list1.val > list2.val ? mergeList(list2, list1) : mergeList(list1, list2);
};
