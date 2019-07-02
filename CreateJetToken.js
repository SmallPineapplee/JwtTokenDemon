/*
 * #用于生成Jwt Token的js demon.
 * #我们使用windows终端运行js demon，生成jwt token.
 * 第1步:如果没有安装node.js首先需要安装node.js(Node.js 安装包及源码下载地址为：https://nodejs.org/en/download/。)
 * npm一般是随着node.js一起安装的，安装完可以node -v 和npm -v查看下。
 * 	   	   
 *第2步:快捷键 win+r 运行cmd进入到windows控制终端，cd到刚刚nodeJs的安装目录下执行npm install jwt-simple，安装jwt-simple jS库，安装完之后会发现
 *刚刚node_modules目录下面多了一个jwt-simple文件夹，这就是库文件我可以查看其中js代码或者修改代码，我们查看这个库的代码就会发现jwt-simple库
 *的head是固定的，默认是{"typ": "JWT","alg": "HS256"}。
 * 	   	   	   	   	   
 *第3步:安装完jwt-simple后编写如下示例代码保存JwtToken.js。
 *
 *第4步:在window终端运行代码 node JwtToken.js
 *
 **/

'use strict'
var jwt = require('jwt-simple');

//payload按照文档说明生成就好，此处只是一个范例
var payload =
{
"sub":"xxxxxxx",
"name":"sssssss",
"iat":1213414145
};

//你申请的开发者appId对应的secret
var secret = 'your secret';

//生成token
var token = jwt.encode(payload, secret, 'HS256');
console.log(token);

//解码token，输出payload部分
var decode = jwt.decode(token, secret);
console.log(decode);
