let express = require("express");

let app = express();

//let jsonParesr = express.json();

app.use(express.json());

app.post("/flight", function(request, response){
    let flightObject = request.body;
    console.log(flightObject);

    response.json(flightObject);
});

app.get("/", function(_, response){
    response.sendFile(__dirname + "/index_json.html");
});

app.listen(5000);