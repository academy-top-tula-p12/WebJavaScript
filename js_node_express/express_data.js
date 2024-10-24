let express = require("express");

let app = express();

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index_form.html");
});

// app.get("/user", function(request, response){
//     let name = request.query.name;
//     let age = request.query.age;
//     let responseText = `name: ${name}, age: ${age}`;
//     console.log(responseText);
//     response.send(responseText);
// });

let formParser = express.urlencoded({extended: false});

app.post("/user", formParser, function(request, response){
    console.log(request.body);    
});

app.listen(5000);