const User =require('../model/User')
const Seller =require('../model/Seller')
const Order =require('../model/Buyer')


 
const showseller =(req,res,next)=>{

  
    User.find({type:{ $regex: new RegExp("seller", "ig")}} )
      .then(response =>{
          res.json({
              response
          })
      })
      .catch(error=>{
          res.json({
              message:`am error occuired ${error}`
          })
          
      })
  }
  const sellercatalog =(req,res,next)=>{
  let  selleremail= req.body.seller_id
console.log(selleremail)
  
  Seller.find({selleremail:{ $regex: new RegExp(selleremail, "ig")}} )
      .then(response =>{
          res.json({
              response
          })
      })
      .catch(error=>{
          res.json({
              message:`am error occuired ${error}`
          })
          
      })
  }
  const createorder =(req,res,next)=>{
    let order= new Order({
      selleremail: req.body.seller_id,
      sellername: req.body.sellername,
      product: req.body.product,
      price: req.body.price,
      quantity: req.body.quantity,
      username: req.body.username,
      useremail: req.body.useremail

    })
    order.save()
    .then(response =>{
        res.json({
            message:"order created"
        })
    })
    .catch(error=>{
        res.json({
            message:`${error}`
        })
        
    })
    }
  module.exports={showseller,sellercatalog,createorder}    