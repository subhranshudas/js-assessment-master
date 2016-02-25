exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
   
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
  	  if(n>=2){
        return  arguments.callee(n-2) + arguments.callee(n-1);
	  }
	  else{
	    if(n===0){ //fib(0)
	      return 0;
	    }
	    if(n===1){ //fib(1)
	      return 1;
	    }
	  }
  },

  validParentheses: function(n) {

  }
};
