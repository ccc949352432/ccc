const express=require('express')
const indexCtrl=require('../controllers/indexCtrl')

var router=express.Router()

router.get('/',(req,res)=>{
    indexCtrl.showIndexPage(req,res)
})

module.exports=router