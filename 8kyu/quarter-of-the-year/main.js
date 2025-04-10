// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/javascript
const quarterOf = (month) => {
  if (month < 4) return 1;
  if (month < 7) return 2;
  if (month < 10) return 3;
  if (month < 13) return 4;
};