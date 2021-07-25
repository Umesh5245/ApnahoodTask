const express =require('express')
const SellerController = require('../controllers/SellerController')
const router =express.Router()

router.post('/create-catalog', SellerController.createcatalog)
router.post('/orders', SellerController.sellerorder)


module.exports =router