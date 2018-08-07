
//引入要用的模板
const fs = require('fs');

const http = require('http');

const path = require('path');

//获取要访问的地址(根目录)
let rootPath = path.join(__dirname,'www');//console.log(rootPath);

//创建服务器
let server = http.createServer((request,response)=>{
    response.end('hello')
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('请求成功!');
})

