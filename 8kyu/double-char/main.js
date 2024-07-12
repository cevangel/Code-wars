function doubleChar(str) {
  strArray = str.split('');//forgot ''
  doubledArray = strArray.map((e) => e + e) //map is betyer than for each 
  return doubledArray.join('');// Your code here
}