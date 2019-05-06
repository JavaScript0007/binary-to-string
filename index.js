const binaryAgent = (str) => {
  str = str.split(" ")

  // first I convert binary to UTF-16 with parseInt
  // then from UTF-16 to a string
  let newMap = str.map(item => String.fromCharCode(parseInt(item, 2))).join("")
  return newMap
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
