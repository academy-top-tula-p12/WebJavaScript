let http = require("http");
let fs = require("fs");

let server = http.createServer(function(request, response){
    if(request.url == "/"){
        fs.readFile("index.html", (error, data) => {
            if(error){
                response.statusCode = 404;
                response.end("<h3>Resource not found</h3>");
            }
            else
                response.end(data);
        });
    }

    if(request.url == "/news.php" && request.method == "GET"){
        fs.readFile("news.php", (error, data) => {
            if(error){
                response.statusCode = 404;
                response.end("<h3>Resource not found</h3>");
            }
            else{
                // let dataClient = "";
                // for await (let chanck of request){
                //     dataClient += chanck;
                // }
                // //flightNumber = "ABC-" + flightNumber;
                // let data = JSON.parse(dataClient);
                response.end(data);
            }
                
        });
    }
});

server.listen(5000, (error, data) => console.log("Server is strating"));