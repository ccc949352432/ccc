
const loginModel = require('../models/loginModel')
module.exports = {
  showLoginPage(req,res){
    res.render('login',{})
  },
  login(req,res){
    let user = req.body

    loginModel.login(user,(err,result)=>{
      if(err) return res.json({
        "code":1,
        "msg":"登陆失败"
      })
      
      if (!result.length){
        res.json({
          "code": 2,
          "msg": "账号或密码错误"
        })
      }
      
      if (result.length) {
        // 进行sessionID的设置
        req.session.isLogin = true;  
        req.session.user = result[0];
        res.json({
          "code": 0,
          "msg": "登陆成功"
        })
      }
    })
  },
  logout(req,res){
    req.session.destroy(err=>{
      if(err) return console.log(err.message);

      res.redirect('/login')
    })
  }
}
