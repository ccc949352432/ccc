const express=require('express')
const settingsCtrl=require('../controllers/settingsCtrl')
let router=express.Router()

router.get('/nav-menus',settingsCtrl.showNavMenusPage)
.get('/getNavMenusData',settingsCtrl.getNavMenusData)
.post('/addNewNavMenus',settingsCtrl.addNewNavMenus)
.get('/delNavMenus',settingsCtrl.delNavMenus)

.get('/slides',settingsCtrl.showSlidesPage)
.get('/getSlidesData',settingsCtrl.getSlidesData)
.post('/addNewSlides',settingsCtrl.addNewSlides)
.get('/delSlides',settingsCtrl.delSlides)

.get('/settings',settingsCtrl.showSettingsPage)
module.exports=router