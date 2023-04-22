let co=0;
let par=document.getElementById("firstpara");
console.log("GGF",par);
par.addEventListener('mouseover',function run(){
    console.log("MouseOver");
});
par.addEventListener('mouseout',function run(){
    console.log("Out");
});
function togglehide(){
    let Btncontent=document.getElementById("btn");
    let paracontent=document.getElementById("firstpara");
    console.log(Btncontent);
    // let co=0;
    if(co%2==0){
        paracontent.style.display='none';
        Btncontent.innerHTML="Change kardiya dekla";
    }
    else{
        paracontent.style.display='block';
        Btncontent.innerHTML="show me";
    }
    co++;
    // check();
}
// Just write to see how let global and local works
// function check(){
//     console.log("Dekh",co);
//     co++;
// }
console.log(co);