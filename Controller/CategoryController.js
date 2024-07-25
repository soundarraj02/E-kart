const category = require("../Model/CategoryModel");
const Product = require("../Model/ProductModel");

exports.addCategory = async(req,res) => {
    try{
        let addcategory = await category.create(req.body);
        if(addcategory) {
            res.send({status:true, message:"gategory added", data:addcategory});
        } else {
            res.send({status:false, message:"category not added", data:{}});
        }
    } catch(e) {
        res.send({status:false, message:"error occurred"});
    }
}

exports.editCategory = async(req,res) => {
    try{
        let found = await category.findOne({_id:req.body.id})
        if(found) {
         await category.findOneAndUpdate({_id:req.body.id}, req.body);
         res.send({status:true, message:"category updated"});
        } else {
            res.status(404).json({status:false, message:"category not found"});
        }
        console.log(e)
    } catch(e) {
        res.send({status:false, message:"error occurred"});
    }
}

exports.getCategoryList = async(req,res) => {
    try{
        let foundCategory = await category.find({isActive:true});
        res.send({status:true, message:"Category list", data:foundCategory})
    } catch(e) {
        console.log(e)

        res.send({status:false, message:"error occurred"});
    }
}

// exports.deleteCategory = async(req,res) => {
//     try{
//         let deleted = await category.deleteOne({_id:req.query.id});
//         if(deleted.deletedCount>0) {
//             res.send({status:true, message:"Category deleted"});
//         } else {
//             res.send({status:false, message:"Category not deleted"});
//         }
//     } catch(e) {
//         res.send({status:false, message:"error occurred"});
//     }
// }


exports.deleteCategory = async(req,res) => {
    try{
        let deleted = await category.deleteOne({_id:req.query.id}); //category delete
        if(deleted.deletedCount>0) {  //validate deleted or not
            let foundProduct = await Product.find({category:req.query.id}); //find product list of category
            if(foundProduct.length>0) { //validate product data available or not
                foundProduct.forEach(async e=>{  //iterate
                    await Product.deleteOne({_id:e._id}); //delete product 
                })
            }
            res.send({status:true, message:"Category deleted"});
        } else {
            res.send({status:false, message:"Category not deleted"});
        }
    } catch(e) {
        console.log(e)
        res.send({status:false, message:"error occurred"});
    }
}