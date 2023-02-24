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