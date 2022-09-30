const http = require("http");
const PORT=3000;

//  create aserver and return an html code
 http.createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/html" });
     res.write("<h1>Hello world</h1>");
     res.end();
   })
   .listen(PORT,()=>console.log("done"));


