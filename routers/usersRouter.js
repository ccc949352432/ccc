const express=require('express')
const usersCtrl=require('../controllers/usersCtrl')

var router=express.Router()

router.get('/users',usersCtrl.showUsersPage)
.get('/getUsersData',usersCtrl.getUsersData)
.post('/addUser',usersCtrl.addUser)
.get('/delUser',usersCtrl.delUserById)
.get('/editUser',usersCtrl.getUserInfoById)
.post('/updateUser',usersCtrl.updateUserById)
.get('/delMoreUsers',usersCtrl.delMoreUsersByIds)

//个人中心页面
.get('/profile',usersCtrl.showProfilePage)
.post('/updateProfileInfo',usersCtrl.updateProfileInfoById)
.get('/passwordReset',usersCtrl.showPasswordResetPage)
.post('/validateOldPassword',usersCtrl.validateOldPasswordById)
.post('/updateProfilePassword',usersCtrl.updateProfilePasswordById)


module.exports=router