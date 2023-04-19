// let i = 0;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
let friends = ["vikas", "sunil", "vishal", "hardik"];
for (element of friends) {
    console.log(element);
}
friends.forEach(element => {
    console.log(element);
});

let employee = {
    name: "vikas",
    slart: 34,
    college: "IIITV"
}
for (key in employee) {
    console.log(`the ${key} of employee is ${employee[key]}`);
}

let j=0;
while(j<2){
    console.log(j);
    j++;
}