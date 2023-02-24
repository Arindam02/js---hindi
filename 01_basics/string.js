const name = "Arindam"
let location = "Kollata"

// console.log("Hi my name is "+name+" ,i am from "+location);

console.log(`Hi my name is ${name} and i am from ${location}`);

const gameName = new String ("arindam-as-com");

// console.log(name[0]);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(2));
// console.log(name.indexOf('i'));




const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7,-4)
console.log(anotherString);



const newStringOne = "   arindam    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://arindam%20saha"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split("-"));