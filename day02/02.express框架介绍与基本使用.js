// 1.网址：express.com.cn   安装node i express --save
//①引入express框架
const express = require("express");

//②创建应用对象
const app = express();

//③创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/',(request,response)=>{
    //设置响应
    response.send('HELLO EXPRESS');
});

//④监听端口启动服务
app.listen(8000,()=>{
    console.log("8000端口监听中......");
})