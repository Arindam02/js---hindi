// Dates:--

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime()); 
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())
// console.log(myDate.getMonth()+1);
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())

// console.log(typeof myDate);     //-------------> OBJECT



// let myCreatedDate = new Date(2023 ,0, 24)
// let myCreatedDate = new Date(2023 ,0, 24 , 05 , 20 , 40)
// let myCreatedDate = new Date("2023-01-12")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));     //-----> to covert seconds.



let newTime = new Date();
console.log(newTime.toLocaleString("default" , {
    weekday:"long",
}));