
// retrieve elements from the dom
let dialog = document.querySelector('dialog');
let gallery = document.querySelector(".gallery");
let image = dialog.querySelector("img");
//let image = document.querySelector("dialog img");
let closer = dialog.querySelector(".close-viewer")

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