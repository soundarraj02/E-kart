var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
   image:[{type:String}],
   quantity:{type:Number},
   isActive:{type:Boolean},
   category:{
    type:mongoose.Types.ObjectId,
    ref:"Category"
   }
},{
    timestamps:true
   });


// Export the model
module.exports = mongoose.model("Product",productSchema);