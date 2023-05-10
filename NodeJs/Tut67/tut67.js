const http = require('http');
const fs = require('fs');
// const { Console  = require('console');

const hostname = '127.0.0.1';
const port = 3000;
const home=fs.readFileSync('./NodeJs/Tut67/index.html')
const about=fs.readFileSync('./NodeJs/Tut67/about.html')
const services=fs.readFileSync('./NodeJs/Tut67/services.html')
const contact=fs.readFileSync('./NodeJs/Tut67/contact.html')
// let url="";
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // Console.log(url);
    res.setHeader('Content-Type', 'html');
    let url=req.url;
    console.log(url);
    // res.end(home);
    if(url=='/' ){
        res.end(home);
    }
    else if(url=='/NodeJs/Tut67/index.html'){
        console.log("????");
        console.log(url);
        res.end(home);
    }
    else if(url=='/NodeJs/Tut67/about.html'){
        console.log("ABBB");
        console.log(url);
        res.end(about);
    }
    else if(url=='/NodeJs/Tut67/services.html'){
        console.log("SSSS");
        console.log(url);
        res.end(services);
    }
    else if(url=='/NodeJs/Tut67/contact.html'){
        console.log("CCC");
        console.log(url);
        res.end(contact);
    }
    else if(url!='/favicon.ico'){
        console.log("NN");
        console.log(url);
        res.end("NOt found");
    }
});
// console.log(url);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});