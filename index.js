require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const port = 3005;
const {getAll,getOne,update,create,deleteProduct} = require("./products_controller")

var app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    //console.log(dbInstance)
    app.set("db",dbInstance)
}).catch(err=>console.log(err));

app.get("/api/products",getAll);
app.get("/api/products/:id",getOne);
app.put("/api/products/:id",update);
app.post("/api/products",create);
app.delete("/api/products/:id",deleteProduct);




app.listen(process.env.PORT || port,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})