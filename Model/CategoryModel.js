const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required:true,
        default:"fruits"
    },
   isActive:{
    type:Boolean,
    default:true
}
});


// Export the model
module.exports = mongoose.model('Category', categorySchema);