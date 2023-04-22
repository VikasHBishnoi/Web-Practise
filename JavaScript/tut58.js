console.log("This is tutorial 58");

// setTimeout --> Allows us to run the function once after the interval of time 
// clearTimout --> Allows us to run the function repeatedly  after the interval of time 

function greet(name) {
    console.log("HEllo Good morning" + name);
}
setTimeout(greet,10001," vikas bishoi using timout ");

intervalId = setInterval(greet, 1000, "Vikas");
clearInterval(intervalId);