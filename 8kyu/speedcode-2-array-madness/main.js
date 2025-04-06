// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/solutions/javascript
const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 