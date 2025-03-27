String.prototype.isUpperCase = function() {
  //if the string, when turned to uppercase, is same as string , return true (bc it's upper)
  return this.toUpperCase() === this.toString(); 
}