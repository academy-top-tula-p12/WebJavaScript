let http = require("http");
let fs = require("fs");

let server = http.createServer(function(request, response){
    let fileName = "";
    if(request.url == "/data")
        fileName = "flights.xml";
    else
        fileName = "index.html";
    fs.readFile(fileName, (_, data) => response.end(data));
});

server.listen(5000, () => console.log("Server is start"));