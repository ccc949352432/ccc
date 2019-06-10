const commentsModel=require("../models/commentsModel")

module.exports={
    //显示页面
    showCommentsPage(req,res){
        res.render('comments',{isLogin:req.session.isLogin})
    },
    //查询数据
    getCommentsDataByPage(req,res){
        let currentPage=req.query.currentPage
        currentPage = currentPage ? currentPage:1
        commentsModel.getCommentsDataByPage(currentPage,(err,result)=>{
            if(err) return res.json({
                "code":1,
                "msg":"查询评论失败"
            })
            res.json({
                "code":0,
                "msg":"查询评论成功",
                "data":result[0],
                "totalPages": Math.ceil(result[1][0].totalCount/10)
            })
        })
    },
      // 根据id来删除评论内容
    delCommentsById(req,res){
      // 1. 接收传递过来的id
      let {id} = req.query
  
      // 2. 调用model中的方法进行删除数据
      commentsModel.delCommentsById(id,result=>{
        if (result) return res.json({
          "code":1,
          "msg":"删除评论失败"
        })
  
        res.json({
          "code":0,
          "msg":"删除评论成功"
        })
      })
    },
    //根据id批准
    approvedCommentsById(req,res){
        let {id} = req.query
        commentsModel.updateCommentsStatusById(id,'approved',result=>{
          if(result) return res.json({
            "code":1,
            "msg":"更新批准状态失败"
          })
    
          res.json({
            "code": 0,
            "msg": "更新批准状态成功"
          })
        })
    },
    // 根据id拒绝评论状态
    rejectedCommentsById(req, res) {
        let { id } = req.query
        commentsModel.updateCommentsStatusById(id, 'rejected', result => {
          if (result) return res.json({
            "code": 1,
            "msg": "更新拒绝状态失败"
          })
           res.json({
            "code": 0,
            "msg": "更新拒绝状态成功"
          })
        })
    }
}