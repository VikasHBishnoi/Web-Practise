let myName = "Vikas Bishnoi";
console.log("My name is "+myName);

// first occurence of a substring
var position = myName.indexOf('i');
console.log("First position of i is" + position);
// if it show negative -1 means that doesn't exist int it

// Last occurenece of substring
position = myName.lastIndexOf('i');
console.log('last position of i is ' + position);

var space = myName.indexOf(' ');
var firstname = myName.slice(0, space);
// it will not print the letter which is on upper limit
console.log(firstname);
console.log(myName.slice(space + 1, myName.length));

var str="Hey This Side Vikas"
var rep=str.replace("side","is");
console.log(str);
console.log(rep);
console.log(str.concat(rep));
console.log(str.toUpperCase());
console.log(rep.toLowerCase());

// .trim() this trim extra space in starting and ending 
var strwithspace="         djdfnd djsfds sfd d    ";
console.log(strwithspace.trim());

var ch=str.charAt(2);
console.log(ch);