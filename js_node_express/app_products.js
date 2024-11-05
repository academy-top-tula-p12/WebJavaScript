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
                        ON b.id = p.brand_id
                    ORDER BY p.price`,
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

app.get("/create", function(request, response){
    pool.query("SELECT * FROM brands", function(error, result){
        if(error) 
            return console.log(error.message);
        else{
            response.render(__dirname + "/index_create.hbs",{
                brands: result
            });
        }
    });
});

app.post("/create", urlParser, function(request, response){
    if(!request.body)
        return response.sendStatus(400);

    let product = request.body.title;
    let brand_id = request.body.brand;
    let price = request.body.price;

    pool.query(`INSERT INTO products 
                    (title, brand_id, price) 
                    VALUES (?,?,?)`,
                [product, brand_id, price],
                function(error, result){
                    if(error)
                        return console.log(error.message);
                    response.redirect("/");
                });

    //console.log(product, brand_id, price);
});

app.get("/edit/:id", function(request, response){
    let id = request.params.id;
    let data = {};
    pool.query("SELECT * FROM brands", function(error, result){
        if(error) return console.log(error.message);
        data.brands = result;
    });
    pool.query("SELECT * FROM products WHERE id=?", 
                [id], 
                function(error, result){
                    if(error) return console.log(error.message);
                    
                    data.title = result[0].title;
                    data.selected_id = result[0].id;
                    data.brand_id = result[0].brand_id;
                    data.price = result[0].price;

                    for(let b of data.brands)
                        b.selected = (b.id == result[0].brand_id)
                    
                    response.render(__dirname + "/index_edit.hbs", {
                        product: data
                    }); 
                });
});

app.post("/edit", urlParser, function(request, response){
    if(!request.body) return response.sendStatus(400);
    
    let id = request.body.id;
    let title = request.body.title;
    let brand_id = request.body.brand;
    let price = request.body.price;

    pool.query("UPDATE products SET title=?, brand_id=?, price=? WHERE id=?",
                [title, brand_id, price, id],
                function(error, result){
                    if(error) return console.log(error.message);
                    
                    response.redirect("/");
                });
});

app.post("/delete/:id", function(request, response){
    let id = request.params.id;
    pool.query("DELETE FROM products WHERE id=?",
                [id],
                function(error, result){
                    if(error) return console.log(error.message);
                    response.redirect("/");
                });
});

app.listen(5000, () => console.log("Server started"));