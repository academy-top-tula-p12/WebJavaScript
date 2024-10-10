let http = require("http");
let fs = require("fs");

let server = http.createServer(async function(request, response){
    if(request.url == "/data"){
        //let flightNumber = "";
        let flightJson = "";
        for await (let item of request){
            flightJson += item;
        }
        //flightNumber = "ABC-" + flightNumber;
        let flight = JSON.parse(flightJson);
        flight.name = "XYZ-" + flight.name;
        flight.date = "10." + flight.date;
        response.end(JSON.stringify(flight));
    }
    else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
});

server.listen(5000, () => console.log("Server is start"));