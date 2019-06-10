const conn = require('./baseDB')

module.exports={
    //查询导航菜单数据
    getNavMenusData(callback){
        let sql="select `value` from options where `key` = 'nav_menus';"
        conn.query(sql,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    },
    //添加导航
    addNewNavMenus(nav,callback){
        this.getNavMenusData((err,results)=>{
            if(err) return callback(err)
            let arr=JSON.parse(results[0]['value'])
            arr.push(nav)
            let str=JSON.stringify(arr)
            let sql="update options set `value` = ? where `key` = 'nav_menus';"
            conn.query(sql,[str],(err,results)=>{
                if(err) return callback(err)
                callback(null,results)
            })
        })
    },
    //删除导航
    delNavMenus(index,callback){
        this.getNavMenusData((err,results)=>{
            if(err) return callback(err)
            let arr=JSON.parse(results[0]['value'])
             arr.some((item,ind)=>{
                 if(ind==index){
                    arr.splice(ind,1)
                    return true
                 }
             })
             let str=JSON.stringify(arr)
             let sql="update options set `value` = ? where `key` = 'nav_menus'"
             conn.query(sql,[str],(err,results)=>{
                 if(err) return callback(err)
                 callback(null)
             })
        })
    },
    //查询轮播图数据
    getSlidesData(callback){
        let sql = "select `value` from options where `key` = 'home_slides';"
        conn.query(sql,(err,results)=>{
            if(err) return callback(err)
            callback(null,results)
        })
    },
    //上传数据
    addNewSlides(slides,callback){
        this.getSlidesData((err,results)=>{
          if(err) return callback(err)
          let arr = JSON.parse(results[0]['value'])
          arr.push(slides)
          let str = JSON.stringify(arr)
          let sql = "update options set `value` = ? where `key` = 'home_slides';"
          conn.query(sql, [str], (err, results) => {
            if (err) return callback(err)
            callback(null, results)
          })
        })
    },
    delSlidesByIndex(index,callback){
        this.getSlidesData((err,results)=>{
            if(err) return callback(err)
            let arr=JSON.parse(results[0]['value'])
             arr.some((item,ind)=>{
                 if(ind==index){
                    arr.splice(ind,1)
                    return true
                 }
             })
             let str=JSON.stringify(arr)
             let sql="update options set `value` = ? where `key` = 'home_slides';"
             conn.query(sql,[str],(err,results)=>{
                 if(err) return callback(err)
                 callback(null)
             })
        })
    }
 }

