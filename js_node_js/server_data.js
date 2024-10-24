let http = require("http");
let fs = require("fs");

let server = http.createServer(async function(request, response){
    if(request.url === "/hello"){

        // // events data and end
        // let data = "";
        // request.on("data", (chank) =>{
        //     data += chank;
        // });
        // request.on("end", () => {
        //     console.log(data);
        //     response.end("Data reading");
        // });

        // async reading request
        let chanks = [];
        for await (let chank of request)
            chanks.push(chank);

        let data = Buffer.concat(chanks).toString();
        let flight = JSON.parse(data);
        console.log("Flight:");
        for(let key in flight)
            console.log(`\t${key}: ${flight[key]}`);
            
        
        response.end("Data reading");
    }
    else{
        fs.readFile("index.html", (error, file) => response.end(file));
    }

});

server.listen(5000, function(){
    console.log("Server starting");
});