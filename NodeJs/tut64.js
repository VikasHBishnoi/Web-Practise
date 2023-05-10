const fs= require("fs");
let text=fs.readFileSync("NodeJs/Files/temp.txt","utf-8");
text=text.replace("practise","Vikas");
console.log(text);
console.log("Creating a new file");
fs.writeFileSync("NodeJs/Files/test.txt",text);
