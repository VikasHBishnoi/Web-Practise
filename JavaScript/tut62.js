let jsonObj={
    name:"vikas",
    college:"IIITV",
    food:"Vegetarian",
    surname:"Bishnoi"
}

console.log(jsonObj);

let myJsonStr=JSON.stringify(jsonObj);
console.log(myJsonStr);

myJsonStr=myJsonStr.replace('Bishnoi','20noi')
console.log(myJsonStr);

nwJsonObj=JSON.parse(myJsonStr);
console.log(nwJsonObj);
console.log(myJsonStr);
