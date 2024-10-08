// //**prompt
// welcome!
// Description:
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// Please modify this as appropriate for your language.

// [ ("english", "Welcome")
// , ("czech", "Vitejte")
// , ("danish", "Velkomst")
// , ("dutch", "Welkom")
// , ("estonian", "Tere tulemast")
// , ("finnish", "Tervetuloa")
// , ("flemish", "Welgekomen")
// , ("french", "Bienvenue")
// , ("german", "Willkommen")
// , ("irish", "Failte")
// , ("italian", "Benvenuto")
// , ("latvian", "Gaidits")
// , ("lithuanian", "Laukiamas")
// , ("polish", "Witamy")
// , ("spanish", "Bienvenido")
// , ("swedish", "Valkommen")
// , ("welsh", "Croeso")
// ]
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied
// Fundamentals

//**My solution 
function greet(language) {
	switch (language) {
  case "english":
    return "Welcome"
    break;
  case "czech":
    return "Vitejte"
    break;
  case "danish":
    return "Velkomst"
    break;
  case "dutch":
    return "Welkom"
    break;
  case "estonian":
    return "Tere tulemast"
    break;
  case "finnish":
    return "Tervetuloa"
    break;
  case "flemish":
    return "Welgekomen"
    break;
  case "french":
    return "Bienvenue"
    break;
  case "german":
    return "Willkommen"
    break;
  case "irish":
    return "Failte"
    break;
  case "italian":
    return "Benvenuto"
    break;
  case "latvian":
    return "Gaidits"
    break;
  case "lithuanian":
    return "Laukiamas"
    break;
  case "polish":
    return "Witamy"
    break;
  case "spanish":
    return "Bienvenido"
    break;
  case "swedish":
    return "Valkommen"
    break;
  case "welsh":
    return "Croeso"
    break;
  default:
    return "Welcome"
}
}
//**tests it passed
//see entry


//**other solutions to learn 
//from https://www.codewars.com/kata/577ff15ad648a14b780000e7/solutions/javascript
//best one 
function greet(lang) {
	return langs[lang]||langs['english']; //presents it like an array 
}

var langs = { //lang object but Declaring variables in global scope is usually a bad practice.
  // https://stackoverflow.com/a/10525602
'english': 'Welcome',
'czech': 'Vitejte',
'danish': 'Velkomst',
'dutch': 'Welkom',
'estonian': 'Tere tulemast',
'finnish': 'Tervetuloa',
'flemish': 'Welgekomen',
'french': 'Bienvenue',
'german': 'Willkommen',
'irish': 'Failte',
'italian': 'Benvenuto',
'latvian': 'Gaidits',
'lithuanian': 'Laukiamas',
'polish': 'Witamy',
'spanish': 'Bienvenido',
'swedish': 'Valkommen',
'welsh': 'Croeso'
};

//or
function greet(language) {
  
	switch(language){
    case "english": return "Welcome";
    case "czech": return "Vitejte";
    case "danish": return "Velkomst";
    case "dutch": return "Welkom";
    case "estonian": return "Tere tulemast";
    case "finnish": return "Tervetuloa";
    case "flemish": return "Welgekomen";
    case "french": return "Bienvenue";
    case "german": return "Willkommen";
    case "irish": return "Failte";
    case "italian": return "Benvenuto";
    case "latvian": return "Gaidits";
    case "lithuanian": return "Laukiamas";
    case "polish": return "Witamy";
    case "spanish": return "Bienvenido";
    case "swedish": return "Valkommen";
    case "welsh": return "Croeso";
    default: return "Welcome";
    }
  
}