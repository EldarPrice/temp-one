// import variables from module
const { susan, peter } = require('./04-names')
// import function from module
const sayHi = require('./05-utils')
// import objects and arrays from module
const data = require('./06-alternative-flavor')
// importing envoked function to this file
require('./07-mind-granade')

sayHi(susan)
sayHi(peter)
sayHi('John')
