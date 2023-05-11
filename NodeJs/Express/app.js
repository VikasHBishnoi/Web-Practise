const exp = require("constants");
const express = require("express");
const app=express();
const path=require("path");
// console.log(app);

// // Just a random varaible to see how printed in console
// let a=440;



// Express Specific Stuff
app.use("/staticfile",express.static('staticfile')); // for Serving static files
app.use(express.urlencoded());

// Fug Specific Stuff
app.set('view engine','pug'); // SetThe template engine as pug
app.set('views',path.join(__dirname,'views')); //set the views directory

//EndPoints
app.get('/',(req,res)=>{
    const tut="Pug Tutorial";
    const nam="Vikas Bishnoi Fitness"
    res.status(200).render('index',{'title':tut, "name":nam});
})
app.post('/',(req,res)=>{
    Name =req.body.Name;
    age=req.body.age;
    gender=req.body.gender
    console.log(Name);
    console.log(age);
    console.log(gender);
    res.status(200).end("Succes")
})

// Comments for tut 71 and 72
// // Out pug demo endpoint
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there! Thanks for pug demo I am Vikas' })
// });

// app.get("/",(req,res)=>{
//     res.send("This my let first exprss app   ram sa vikas");
// });
// app.get("/about",(req,res)=>{
//     res.send("This my first express route get point");
// });
// app.post("/about",(req,res)=>{
//     res.send("This my first express route post part");
// });


let port=80;
app.listen(port,()=>{
    console.log(`The application Started Succesfully on port ${port}`);
});