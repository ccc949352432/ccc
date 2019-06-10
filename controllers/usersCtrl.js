const usersModel = require('../models/usersModel')
module.exports = {
  showUsersPage(req, res) {

    if (!req.session.isLogin) {
      res.redirect('/login')
      return
    }
    res.render('users', {isLogin: req.session.isLogin})
  },
  getUsersData(req, res) {
    usersModel.getUsersData((err, results) => {
      if (err) return res.json({
        "code": 1,
        "msg": "查询失败"
      })

      res.json({
        "code": 0,
        "msg": "查询成功",
        "data": results
      })
    })
  },
  addUser(req, res) {
    // 1. 先接收post请求发送过来的数据
    // console.log(req.body);
    let user = req.body

    // 添加账户状态 
    user.status = "activated"
    user.avatar = "/static/uploads/avatar.jpg"
    // 2. 调用model中的方法进行添加
    usersModel.addUser(user, result => {
      // 对于增删改的操作来说,只要model模块返回一个操作结果即可,即成功或失败,不需要返回真正的数据，因此此时的参数只需要一个即可
      // 对于查询来说,有可能成功有可能失败,所以用两个参数,如果成功会返回真正的数据
      if (result) return res.json({
        "code": 1,
        "msg": "添加失败"
      })

      res.json({
        "code": 0,
        "msg": "添加成功"
      })
    })
  },
  delUserById(req, res) {
    // 1. 接收传递过来的id
    let {
      id
    } = req.query

    // 2. 调用model的方法来删除数据
    usersModel.delUserById(id, result => {
      if (result) return res.json({
        "code": 1,
        "msg": "删除失败"
      })

      res.json({
        "code": 0,
        "msg": "删除成功"
      })
    })
  },
  getUserInfoById(req, res) {
    // 1. 获取传递过来的数据
    let {
      id
    } = req.query

    // 2. 调用方法获取数据
    usersModel.getUserInfoById(id, (err, result) => {
      if (err) return res.json({
        "code": 1,
        "msg": "查询失败"
      })

      res.json({
        "code": 0,
        "msg": "查询成功",
        "data": result
      })
    })
  },
  updateUserById(req, res) {
    // 1. 先接收传递过来的数据
    // console.log(req.body);
    let user = req.body

    // 2. 调用model中的方法进行更新
    usersModel.updateUserById(user, result => {
      if (result) return res.json({
        "code": 1,
        "msg": "更新失败"
      })

      res.json({
        "code": 0,
        "msg": "更新成功"
      })
    })
  },
  delMoreUsersByIds(req, res) {
    // 1. 接收传递过来的数据
    // let ids = req.query.ids;
    let {
      ids
    } = req.query
    // let ids = req.body['ids[]']  // 接收post方式传递过来的数据,注意后端给ids加了一个[]
    // console.log(aa);
    // return;
    // console.log(ids);
    // 2. 调用model中的方法去删除数据
    usersModel.delMoreUsersByIds(ids, result => {
      if (result) return res.json({
        "code": 1,
        "msg": "批量删除失败"
      })

      res.json({
        "code": 0,
        "msg": "批量删除成功"
      })
    })
  },
  showProfilePage(req, res) {
    if (!req.session.isLogin) {
      res.redirect('/login')
      return
    }
    let {
      id
    } = req.session.user
    usersModel.getUserInfoById(id, (err, result) => {
      if (err) return res.send('404')
      res.render('profile', result[0])
    })

  },
  updateProfileInfoById(req, res) {
    // 1. 接收发送过来的数据
    let profile = req.body

    // 2. 调用model中的方法进行更新
    usersModel.updateProfileInfoById(profile, result => {
      if (result) return res.json({
        "code": 1,
        "msg": "更新失败"
      })

      res.json({
        "code": 0,
        "msg": "更新成功"
      })
    })
  },
  showPasswordResetPage(req, res) {
    
    res.render('password-reset', {isLogin: req.session.isLogin})
  },
  validateOldPasswordById(req, res) {
    let {id,password} = req.body
    usersModel.getUserInfoById(id, (err, result) => {
      if (err) return res.json({
        "code": 2,
        "msg": "服务器端错误"
      })
      if (result[0].password == password) {
        res.json({
          "code": 0,
          "msg": "旧密码是正确的"
        })
      } else {
        res.json({
          "code": 1,
          "msg": "旧密码不正确"
        })
      }
    })
  },
  updateProfilePasswordById(req, res) {
   usersModel.updateProfilePasswordById(req.body, result => {
      if (result) return res.json({
        "code": 1,
        "msg": "密码更新失败"
      })

      res.json({
        "code": 0,
        "msg": "密码更新成功"
      })
    })

  }
}