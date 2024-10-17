let http = require("http");
let fs = require("fs");


let server = http.createServer(function(request, response){
    let path = request.url.substring(1);
    console.log(path);
    
    if(path == "")
        path = "index.html";
    fs.readFile(path, function(error, data){
        if(path.endsWith(".js"))
            response.setHeader("Content-Type", "text/javascript");
        response.end(data);
    });    
});

server.listen(5000, () => console.log("Server starting"));