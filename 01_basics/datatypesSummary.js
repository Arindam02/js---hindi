// Mainly There Are Two Types Of Data Types :-
//                             1) Primitive.
//                             2) Reference or Non Primitive.

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.


// Primitive Data Types Are 7 Types :- String , Number , Boolean , Null , Undefined , Symbol , BigInt

let = "Arindam";                      //typeof(string) = string

const score = 100;                   //typeof(Number) = Number 

const islogIn = true;                //typeof(boolean) = boolean 

const weather = null;                //typeof(null) = Object

let loacation  ;                     //typeof(undefined) = undefined

let id = Symbol("123")               //typeof(synbol) = symbol 
let anotherId = Symbol("123")

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// reference Datatypes or NON Premetive Datatypes:- Array , Object , function.

let names = ["Arindam " , "Lucky " , "Rajdeep"]             //typeof(array) = object 

let myObj = {
    name : "Arindam",                                       //typeof(object) = object
    age :   23 
}

let myFunction = function(){
    console.log("hello World");                             // typeof(function) = function
}




//********************************************************************************************************************************************** */

// Primitive dataType goes in stack memory; And it provides copy of that element.
// So when we change something (through assigned variable) it gets changed in copy of element  not in original.

let name1 = "Arindam";
let name2 = name1;
name2 = "Subrata";

console.log(name1);
console.log(name2);



//Non primitive dataType get stored in HEAP memory. 
// And it gives reference value to assigned elements. 
// So when assigned variable makes changes it changes the both values(original and assigned one. 

let userOne ={
    name : "Adi",
    email: "adi@google.com"
}

let userTwo = userOne;
userTwo.email = "adi@amazon.com"

console.log(userOne);
console.log(userTwo);