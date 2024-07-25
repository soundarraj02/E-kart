const { modelNames } = require("mongoose");
const Product = require("../Model/ProductModel")

exports.product_create = async function (req, res) {
    let added = await Product.create(req.body);
    res.send({status:true, message:"Product added", data:added});
}

exports.product_details = async function (req, res) {
    let skip = 0
    let limit = req.query.limit
    let page = req.query.page
    if (page != 1) {
        skip = (page - 1) * parseInt(limit)
        }
    let found 
    if(req.query.searchQuery){
        found = await Product.find({name:{ $regex: req.query.searchQuery, $options: "i" },isActive:true}).populate("category");
    }else{
        found = await Product .find({isActive:true}).select({name:1}).populate("category","name");
    }
    let sortedArray;
    if(req.query.priceVariant) {
        if(req.query.priceVariant=="lowtohigh") {
            sortedArray =  found.sort((a,b)=>a.price - b.price);
        } else if(req.query.priceVariant=="hightolow"){
            sortedArray =  found.sort((a,b)=>b.price - a.price);
        }
    } else {
        // sortedArray=found
        sortedArray =  found.sort((a,b)=>b.price - a.price);
    } 
    
   
    res.send({status:true, message:"Product list", data:found});
}

exports.product_update = async function (req, res) {
    let update = await Product.findOneAndUpdate({_id:req.query.id},req.body);
    let found = await Product.findOne(req.body);
    res.send({status:true,message:"product update",data:found});
};

exports.deleteproduct = async(req,res) => {
    try{
        let deleted = await Product.deleteOne({_id:req.query.id});
        if(deleted.deletedCount>0) {
            res.send({status:true, message:"Product deleted"});
        } else {
            res.send({status:false, message:"Product not deleted"});
        }
    } catch(e) {
        res.send({status:false, message:"error occurred"});
    }
}