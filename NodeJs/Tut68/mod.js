console.log("This is module js");
function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    console.log("The sum is ",sum);
    return sum/arr.length;
}

module.exports={
    avg:average,
    Name: "Vikas",
    repo: "Git"
};