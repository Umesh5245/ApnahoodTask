const User =require('../model/User')


 
const store =(req,res,next)=>{
    let user= new User({
        name: req.body.name, 
        email: req.body.email, 
        type: req.body.type,
        phone: req.body.phone,
        password: req.body.password

    })
    

    user.save()
    .then(response =>{
        res.json({
            message:"user added"
        })
    })
    .catch(error=>{
        res.json({
            message:`$error`
        })
        
    })
}
const login =(req,res,next)=>{
    User.findOne({ email: req.body.email ,password:req.body.password}, function (err, abcd) {
      if (abcd){
        res.json("verified   "+abcd.type)
      }
      else{
          res.json("wrong Email or password")
      }
    })
    .catch(error=>{
        res.json({
            message:'an eror occored'
        })
    })
}


module.exports={store,login}    