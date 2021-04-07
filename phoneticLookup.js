// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups
function phoneticLookup(val) {
    var result = "";
   
   var lookup = {
     "alpha": "Adams",
     "bravo": "Boston",
     "charlie": "Chicago",
     "delta": "Denver",
     "echo": "Easy",
     "foxtrot": "Frank"
   }
  
   result = lookup[val];
    return result;
  }
  
  phoneticLookup("charlie");
