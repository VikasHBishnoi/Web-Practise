const http=require('http');
const fs=require('fs');
const filecontent=fs.readFileSync("JavaScript/tut57.html");
// console.log(filecontent);
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(filecontent);
})
server.listen(80,"127.0.0.1",()=>{
    console.log("Listening to port 80");
})