const express = require('express')
const commentsCtrl = require('../controllers/commentsCtrl')

let router = express.Router()

router.get('/comments',commentsCtrl.showCommentsPage)
  .get('/getCommentsData',commentsCtrl.getCommentsDataByPage)
  .get('/getCommentsDataByPage', commentsCtrl.getCommentsDataByPage)
  .get('/delCommentsById', commentsCtrl.delCommentsById)
  .get('/approvedComments', commentsCtrl.approvedCommentsById)
  .get('/rejectedComments', commentsCtrl.rejectedCommentsById)
module.exports = router