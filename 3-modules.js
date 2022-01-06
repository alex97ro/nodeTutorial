//Modules
const names = require('./4-firstmodule');
const sayHi = require('./5-sayhi');
const data = require('./7-alternativeflavour');
console.log(names);
sayHi(names.alex);
console.log(data);
require('./8-mindgrenade');
