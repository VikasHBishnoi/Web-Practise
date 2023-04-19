var firstname = "Vikas"
var a = 22;
var lastname = 'Bishnoi'
var message = `is good boy`
var sentance = `${firstname} is my first name and ${lastname} is my lastname and ${firstname} ${message}  and\n my age is ${a}`;
console.log(firstname + "  " + lastname +" " + message);
console.log(sentance);
// $ use to refere that data
var len = firstname.length;
console.log("Length of first name " + len);

// if we want that script is added at head section
// document.addEventListener('DOMContentLoaded', function() {
//     // Your JavaScript code goes here
//     document.getElementById('heading').innerHTML='<h3>Hare Hare Mahadev</h3>';}
// );

// if scipt is added at body end then simply
document.getElementById('heading').innerHTML='<h3>Hare Hare Mahadev</h3>';
