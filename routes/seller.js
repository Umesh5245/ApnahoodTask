const express =require('express')
const SellerController = require('../controllers/SellerController')
const router =express.Router()

router.post('/create-catalog', SellerController.createcatalog)
router.get('/orders', SellerController.sellerorder)


module.exports =router