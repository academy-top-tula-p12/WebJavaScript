let express = require("express");

let app = express();

// app.use(express.static(__dirname + "/public"));

// app.get("/", (request, response) => {
//     response.sendFile(__dirname + "/index.html");
// });

// app.get("/about", (request, response) => {
//     response.send("<h1>About page<h1>");
// });

// app.get("/gallery", (request, response) => {
//     response.send("<h1>Gallery page<h1>");
// });



app.get("/", (request, response) => {
    response.sendFile(__dirname + "/public/index.html");
});

app.post("/data", (request, response) => {
    console.log("Post request!");
});



app.listen(5000, () => console.log("Server starting"));