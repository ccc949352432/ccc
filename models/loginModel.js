const conn=require('./baseDB')

module.exports={
    login(user,callback){
        let{email,password}=user
        let sql="select * from users where email = ? and password =?"
        conn.query(sql,[email,password],(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    }
}