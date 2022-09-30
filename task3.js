var fs=require("fs");

// Asynchronous read
fs.writeFile("hello.txt","hello node",(err)=>{
    if (err) {
        console.log(`Error : ${err.message}`);
      }
    else{console.log("done succefuly");}

fs.readFile('hello.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });}
);
