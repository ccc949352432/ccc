const settingsModel=require('../models/settingsModel')

module.exports={
    showNavMenusPage(req,res){
        res.render('nav-menus', { isLogin: req.session.isLogin })
    },
    getNavMenusData(req,res){
        settingsModel.getNavMenusData((err,result)=>{
            if(err) return res.json({
                "code": 1,
                "msg": "查询数据失败"
            })
            res.json({
                "code": 0,
                "msg": "查询数据成功",
                "data": JSON.parse(result[0].value)
            })
        })
    },
    //添加数据
    addNewNavMenus(req,res){
        let nav=req.body
        settingsModel.addNewNavMenus(nav,result=>{
            if(result) res.json({
                "code": 1,
                "msg": "添加失败"
            })
            res.json({
                "code": 0,
                "msg": "添加成功"
            })
        })
    },
    //删除数据
    delNavMenus(req,res){
        let {index} =req.query
        settingsModel.delNavMenus(index,result=>{
            if(result) return res.json({
                "code": 1,
                "msg": "删除导航项失败"
            })
            res.json({
                "code": 0,
                "msg": "删除导航项成功"
            })
        })
    },
    //图片轮播
    showSlidesPage(req,res){
        res.render('slides', { isLogin: req.session.isLogin })
    },
    //查询数据
    getSlidesData(req,res){
        settingsModel.getSlidesData((err,result)=>{
            if(err) return res.json({
                "code": 1,
                "msg": "查询数据失败"
            })
            res.json({
                "code": 0,
                "msg": "查询数据成功",
                "data": JSON.parse(result[0].value)
            })
        })
    },
    //上传数据
    addNewSlides(req,res){
        let slides=req.body
        settingsModel.addNewSlides(slides,result=>{
            if(result) return res.json({
                "code": 1,
                "msg": "添加失败"
            })
            res.json({
                "code": 0,
                 "msg": "添加成功"
            })
        })
    },
    //删除数据
    delSlides(req,res){
        let {index} =req.query
        settingsModel.delSlidesByIndex(index,result=>{
           if(result) return res.json({
            "code": 1,
            "msg": "删除失败"
           })
           res.json({
            "code": 0,
            "msg": "删除成功"
           })
        })
    },

    showSettingsPage(req,res){
        res.render('settings', { isLogin: req.session.isLogin })
    }

}