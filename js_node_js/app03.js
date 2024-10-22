let http = require("http");
let fs = require("fs");

let server = http.createServer((request, response) =>{
    let fileName = request.url.substring(1);
    console.log(fileName);

    // fs.access(fileName, fs.constants.R_OK, (error) =>{
    //     if(error){
    //         response.statusCode = 404;
    //         response.end("Not found");
    //     }
    //     else{
    //         fs.createReadStream(fileName).pipe(response);        
    //     }  
    // });

    fs.readFile(fileName, (error, data) =>{
        if(error){
            response.statusCode = 404;
            response.end("Not found");
        }
        else
            response.end(data);
    });
});

server.listen(5000, function(){
    console.log("Server starting");
});