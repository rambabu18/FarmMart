const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyparser.json());
mongoose.connect("mongodb://localhost/react-shopping-cart-db",{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const Product = mongoose.model("products", new mongoose.Schema({
    id:{type:String, default: shortid.generate},
    title:String,
    description:String,
    image:String,
    price:Number
}))

app.get("/api/products", async (req,res)=>{
 const products = await Product.find({});
 res.send(products);
});

app.post("/api/products", async(req,res)=>{
    const newProduct = new Product(req,res);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
})

app.delete("/api/products/:id", async(req,res)=>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

const port = process.env.PORT || 5000;
app.listen(port,() => console.log("serve at http://localhost:5000"));