let express = require("express");

let app = express();

// app.use(function(request, response, next){
//     response.write("Middleware 1");
//     next();
// });

// app.use(function(request, response, next){
//     response.write("Middleware 2");
//     next();
// });

// app.get("/", function(request, response){
//     response.end("Middleware End");
// });

let router = express.Router();


app.use("/about", function(_, response){
    response.send("About");
});

app.use("/gallery", router);

router.use("/category", function(_, response){
    response.send("Gallery Category");
});

router.use("/:id", function(request, response){
    response.send("Gallery Item " + request.params.id);
});

router.use("/", function(_, response){
    response.send("Gallery Full");
});


app.use("/", function(_, response){
    response.send("Home page");
});

app.listen(5000);