const express=require('express')
const loginCtrl=require('../controllers/loginCtrl')

const router=express.Router()

router.get('/login',loginCtrl.showLoginPage)
.post('/login',loginCtrl.login)
.get('/logout',loginCtrl.logout)

module.exports=router