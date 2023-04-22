function greet(){
    console.log("Good Morning  normal function ");
}
let greet2= ()=>{
    console.log("Good Morning arrow")
}
let sum=(a,b)=>{
    return a+b;
}
sum(45,4);

let obj={
    names:["vikas","vishal","tejas"],
    speak(){
        this.names.forEach((student)=>{
            console.log(student);
        });
    }
}