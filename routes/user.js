const express =require('express')
const UserController = require('../controllers/UserController')
const router =express.Router()

router.post('/register', UserController.store)
router.post('/login', UserController.login)


module.exports =router