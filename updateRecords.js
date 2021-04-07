// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection
function updateRecords(object, id, prop, value) {
    if (value === "") {
      delete object[id][prop];
      return object;
    }
    if (prop !== "tracks" && value !== "") {
      object[id][prop] = value;
    } else if(object[id][prop]) {
      object[id][prop].push(value);
    } else {
      object[id][prop] = [value];
    }
    return object;
  }
  
  updateRecords(collection, 5439, 'artist', 'ABBA');
