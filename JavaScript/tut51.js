var string1 = "This is a string"
var string2 = "This is a string2"

let a = 393;
// let a=234; if we try this then its an error
// let is scope of block
{
    // console.log(a);
    let a = 234;
    console.log(a);

}
console.log(a);
console.log(string1);

const constantexampe = "This will be same";
// constant="I am trying to change";
//  when u try above line it will be error
console.log(constantexampe);
let age = 49;
if (age > 18) {
    if (age > 21) {
        console.log("You can vote and marry");
    }
    else {
        console.log("You can vote only");
    }
}
else if (age = 18) {
    console.log("You will soon can do anything");
}
else {
    consol.log("u cannot do anything");
}

const cups = 44;

switch (cups) {
    case 41:
        console.log("The value of cup is 41");
        break;
    case 42:
        console.log("The value of cup is 42");
        break;
    case 43:
        console.log("The value of cup is 43");
        break;
    case 44:
        console.log("The value of cup is 44");
        break;
    case 45:
        console.log("The value of cup is 45");
        break;
    case 46:
        console.log("The value of cup is 46");
        break;
}