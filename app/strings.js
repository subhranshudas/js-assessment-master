exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  	var buffer = "";
  	var obj = {};

  	var generateChars = function(char,c){
	    var b = "";
	    for(var i=0;i<c;i++){
	      b += char;
	    }
	    return b;
  	};
  
  
  
  for(var i=0;i<str.length;i++){
     if(obj[str[i]]){ //if there
       obj[str[i]] += 1;
     }
     else{
       obj[str[i]] = 1;
     }
  }
  
  for(var k in obj){
    if(obj[k]>=amount){
      buffer += generateChars(k,amount);
    }
    else{
      buffer += k;
    }
  }
  
  return buffer;
  },
  wordWrap: function(str, cols) {
  	return str.replace(/blue/g, "red")
  },
  reverseString: function(str) {
  	return str.split("").reverse().join("");
  }
};
