// #Tongues
//
// Gandalf's writings have long been available for study, but no one has yet figured out what language they are written in. Recently, due to programming work by a hacker known only by the code name ROT13, it has been discovered that Gandalf used nothing but a simple letter substitution scheme, and further, that it is its own inverse|the same operation scrambles the message as unscrambles it.
//
// This operation is performed by replacing vowels in the sequence 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three advanced, cyclicly, while preserving case (i.e., lower or upper).
//
// Similarly, consonants are replaced from the sequence 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f' by advancing ten letters.
//
// So for instance the phrase 'One ring to rule them all.' translates to 'Ita dotf ni dyca nsaw ecc.'
//
// The fascinating thing about this transformation is that the resulting language yields pronounceable words. For this problem, you will write code to translate Gandalf's manuscripts into plain text.
//
// Your job is to write a function that decodes Gandalf's writings.
//
// #Input
//
// The function will be passed a string for the function to decode. Each string will contain up to 100 characters, representing some text written by Gandalf. All characters will be plain ASCII, in the range space (32) to tilde (126).
//
// #Output
//
// For each string passed to the decode function return its translation.

function tongues(code) {
  var array = [];
  var lvowels = ['a','i','y','e','o','u'];
  var uvowels = ['A','I','Y','E','O','U'];
  var lconsonants = ['b','k','x','z','n','h','d','c','w','g','p','v','j','q','t','s','r','l','m','f'];
  var uconsonants = ['B','K','X','Z','N','H','D','C','W','G','P','V','J','Q','T','S','R','L','M','F'];
  //Must ignore non-alphabet characters.
  //Must retain case.
  var codeArray = code.split('');

  for(var i=0; i<codeArray.length; i++) {
    if(lvowels.indexOf(codeArray[i]) >= 0) { //if a letter is in the lowercase vowel list...
      var index = lvowels.indexOf(codeArray[i]) + 3;
      array.push(lvowels[index%6]);

    } else if(lconsonants.indexOf(codeArray[i]) >= 0) { //if a letter is in the lowercase consonant list...
      var index = lconsonants.indexOf(codeArray[i]) + 10;
      array.push(lconsonants[index%20]);

    } else if(uvowels.indexOf(codeArray[i]) >= 0) { //if a letter is in the upppercase vowel list...
      var index = uvowels.indexOf(codeArray[i]) + 3;
      array.push(uvowels[index%6]);

    } else if(uconsonants.indexOf(codeArray[i]) >= 0) { //if a letter is in the upppercase consonant list...
      var index = uconsonants.indexOf(codeArray[i]) + 10;
      array.push(uconsonants[index%20]);


    } else { //for non-alphabet characters such as spaces, punctuation, special characters...
      array.push(codeArray[i]);

    }
  }
  return array.join('');
}
console.log(tongues('AIyeo'));
console.log(tongues('Whats up'))
console.log(tongues('msenh Yb'))
