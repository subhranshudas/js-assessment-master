exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
  	var t = [];
  	for(var k in obj){
	  if(obj.hasOwnProperty(k)){
	    t.push(k+': '+obj[k]);
	  }
	}
	return t;
  }
};
