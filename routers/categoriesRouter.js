const express=require("express")
const categoriesCtrl=require('../controllers/categoriesCtrl')

var router=express.Router()

router.get('/categories',categoriesCtrl.showCategoriesPage)
.get('/getCategoriesData',categoriesCtrl.getCategoriesData)
.post('/addCategories',categoriesCtrl.addCategories)
.get('/delCategories',categoriesCtrl.delCategoriesById)
.get('/editCategories',categoriesCtrl.getCGInfoById)
.post('/updateCategories',categoriesCtrl.updateCGById)
.get('/delMoreCategories',categoriesCtrl.delMoreCGByIds)
module.exports=router