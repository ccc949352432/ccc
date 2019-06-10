//文件上传控制器模块
const formidable=require('formidable')

module.exports={
    uploadFile(req,res){
        var form=formidable.IncomingForm()
        form.encoding = 'utf-8';
        //设置图片路径
        form.uploadDir = "./static/uploads/";
        //保留文件后缀
        form.keepExtensions = true;
        //设置上传字段大小
        form.maxFieldsSize = 20 * 1024 * 1024;
        //设置上传文件的大小
        form.maxFileSize = 200 * 1024 * 1024;
        //设置上传字段的对数
        form.maxFields = 1000;

        form.parse(req,function(err,fields,files){
                if(err) return res.json({
                    "code": 1,
                    "msg": "上传失败"
                })
                console.log(files)
                res.json({
                    "code": 0,
                    "msg": "上传成功",
                    "src": files.avatar.path
                })
        })
    }
}