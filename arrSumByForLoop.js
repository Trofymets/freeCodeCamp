// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop
var myArr = [ 2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArr.length; i++) {
    // console.log('before', total);
  total +=  myArr[i];
// console.log('after', total);
}
