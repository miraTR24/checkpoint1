var g = require("generate-password");

var password= g.generate({
    length:10,
    numbers:true
});
console.log(password);