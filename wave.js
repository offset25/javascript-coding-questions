// https://jsfiddle.net/m1u60cnf/
/*
The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm typically achieved in a packed stadium. Spectators will start a cheer in one corner and then roll it around the arena, with each section rising from its seat as it yells.
Today's challenge is to write a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. The input string will always start lower-case. If the character in the string is whitespace then pass over it.
Ex.
wave("hello") => string["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

// creates a wave for str
function wave(initial_wave_str) {
	var result = [];
  // loop through str to indicate what current position we want the uppercase character to be
  for(i = 0; i < initial_wave_str.length; i++) {
  	var current_str = "";
    // build specific wave based on current character wave position
  	for(n = 0; n < initial_wave_str.length; n++) {
    	var current_char = "";
      // uppercase this character if matches the current wave position else lower case.
    	if (i == n) {
	      current_char = initial_wave_str.charAt(n).toUpperCase();
      } else {
      	current_char = initial_wave_str.charAt(n);
      }
      // build the str
    	current_str += current_char; 
  	}
    // append to array the current str
    result[result.length] = current_str;
  }
  return result;
}

var result = wave("hello");
console.info(result);
