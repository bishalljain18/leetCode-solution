// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
const reverseWords = (s) => {
  const splittedWords = s.split(' ');
  for (let i = 0; i < splittedWords.length; i++) {
    let splittedChar = splittedWords.split('');
    let start = 0;
    let end = splittedChar.length - 1;
    while (start < end) {
      let temp = splittedChar[start];
      splittedChar[start] = splittedChar[end];
      splittedChar[end] = temp;
      start++;
      end--;
    }
    splittedWords[i] = splittedChar.join('');
  }
  return splittedWords.join(' ');
};
