//Reverse the bits of an 32 bit unsigned integer A.
//i/p - 3
//o/p - 3221225472

function reverseBit(num) {
  let revnum = 0;
  for (let i = 0; i < 32; i++) {
    //till the number exist
    if (num & (1 << i)) {
      //rev number with OR operator and leftshift with 31-i
      revnum |= 1 << (31 - i);
    }
  }
  return revnum >>> 0;
}
