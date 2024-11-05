let Sequelize = require("sequelize");
let sequelize = new Sequelize("shop", "root", "", {
    dialect: "mysql",
    host: "localhost"
});

let Product = sequelize.define("product", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    brand_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

Product.findAll({raw: true})
       .then(products => {
        console.log(products);
       })
       .catch(error => console.log(error));