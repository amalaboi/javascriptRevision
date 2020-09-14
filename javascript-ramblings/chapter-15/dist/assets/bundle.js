"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// index.js
var greet = function greet(name) {
  console.log("hello, my name is ".concat(name));
};

greet('mario');
greet('luigi');
greet('link');
greet('Jason');

var User = function User() {
  _classCallCheck(this, User);

  this.score = 0;
};
