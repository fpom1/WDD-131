
//declare a variable
let age = 22;

//print
console.log(age);

// constant variable
const name = "Brother Warner";

console.log(name);
//scope = where you can reference a variable by name.

if(age == 22) {
    // a new scope 
    let favoriteColor = "blue";
    //declare variable globally
    var bestColor = "brown";
    console.log(favoriteColor);
}
console.log(bestColor);

//this wouldnt work
//console.log(favoriteColor);


document.querySelector("h1").style.color = "blue";