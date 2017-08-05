// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {

  if (obj === undefined || typeof obj === 'function') {
    return undefined;

  } else if (obj === null) {
    return 'null';

  } else if (typeof obj === 'string'){
    return '"' + obj + '"';

  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();

  } else if (Array.isArray(obj)) {
    if (obj.length > 0) {
      var arrayString = [];

      for (var i = 0; i < obj.length; i++) {
        if (obj[i] !== undefined || typeof obj[i] !== 'function'){
          arrayString.push(stringifyJSON(obj[i]));
        } else {
          arrayString.push(null);
        }
      }
      return '[' + arrayString.join(',') + ']'
    } else {
      return '[]';
    }

  } else if (typeof obj === 'object') {

    if (Object.keys(obj).length > 0) {
      var objInArray = [];
      for (var key in obj) {
        if (typeof obj[key] === 'function' || obj[key] === undefined) {
          return '{}';
        } else {
          objInArray.push('"' + key + '":' + stringifyJSON(obj[key]));
        }
      }
      return '{' + objInArray.join(',') + '}';

    } else {
      return '{}';
    }
  }
};
