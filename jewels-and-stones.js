// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0

// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

var numJewelsInStones = function(J, S) {
// for both J and S created 2 arrays to maintain the frequncy based on upper and lower character
      let j_char_count_lower = Array(26).fill(0)
      let j_char_count_upper = Array(26).fill(0)
      let s_char_count_lower = Array(26).fill(0)
      let s_char_count_upper = Array(26).fill(0)
      // increase the frequncy based on existance
      for (let i = 0; i < J.length; i++) {
        if (J[i] === J[i].toLowerCase()) {
          j_char_count_lower[J[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        } else {
          j_char_count_upper[J[i].charCodeAt(0) - 'A'.charCodeAt(0)]++
        }
      }
      for (let i = 0; i < S.length; i++) {
        if (S[i] === S[i].toLowerCase()) {
          s_char_count_lower[S[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        } else {
          s_char_count_upper[S[i].charCodeAt(0) - 'A'.charCodeAt(0)]++
        }
      }
      let value = 0
      for (let i = 0; i < 26; i++) {
        if (j_char_count_lower[i]) { // as J is distinct, if the frequncy exists then find the index and add the value from S
          value = value + s_char_count_lower[i]
        }
        if(j_char_count_upper[i]) {
          value = value + s_char_count_upper[i]
        }
      }
      return value
};
