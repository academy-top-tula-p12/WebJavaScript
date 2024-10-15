let http = require("http");
let fs = require("fs");

let server = http.createServer(function(request, response){
    let fileName = "";
    // if(request.url == "/data"){
    //     fileName = "flights.json"
    //     //response.setHeader("my-header", "Maxim Efimov");
    //     //response.end("Welcome to Fetch!");

    //     //let flight = {name: "ASF-908", from: "Moscow", to: "Kazan" };

    //     // let flights = 
    //     // response.end(JSON.stringify(flights));
    // }
    // else if(request.url == "/image")
    //     fileName = "image01.jpg";
    if(request.url == "/")
        fileName = "index.html";
    else{
        fileName = request.url.substring(1);
    }

        
    fs.readFile(fileName, (error, data) => response.end(data));
});

server.listen(5000, () => console.log("Server is started"));