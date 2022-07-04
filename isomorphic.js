var isIsomorphic = function(s, t) {
  const length = s.length,
    map = new Map(),
    set = new Set();
  for (let i = 0; i < length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false;
    } else {
      if (set.has(t[i])) return false;
      map.set(s[i], t[i]);
      set.add(t[i]);
    }
  }
  return true;
};
