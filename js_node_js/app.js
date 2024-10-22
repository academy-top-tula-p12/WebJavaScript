let http = require("http");
let fs = require("fs");

let server = http.createServer(function(request, response){
    fs.readFile("page.html", function(error, data){
        if(error){
            response.statusCode = 404;
            response.end("Not fount");
        }
        else{
            let title = "Gallery";
            let subtitle = "Comanies works gallery";
            let fileFinal = data.toString()
                                .replace(/{title}/g, title)
                                .replace(/{subtitle}/g, subtitle);
            response.end(fileFinal);
        }
    });
});

server.listen(5000, function(){
    console.log("Server starting");
});