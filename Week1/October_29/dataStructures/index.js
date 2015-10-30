//Create constructor
function Implement () {
}

//Re-implement push
Implement.prototype.push = function(array, item) {
  array[array.length] = item;
  return item;
};

//Re-implement pop
Implement.prototype.pop = function(array) {
  var popped = array[array.length-1];
  array.length = [array.length-1];
  return popped;
};

//Re-implement shift
Implement.prototype.shift = function(array) {
  var shifted = array[0];
  for (var i = 1; i < array.length; i ++) {
    array[i-1] = array[i];
  }
  array.length = array.length-1;
  return shifted;
};

//Re-implement unshift
Implement.prototype.unshift = function(array, item) {
  for (var i = array.length-1; i >= 0; i--) {
    array[i+1] = array[i];
  }
  array[0] = item;
  return array.length;
};

//Working version of unique using filter
Implement.prototype.uniqueFilter = function unique (array) {
  array = array.filter(function(value, index, inputArray) {
          console.log('value is ', value);
          console.log('index is ', index);
          console.log(inputArray.indexOf(value));
          return inputArray.indexOf(value) == index;
         });
  return array;
};

//Version working with Jeff:
Implement.prototype.unique = function (array) {
  var arr = [];
  var match;
  array.forEach(function (element, index, array) {
    arr.push(element);
  });
  for (var i = 0; arr[i] !== undefined; i++) {
    while (match = arr.indexOf(arr[i], i + 1), match === -1 ? false : true) {
      arr.splice(match, 1);
    }
  }
  return arr;
};

Implement.prototype.frequency = function frequency (array) {
  if(array.length === 0) {
    return false;
  }
  var obj = {};
  var chars = [];
  var split = array.map(function(arr){
    return arr.split('');
  });
  var characters = split.reduce(function(a, b) {
    return a.concat(b);
  });
  characters.forEach(function(string) {
    chars.push(string.toLowerCase());
  });
  chars.forEach(function(el){
    if(obj[el]) {
      obj[el]++;
    }
    else {
      obj[el] = 1;
    }
  });
  function findMax (obj) {
    var max = 0;
    var store = [];
    for(var keys in obj) {
      var object = {};
      object[keys] = obj[keys];
      if (obj[keys] > max) {
        max = obj[keys];
        store = [];
        store.push(object);
      }
      else if(obj[keys] == max) {
        store.push(object);
      }
    }
  return store;
  }
  return findMax(obj);
};


module.exports = Implement;
