console.log("This is date and time tutorial");

let currentdate = new Date();
console.log(currentdate);

let referencedt = new Date(0);
console.log(referencedt);

let timeacctoref = new Date(1000000);
// 1000000 is in millisecond
console.log(timeacctoref);

// let newDate= new Date("2019-09-4");
// console.log(newDate);
// let newDateq=new Date(year,month,date,hourse,minues,seconds,milliseconds);

let newDate = new Date(2023, 4, 10, 4, 45, 10, 100);
console.log(newDate);

let yr = newDate.getFullYear();
let dt = newDate.getDate();

let day=currentdate.getDay();
// Give 6 for saturday
console.log("Is sunday ",day);
console.log("They year in which u get inernship and placement " + yr + " The date would be " + dt);