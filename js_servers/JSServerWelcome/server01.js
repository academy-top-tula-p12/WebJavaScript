let http = require("http");
let fs = require("fs");

// http.createServer(function(_, response){
//     fs.readFile("index.html", (_, data) => response.end(data));
// }).listen(5000, () => console.log("Server is start"));

// let server = http.createServer(function(_, response){
//     fs.readFile("index.html", (_, data) => response.end(data));
// });

let server = http.createServer(function(request, response){
    if(request.url == "/about"){
        response.end("This About Page");
    }
    else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
});


server.listen(5000, () => console.log("Server is start"));