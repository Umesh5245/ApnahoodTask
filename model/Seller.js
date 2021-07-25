const  mongoose = require('mongoose')

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const SellerSchema =new mongoose.Schema({
    sellername:{
        type: String
    },
    selleremail:{
        type: String,
        unique: true,
        index: true,
        lowercase: true,
        required: true,
    },
    product: [{ type: 'String' }],
    price: [{ type: 'Number' }],
},  { collection: 'SellerCatalog' },{timestamps:true})
const Seller=mongoose.model('Seller',SellerSchema)
module.exports= Seller