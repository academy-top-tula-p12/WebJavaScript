let http = require("http");
let fs = require("fs");

let server = http.createServer(function(request, response){
    let path = request.url.substring(1);
    if(!path)
        path = "index.html";
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    fs.readFile(path, (error, data) => {
        if(error){
            response.statusCode = 404;
            response.end("<h3>Resource not found</h3>");
        }
        else{
            response.end(data);
        }
    });
});

server.listen(5000, () => console.log("Server is start"));