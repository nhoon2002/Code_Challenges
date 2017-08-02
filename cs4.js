// An exercise in which you must flip the order of words in a given string.


var message = 'find you will pain only go you recordings security the into if';

function reverseWords(str) {
   
   return str.split(' ').reverse().join(' ');

}

// reverseWords(message)

console.log(reverseWords(message));
// returns: 'if into the security recordings you go only pain will you find'
