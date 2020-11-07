// 1.网址：express.com.cn   安装node i express --save
//①引入express框架
const { json } = require("body-parser");
const { request, response } = require("express");
const express = require("express");

//②创建应用对象
const app = express();
//③创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
//此处是设置Ajax发送get请求所能收到的消息
app.get('/server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
    response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    response.header('X-Powered-By', '3.2.1')
    //设置响应体
    response.send('HELLO Ajax----, My Name is xxx');
});

app.get('/json-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
    response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    response.header('X-Powered-By', '3.2.1')

    //响应一个数据
    const data = {
        name : 'hexin',
        age : 22
    };

    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    // response.send('HELLO Ajax JSON, My Name is xxx');
    response.send(str);
});

//此处是设置Ajax发送post请求所能收到的消息
app.post('/server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With,*');
    response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    response.header('X-Powered-By', '3.2.1')

    //响应头

    //设置响应体
    response.send('HELLO Ajax POST----222, My Name is xxx');
});

//all可以接受任意类型的请求
app.all('/server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With,*');
    response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    response.header('X-Powered-By', '3.2.1')

    //响应头

    //设置响应体
    response.send('HELLO Ajax POST, My Name is xxx');
});


//针对IE缓存
app.get('/ie',(request,response)=>{
    //设置响应头,设置允许跨域
    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
    response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    response.header('X-Powered-By', '3.2.1')
    //设置响应体
    response.send('HELLO IE -2');
});

//延时响应
app.all('/delaydir',(request,response)=>{
    //设置响应头,设置允许跨域
    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
    response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    response.header('X-Powered-By', '3.2.1')

    setTimeout(()=>{
    //设置响应体
    response.send('延时响应');
    },3000);
});

//jQuery服务
app.all('/jQuery-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With','*');
    response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    response.header('X-Powered-By', '3.2.1')

    const data = {name : "hexin"};
    // response.send('HELLO jQuery AJAX');
    response.send(JSON.stringify(data));
});

//axios服务
app.all('/axios-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', "*");
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    response.header('X-Powered-By', '3.2.1')

    const data = {name : "hexin"};
    // response.send('HELLO jQuery AJAX');
    response.send(JSON.stringify(data));
});


//fetch服务
app.all('/fetch-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', "*");
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    response.header('X-Powered-By', '3.2.1')

    const data = {name : "hexin"};
    // response.send('HELLO jQuery AJAX');
    response.send(JSON.stringify(data));
});

//jsonp服务
app.all('/jsonp-server',(request,response) => {
    // response.send('console.log("hello jsonp-hello")');
    const data = {
        name : 'hexin-12345'
    };
    //将数据转化为字符串
    const str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});

//用户名检测是否存在
app.all('/check-username',(request,response) => {
    // response.send('console.log("hello jsonp-hello")');
    const data = {
       exist : 1,
       msg : '用户名已经存在'
    };
    //将数据转化为字符串
    const str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});


//
app.all('/jQuery-jsonp-server',(request,response) => {
    // response.send('console.log("hello jsonp-hello")');
    const data = {
       name : 'hexin-hexin',
       age : 12
    };
    //将数据转化为字符串
    const str = JSON.stringify(data);
    //接收callback
    let cb = request.query.callback;
    //返回结果
    response.end(`${cb}(${str})`);
});


app.all('/cors-server',(request,response)=>{

    //设置响应头
    response.header('Access-Control-Allow-Origin','*');
    // response.header('Access-Control-Allow-Origin','http://127.0.0.1:5500');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.header('Access-Control-Allow-Methods','*');

    response.send('hello cors');
})


//④监听端口启动服务
app.listen(8000,()=>{
    console.log("8000端口监听中......");
})