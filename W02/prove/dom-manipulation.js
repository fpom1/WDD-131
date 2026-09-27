
let selectElem = document.querySelector('#theme-select');
let logo = document.querySelector('img');
let style = document.querySelector('link')

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
    //for dark mode
        console.log("dark")
        //set logo
        logo.setAttribute("src","images/BYUI_Logo.jpg");
        logo.setAttribute("alt","dark mode logo")
        //set css
        style.setAttribute("href","dom-manipulation-dark.css")
    } else {
    //for light mode
        console.log("light")
        //set logo
        logo.setAttribute("src","images/90.png");
        logo.setAttribute("alt","light mode logo")
            //alternatively
            //logo.src = ("images/90.png");
            //logo.alt = ("light mode logo")
        //set css
        style.setAttribute("href","dom-manipulation-light.css")
        
    }
}  