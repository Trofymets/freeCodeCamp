// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops
function multiplyAll(arr) {
    var product = 1;
    for (let i=0; i < arr.length; i++) {
      for (let j=0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
