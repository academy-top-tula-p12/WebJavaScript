let http = require("http");
let fs = require("fs");

let server = http.createServer(async function(request, response){
    if(request.url === "/flight"){

        let body = "";
        for await (let chank of request)
            body += chank;
        
        let postData = body.split("&");
        let postFlight = {};

        for(let item of postData){
            console.log(item);
            let pair = item.split("=");
            postFlight[pair[0]] = pair[1];
        }
        console.log(postFlight);
        
            
        
        response.end("Data reading");
    }
    else{
        fs.readFile("index_form.html", (error, file) => response.end(file));
    }

});

server.listen(5000, function(){
    console.log("Server starting");
});