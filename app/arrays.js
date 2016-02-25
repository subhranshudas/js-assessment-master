exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        return i;
      }
    }
    return -1; 
  },

  sum : function(arr) {
    var total = 0;
     for (var i = 0;i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {

  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return (arr1.join(" ")+" "+arr2.join(" ")).split(" ");
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    var c = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        c++;
      }
    }

    return c;
  },

  duplicates : function(arr) {
    var o = {},
        t = [];

    for(var i=0;i<arr.length;i++){  
        o[arr[i]] = o[arr[i]] ? o[arr[i]] + 1 : 1;  
    }

    for(var k in o){
      if(o[k] > 1)
      t.push(k*1);
    }
   return t;
  },

  square : function(arr) {
    return arr.map(function(x){return x*x});
  },

  findAllOccurrences : function(arr, target) {
    var t = [];
    for(var i=0;i<arr.length;i++){
      if(arr[i] === target)
        t.push(i);
    }
    return t;
  }
};
