const postsModel=require('../models/postsModel')

module.exports={
    showPostaddPage(req,res){
        postsModel.getCategoriesData((err,results)=>{
          if(err) return res.send('404')
          res.render('post-add', {data:results,isLogin:req.session.isLogin})
        })
      },
      addPost(req,res){
        let post = req.body;
        //post.category_id = post.category
        post.user_id = req.session.user.id;
        delete (post.category)
        postsModel.addPost(post,result=>{
          console.log(result);
          if(result) return res.json({
            "code":1,
            "mag":"添加失败"
          })
          res.json({
            "code":0,
            "mag":"添加成功"
          })
        })
      },
      //获取所有文章页面
      showPostsPage(req,res){
        res.render("posts",{isLogin:req.session.isLogin})
      },
      //获取数据库数据
      getAllPostsData(req,res){
        let currentPage=req.query.currentPage
        currentPage=currentPage?currentPage:1

        postsModel.getAllPostsData(currentPage,(err,results)=>{
            if(err) return res.json({
              "code":1,
              "msg":"获取文章数据失败"
            })
            res.json({
              "code":0,
              "msg":"获取文章数据成功",
              "posts":results[0],
              "count":results[1][0].totalCount
            })
        })
      },
      //根据id删除文章
      delPostsById(req,res){
        let {id}=req.query
        postsModel.delPostsById(id,resutl=>{
          if(resutl) return res.json({
            "code":1,
            "msg":"删除文章失败"
          })
             res.json({
              "code":0,
              "msg":"删除文章成功"
             })
        })
      },
      showEditPostsPage(req, res) {
        let {id} = req.query;
          postsModel.getPostsDataById(id, (err, result) => {
          if (err) return res.send('404')
          res.render('editPosts', {isLogin: req.session.isLogin,...result[0][0],categories: result[1]
          })
        })
      },
      updatePosts(req,res){
        
      }
  }