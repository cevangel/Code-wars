function countSheeps(sheep) {
  let count = 0;
  sheep.forEach((element) => 
    element ? count += 1 :{} 
)
  return count;
}