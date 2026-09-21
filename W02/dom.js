// how to manipulate the DOM with javasript

// Grab out h1 from the page
// will only grab the first h1
let heading = document.querySelector("h1");

// will select all h1
// will return an array
let headingAll = document.querySelector("h1");
console.log(heading);

// change the text of the element
heading.textContent = "Changed the heading to something else";

//change the text color
heading.style.color = "#FF00FF";

heading.style.fontStyle = "italic";

//retrieve an id
//the two lines are equivalent
document.getElementById("topics").style.color = "red";
document.querySelector("#topics").style.color = "red";

//select the img tag
let image = document.querySelector("img")

console.log(image.getAttribute("src"))

// change image attribute

image.setAttribute("src","https://store.wikimedia.org/cdn/shop/products/HatGIF.gif?v=1761842802")
