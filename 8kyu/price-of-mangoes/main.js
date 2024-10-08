// //**prompt
// price of mangoes
//There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
// Fundamentals


//**My solution 
function mango(quantity, price){
  let numFreeMangos = Math.floor(quantity/3)
  let totalPrice = (quantity - numFreeMangos) * price;
  return totalPrice;
}


//**tests it passed
//see prompt


//**other solutions to learn from 

// https://www.codewars.com/kata/57a77726bb9944d000000b06/solutions/javascript

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}