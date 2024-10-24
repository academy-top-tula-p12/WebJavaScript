let express = require("express");

let app = express();

app.set("view engine", "hbs");

app.use("/view", function(_, response){

    response.render("index_view.hbs", {
        title: "Header number one",
        subtitle: "Subtitle for example",
        items: ["Item 1", "Item 2", "Item 3"]
    });
});


app.use("/", function(_, response){
    response.send("Home page");
});

app.listen(5000);