const conn=require('./baseDB')
const categoriesModel = require('./categoriesModel')

module.exports={
      getCategoriesData(callback){
        categoriesModel.getCategoriesData((err,results)=>{
          if(err) return callback(err)
          callback(null,results)
        })
      },
      addPost(post, callback) {
        var sql = 'insert into posts set ?';
        conn.query(sql, post, (err, results) => {
          if (err) callback(err)
    
          callback(null)
        })
      },
      // 获取所有文章页面中的真正所有的数据
      getAllPostsData(currentPage,callback){
       let pageCount = 10  // 表示每页显示的条数
       let offset = (currentPage-1) * pageCount // 表示起始的索引
       let sql = `select p.id,p.slug,p.title,p.status,p.created,u.nickname,c.name from posts as p LEFT JOIN users as u on p.user_id = u.id LEFT JOIN categories as c on p.category_id = c.id ORDER BY id desc limit ${pageCount} offset ${offset};select count(*) as totalCount from posts;`
        conn.query(sql,(err,results)=>{
          if(err) return callback(err)
          callback(null,results)
        })
      },
      //根据id来删除数据
      delPostsById(id,callback){
        let sql="delete from posts where id = ?"
        conn.query(sql,id,(err,results)=>{
          if(err) return  callback(err)
          callback(null)
        })
      },
      getPostsDataById(id, callback) {
        let sql = 'select * from posts where id = ?;select * from categories'
        conn.query(sql, id, (err, results) => {
          if (err) return callback(err)
          callback(null, results)
        })
      }
    }