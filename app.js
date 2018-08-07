
//引入要用的模板
const fs = require('fs');

const http = require('http');

const path = require('path');

//获取要访问的地址(根目录)
let rootPath = path.join(__dirname,'www');//console.log(rootPath);

//创建服务器
let server = http.createServer((request,response)=>{
    //生成地址
    let targetPath = path.join(rootPath,request.url);//console.log(targetPath);
    //1,判断路径是否存在
    if(fs.existsSync(targetPath)){
        
    }else{
        //转义
        response.setHeader('content-type','text/html;charset=utf-8');
        //如果没有这个文件,把状态码也改成404
        response.statusCode = 404;
        response.end(`
            <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
            <html><head>
            <title>404 Not Found</title>
            </head><body>
            <h1>Not Found</h1>
            <p>你请求的${request.url} 不在服务器上哦,检查一下呗</p>
            </body></html>
            `)
    }
    //2,判断是文件夹还是文件
    //3,判断文件的后缀名,
    //4,跳转
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('请求成功!');
})

