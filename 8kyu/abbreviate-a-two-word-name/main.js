function abbrevName(name){
  return name.split(' ') // Split the name into an array of words
             .map(word => word[0].toUpperCase()) // Take the first letter of each word and capitalize it
             .join('.'); // Join the initials with a dot
}