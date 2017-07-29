// RECREATING Math.round() FUNCTIONS
Math.round = function(number) {
   var array = number.toString().split(".");
   console.log(array);
   var frac;
   if (array[1]) {
   frac = array[1].split("")[0];


   }

   if(frac >= 5) {
     return parseInt(array[0])+1;
   }
 }
