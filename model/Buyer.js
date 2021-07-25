const  mongoose = require('mongoose')

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const OrderSchema =new mongoose.Schema({
    sellername:{
        type: String
    },
    selleremail:{
        type: String
    },
    product: [{ type: 'String' }],
   
    price: [{ type: 'Number' }]   ,
    quantity:[{ type: 'Number' }]   ,
    username:{
        type:String
    },
    useremail:{
        type:String
    }
},  { collection: 'Order' },{timestamps:true})
const Order=mongoose.model('Order',OrderSchema)
module.exports= Order