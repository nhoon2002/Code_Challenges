// Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.
// In this system, the last digit is always 0 and is in base 0!.
// The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!. More generally, the nth-to-last digit in always 0, 1, 2, ..., or n and is in base n!.
//
// Example : decimal number 463 is coded as "341010"
//
// because 463 (base 10) = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!
//
// If we are limited to digits 0...9 the biggest number we can code is 10! - 1.
//
// So we extend 0..9 with letters A to Z. With these 36 digits we can code up to 36! − 1 = 37199332678990121746799944815083519999999910 (base 10)
//
// We code two functions, the first one will code a decimal number and return a string with the factorial representation : "dec2FactString(nb)"
//
// the second one will decode a string with a factorial representation and produce the decimal representation : "factString2Dec(str)".
//
// Given numbers will be positive.


function dec2FactString(nb) {
  // actual integer number --> factorial rep
  var n = 1;
  var factorial = [0];
  var quotient = 0;
  var remainder = 0;
  var progress = nb;
  console.log('Before while-loop, progress = %s', nb);
  while(progress > n) {
    console.log('Entered while-loop iteration: %s', n);
    n++;
    remainder = progress%n;
    console.log('Remainder: %s', remainder);
    progress = Math.floor(progress/n);
    console.log('New progress: %s', progress);
    factorial.unshift(remainder);
    console.log('Unshifted: %s', remainder);
    console.log('Factorial rep: %s', factorial);
  }
  console.log('Exited while loop... unshifting last progress');
  factorial.unshift(progress)
  console.log('factorial: %s', factorial);


return factorial.join('');


}

function factString2Dec(str) {
	// takes factorial and returns the actual integer.
  var remainders = str.split('');
  var f_length = str.length;
  var nb = 0;
  var Fact = function(num) {
    if (num === 0)
      { return 1; }
    else
      { return num * Fact( num - 1 ); }
  }

  for(var n=0; n<f_length-1; n++) {
      nb += (remainders[n] * (Fact(f_length-n-1)));
  }



}
