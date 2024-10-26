let express = require("express");
let mysql = require("mysql2");

let app = express();
let urlParser = express.urlencoded({extended: false});

let pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "shop",
    password: ""
});

app.set("view engine", "hbs");

app.get("/", function(request, response){
    pool.query(`SELECT p.id, p.title AS product, b.title AS brand, p.price
                    FROM products AS p
                    INNER JOIN brands AS b
                        ON b.id = p.brand_id`,
                function(error, result){
                    if(error){
                        return console.error("Error: " + error.message);
                    }
                    else{
                        response.render(__dirname + "/index_products.hbs",{
                            products: result
                        });
                    }
                });
    });

app.listen(5000, () => console.log("Server started"));