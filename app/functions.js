exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(msg){
      return str +", "+ msg;
    };
  },

  makeClosures : function(arr, fn) {
    var t = [];
    for(var i=0;i<arr.length;i++){
      t[i] = (function(x){
          return function(){
            return fn(arr[x]);
          }
      })(i);
    }
    return t;
  },

  partial : function(fn, str1, str2) {
    return function(p){
     return fn.call(this,str1,str2,p);
    };
  },

  useArguments : function() {
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    fn.apply(this,Array.prototype.slice.call(arguments,1,arguments.length));
  },

  partialUsingArguments : function(fn) {
    
  },

  curryIt : function(fn) {

  }
};
