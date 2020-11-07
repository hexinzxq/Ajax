const { request, response } = require("express");
const express = require("express");

const app = express();

app.get('/home',(request,response)=>{
    //响应一个页面
    response.sendFile(__dirname+'/index.html');
});

app.get('/data',(request,response)=>{
        //设置响应头,设置允许跨域
        response.header('Access-Control-Allow-Origin', "*");
        response.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
        response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
        response.header('X-Powered-By', '3.2.1')
    response.send('用户数据');
})

app.listen(9000,()=>{
    console.log("9000端口服务已经启动");
})