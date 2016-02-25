exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {
  	return parseInt(str,2);
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
  	var places = (b + '').split(".")[1].length;
  	return (a*b).toFixed(places)*1;
  }
};
