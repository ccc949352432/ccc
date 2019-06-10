const categoriesModel = require('../models/categoriesModel')

module.exports = {
showCategoriesPage(req,res){
    res.render('categories',{isLogin:req.session.isLogin})
  },
    getCategoriesData(req, res) {
        categoriesModel.getCategoriesData((err, results) => {
            if (err) return res.json({
                "code": 1,
                "msg": '查询失败'
            })
            res.json({
                "code": 0,
                "msg": '查询成功',
                "data": results
            })
        })
    },
    addCategories(req, res) {
        let categories=req.body;
        categoriesModel.addCategories(categories,result=> {
            if (result) return res.json({
                "code": 1,
                "msg": '添加失败'
            })
            res.json({
                "code": 0,
                "msg": '添加成功'
            })
        })
    },
    delCategoriesById(req,res){
        let {id}=req.query
        categoriesModel.delCategoriesById(id,result=>{
            if(result) return res.json({
                "code":1,
                "msg":"删除失败"
            })
            res.json({
                "code":0,
                "msg":"删除成功"
            })
        })
    },
    getCGInfoById(req,res){
        let {id} = req.query
        categoriesModel.getCGInfoById(id,(err,result)=>{
            if(err) return res.json({
                "code":1,
                "msg":"查询失败"
            })
            res.json({
                "code":0,
                "msg":"查询成功",
                "data":result
            })
        })
    },
    updateCGById(req,res){
        let categorie=req.body
        console.log(categorie);
        categoriesModel.updateCGById(categorie,result=>{
            if(result) return res.json({
                "code":1,
                "msg":"更新失败"
            })
            res.json({
                "code":0,
                "msg":"更新成功"
            })
        })
    },
    delMoreCGByIds(req,res){
        let {ids}=req.query
        categoriesModel.delMoreCGByIds(ids,result=>{
            if(result) return res.josn({
                "code":1,
                "msg":"批量删除失败"
            })
            res.json({
                "code":0,
                "msg":"批量删除成功"
            })
        })
    }
}