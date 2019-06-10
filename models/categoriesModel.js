const conn = require('./baseDB')

module.exports = {
  getCategoriesData(callback) {
    var sql = "select * from categories where isDel = 0"
    conn.query(sql, (err, results) => {
      if (err) return callback(err)
      callback(null, results)
    })
  },
  addCategories(categories,callback){
    var sql="insert into categories set ?"
    conn.query(sql,categories,(err,results)=>{
      if(err) return callback(err)
      callback(null)
    })
  },
  delCategoriesById(id,callback){
    var sql="update categories set isDel = 1 where id = ?"
    conn.query(sql,id,(err,results)=>{
      if(err) return callback(err)
      callback(null)
    })
  },
  getCGInfoById(id,callback){
    var sql="select * from categories where id = ?"
    conn.query(sql,id,(err,results)=>{
      if(err) return callback(err)
      callback(null,results)
    })
  },
  updateCGById(categorie,callback){
    var id=categorie.id;
    delete categorie.id;
    var sql="update categories set ? where id = ?"
    conn.query(sql,[categorie,id],(err,results)=>{
      if(err) return callback(err)
      callback(null)
    })
  },
  delMoreCGByIds(ids,callback){
    let sql="update categories set isDel = 1 where id in (?)"
    conn.query(sql,[ids],(err,results)=>{
      if(err) return callback(err)
      callback(null)
    })
  }
}