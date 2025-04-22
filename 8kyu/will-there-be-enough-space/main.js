//https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
function enough(cap, on, wait) {
  return  (on + wait) < cap ? 0 : (on + wait) - cap;
}