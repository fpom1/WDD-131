
// retrieve elements from the dom
let dialog = document.querySelector('dialog');
let gallery = document.querySelector(".gallery");
let image = dialog.querySelector(".image");
//let image = document.querySelector("dialog img");
let closer = dialog.querySelector(".close-viewer")

let menu = document.querySelector(".menu-btn")
let nav = document.querySelector("nav")

const mediaQuery = window.matchMedia('(min-width: 988px)');



gallery.addEventListener("click", function (event) {
    console.log(event.target.src);
    // swap out source of dialog image
    if (event.target.src !== undefined) {
        image.src = event.target.src.replace("sm", "full");
        //show dialog box
        dialog.showModal();
    }
})

// Close modal on button click
closer.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});


//handle changing display of nav
menu.addEventListener("click", () =>{
    if (nav.style.display === "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }

});

//set nav to default values upon window change
function handleBreakpointChange(event) {
  if (event.matches) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}
mediaQuery.addEventListener('change', handleBreakpointChange);
