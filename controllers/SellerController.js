const Seller =require('../model/Seller')

const Order =require('../model/Buyer')

 
const createcatalog =(req,res,next)=>{
    let seller= new Seller({
        sellername: req.body.sellername, 
        selleremail: req.body.selleremail, 
        product: req.body.product,
        price: req.body.price

    })
    

    seller.save()
    .then(response =>{
        res.json({
            message:"Catalog added"
        })
    })
    .catch(error=>{
        res.json({
            message:`${error}`
        })
        
    })
}
const sellerorder =(req,res,next)=>{
    let  selleremail= req.body.seller_id
  
    console.log(selleremail)

    Order.find({selleremail:{ $regex: new RegExp(selleremail, "ig")}} )
        .then(response =>{
            res.json({
                response
            })
        })
        .catch(error=>{
            res.json({
                message:`${error}`
            })
            
        })
    }

module.exports={createcatalog,sellerorder}    