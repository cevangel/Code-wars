// https://www.codewars.com/kata/57a429e253ba3381850000fb/javascript
function bmi(weight, height) {
  let bodyMass = weight/(height**2)
  switch (true){
      case bodyMass <= 18.5:
        return "Underweight"
        break;
      case bodyMass <= 25.0:
        return "Normal"
        break;
      case bodyMass <= 30.0:
        return "Overweight"
        break;
      default:
        return "Obese"
        break;
 }
}