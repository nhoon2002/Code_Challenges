// //SINGLE CHOICE METHOD -- DOESN'T WORK ALL THE TIME
// function longestSlideDown (pyramid) {
//
//   var path = [pyramid[0][0]];
//   var option1;
//   var option2;
//   var selected=0;
//   for (var i = 1; i < pyramid.length; i++) {
//
//     option1 = pyramid[i][selected];
//     option2 = pyramid[i][selected+1];
//     if(option1 > option2) {
//       selected = pyramid[i].indexOf(option1);
//       path.push(option1);
//     } else if (option2 > option1) {
//       selected = pyramid[i].indexOf(option2);
//       path.push(option2);
//     }
//     // console.log(selected)
//
//
//   }
//
//   return(sum(path));
//
// }
//
// function sum(path) {
//   var val = path[0];
//   for (var j = 1; j < path.length; j++) {
//     val+=path[j];
//   }
//   return val;
// }

//TRIANGLE REDUCTION METHOD
var pyramid = [[75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20,  4, 82, 47, 65],
  [19,  1, 23, 75,  3, 34],
  [88,  2, 77, 73,  7, 63, 67],
  [99, 65,  4, 28,  6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]];
function longestSlideDown (pyramid) {


  var index = pyramid.length - 1;

  while(index > 0) {

    var selection = 0;
    for (var i = 0; i < pyramid[index].length-1; i++) {
      if(pyramid[index][i] >= pyramid[index][i+1]) {
        pyramid[index-1][i]+=pyramid[index][i];
      } else if (pyramid[index][i] < pyramid[index][i+1]) {
        pyramid[index-1][i]+=pyramid[index][i+1];
      }
    }
    index--;

  }
  return pyramid[0][0];
}
