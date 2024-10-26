let mysql = require("mysql2");

let connection = mysql.createConnection({
    host: "localhost", // 127.0.0.1
    user: "root",
    database: "shop",
    password: ""
}).promise();

// connection.connect((error) =>{
//     if(!error)
//         console.log("Connect to database");
//     else
//         return console.error("Error: " + error.message);
        
// });

// connection.query(`CREATE TABLE brands 
//                   (
//                     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//                     title VARCHAR(50) NOT NULL
//                   )`,
//     function(error, results, fields){
//         console.log("error: " + error);
//         console.log("results: " + results);
//         console.log("fields: " + fields);
// });


// let apple = ["Apple"];
// let sql = "INSERT INTO brands (title) VALUES (?)";

// connection.query(sql, apple, function(error) {
//     if(!error)
//         console.log("Data inserted");
//     else
//         console.log("Error: " + error.message);
// });

//connection.promise();
connection.query("SELECT * FROM products")
          .then(([rows, fields]) => {
            //console.log(result[0]);
            //console.log(rows);
            for(let row of rows) {
                console.log(row);
                for(let key in row)
                    console.log(`${key}: ${row[key]}`);
                console.log();
            }
                
            // for(let field of fields)
            //     console.log(field);
          })
          .catch((error) => {
            console.error(error.message);
          });

connection.end((error) => {
    if(error)
        return console.error("Error: " + error.message);

    console.log("Diconnect");
});