// 1.网址：express.com.cn   安装node i express --save
//①引入express框架
const express = require("express");

//②创建应用对象
const app = express();
app.port
//③创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
    response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    response.header('X-Powered-By', '3.2.1')


    //设置响应体
    response.send('HELLO Ajax, My Name is xxx');
});

//④监听端口启动服务
app.listen(8000,()=>{
    console.log("8000端口监听中......");
})