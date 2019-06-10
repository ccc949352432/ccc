const express=require('express')
const bodyParser=require('body-parser')
const session=require('express-session')
const fs=require('fs')
const path=require('path')



var app=express()

app.set('view engine','ejs')
app.set('views','./views')

app.use('/assets',express.static('assets'))
app.use('/static',express.static('static'))

app.use(bodyParser.urlencoded({extended:false}))

app.use(session({
    secret:'kljaklsjflaksjdfa', 
    resave:false,
    saveUninitialized:false
}))

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})

//循环路由
fs.readdir(path.join(__dirname,'./routers'),(err,data)=>{
    data.forEach(item=>{
    app.use(require(`./routers/${item}`))
    })
  })


