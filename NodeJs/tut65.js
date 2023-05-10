const fs= require("fs");
let text=fs.readFile("NodeJs/Files/temp.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("Ram Ram");