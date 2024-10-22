let http = require("http");

let server = http.createServer(function(request, response){
    response.end("Hello world");
});

server.listen(5000, "127.0.0.1", function(){
    console.log("Server starting");
});


// http.createServer(function(request, response){
//     response.end("Hello world");
// }).server.listen(5000, "127.0.0.1", function(){
//     console.log("Server starting");
// });