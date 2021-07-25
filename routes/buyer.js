const express =require('express')
const BuyerController = require('../controllers/BuyerController')
const router =express.Router()

router.get('/list-of-sellers', BuyerController.showseller)
router.get('/seller-catalog', BuyerController.sellercatalog)
router.post('/create-order', BuyerController.createorder)

//router.post('/orders', SellerController.orders)


module.exports =router