const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());
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
}));

const Order = mongoose.model("order", new mongoose.Schema({
    id :{
        type:String,
        default: shortid.generate
    },
    email: String,
    name: String,
    address: String,
    total: Number,

    cartItems:[
        {
            id:String,
            title: String,
            price: Number,
            count: Number
        },
    ],
},
{
    timestamps:true
}
));

app.post("/api/orders", async(req,res)=>{
    if(!req.body.name ||
        !req.body.email ||
        !req.body.address ||
        !req.body.total ||
        !req.body.cartItems
        )
        {
            return res.send({message: "Data Required"})
        }
        const order = await Order(req.body).save();
        res.send(order);
});

app.get("/api/products", async (req,res)=>{
 const products = await Product.find({});
 res.send(products);
});

app.post("/api/products", async(req,res)=>{
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
})

app.delete("/api/products/:id", async(req,res)=>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

const port = process.env.PORT || 5000;
app.listen(port,() => console.log("serve at http://localhost:5000"));