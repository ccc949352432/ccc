const conn=require('./baseDB')
 
module.exports={
    //查询数据
    getCommentsDataByPage(currentPage,callback){
        let pageSize=10
        let offset = (currentPage - 1) * pageSize
        let sql=`select c.id,c.author,c.content,c.created,c.status,p.title from comments as c left join posts as p on c.post_id=p.id order by id desc limit ? offset ?;select count(*) as totalCount from comments;`
        conn.query(sql,[pageSize,offset],(err,results)=>{
           if(err) return callback(err)
           callback(null,results)
        })
    },
    //删除数据
    delCommentsById(id,callback){
        let sql="delete from comments where id = ?"
        conn.query(sql,id,(err,results)=>{
            if(err) callback(err)
            callback(null)
        })
    },
    //批准数据
    updateCommentsStatusById(id,status,callback){
        let sql = 'update comments set status = ? where id = ?'
        conn.query(sql,[status,id],(err,results)=>{
          if(err) return callback(err)
          callback(null,results)
        })
      }
    }