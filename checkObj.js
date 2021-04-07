// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/testing-objects-for-properties#
function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)) {
      return obj.[checkProp];
    }
    return "Not Found";
  }
