const conn=require('./baseDB')

module.exports={
    getUsersData(callback){
        var sql="select * from users where isdel=0"
        conn.query(sql,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    },
    addUser(user,callback){
        var sql="insert into users set ?"
        conn.query(sql,user,(err,results)=>{
            if(err) return callback(err)
            callback(null)
        })
    },
    delUserById(id,callback){
        var sql="update users set isdel = 1 where id = ?"
        conn.query(sql,id,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    },
    getUserInfoById(id,callback){
        var sql="select * from users where id = ?"
        conn.query(sql,id,(err,results)=>{
            if(err)  return callback(err)
            callback(null,results)
        })
    },
    updateUserById(user,callback){
        let {id} = user
        delete user.id;
        var sql = "update users set ? where id = ?"
        conn.query(sql,[user,id],(err,results)=>{
          if(err) return callback(err)
          callback(null)
        })
    },
    delMoreUsersByIds(ids,callback){
        let sql = "update users set isDel = 1 where id in (?)"
        conn.query(sql,[ids],(err,results)=>{
          if(err) return callback(err)
        callback(null)
        })
    },
      //更新个人信息
    updateProfileInfoById(profile,callback){
        let {id} = profile 
        delete profile.id 
        let sql = "update users set ? where id = ?"
        conn.query(sql,[profile,id],(err,results)=>{
          if(err) return callback(err)
          callback(null)
        })
    },
    updateProfilePasswordById(obj,callback){
        let {id,password}=obj
        let sql="update users set password = ? where id = ?"
        conn.query(sql,[password,id],(err,results)=>{
             if(err) return callback(err)
             callback(null)
        })
    }

}