const express =require('express')
const BuyerController = require('../controllers/BuyerController')
const router =express.Router()

router.post('/list-of-sellers', BuyerController.showseller)
router.post('/seller-catalog', BuyerController.sellercatalog)
router.post('/create-order', BuyerController.createorder)

//router.post('/orders', SellerController.orders)


module.exports =router