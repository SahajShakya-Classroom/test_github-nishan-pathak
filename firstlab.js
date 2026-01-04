// console.log("Hello World")

// var a = 5
// a = 7
// console.log(a)

// let b = 7
// b = 9
// console.log(b)

// const c = 1
// c = 2
// console.log(c)

// function square(a){
//     return a * a
// }
// res = square(5)
// console.log(res)

// const square = (a) => {
//     return a * a
// }
// console.log(square(5))

var Fruits = ["apple", "banana", "orange", "papaya", "guava"];

console.log(Fruits[0]);  // prints first fruit immediately

// Loop 0-10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Loop fruits with delay
for (let i = 0; i < Fruits.length; i++) {
    setTimeout(() => {
        console.log(Fruits[i]);
    }, 2000);  // prints each fruit after 2 seconds
}

