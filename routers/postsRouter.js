const express=require('express')
const postsCtrl=require('../controllers/postsCtrl')
const uploadFileCtrl=require('../controllers/uploadFileCtrl')

var router=express.Router()

router.get('/postadd',postsCtrl.showPostaddPage)
.post('/uploadPostFile', uploadFileCtrl.uploadFile)
.post('/addPost',postsCtrl.addPost)
.get('/posts',postsCtrl.showPostsPage)
.get('/getAllPostsData',postsCtrl.getAllPostsData)
.get('/getPostsDataByPage',postsCtrl.getAllPostsData)
.get('/delPostsById',postsCtrl.delPostsById)
.get('/editPosts',postsCtrl.showEditPostsPage)
.post('/updatePosts',postsCtrl.updatePosts)
module.exports=router