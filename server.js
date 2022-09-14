const connect = require('connect');
const app = connect();
function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS application');
 };
 
 function helloWorldh1(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello from NodeJS Application as html</h1>');
 };


 function helloWorldh2(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"message": "Hello from NodeJS Application as json"}))
 };





      


//telling app were using middleware
 
 app.use('/html',helloWorldh1);
 app.use('/json',helloWorldh2);
 app.use('',helloWorld);
app.listen(3000);