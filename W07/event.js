
const form = document.querySelector("#MyForm");
const guestType = document.querySelector("#guestType");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const studentIdContainer = document.querySelector("#studentIdContainer");
const studentId = document.querySelector("#studentId");
const guestCodeContainer = document.querySelector("#guestCodeContainer");
const guestCode = document.querySelector("#guestCode");

function updateNotesField() {
    const value = guestType.value;



}

guestType.addEventListener("change", updateNotesField);
updateNotesField();

guestType.addEventListener("change", updateStudentField);
updateStudentField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}


function updateStudentField() {
    if (guestType.value === "student") {
        // Student selected
        studentIdContainer.hidden = false;
        studentId.required = true;

        // Hide guest code
        guestCodeContainer.hidden = true;
        guestCode.required = false;
        guestCode.value = "";

    } else if (guestType.value === "guest") {
        // Guest selected
        studentIdContainer.hidden = true;
        studentId.required = false;
        studentId.value = "";

        // Show guest code
        guestCodeContainer.hidden = false;
        guestCode.required = true;

    } else {
        // Nothing selected
        studentIdContainer.hidden = true;
        studentId.required = false;

        guestCodeContainer.hidden = true;
        guestCode.required = false;
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    //stops values from being put in url
    //stops page from reloading
    console.log(event.target.firstName.value);

    output.textContent = "";


    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const availableDate = form.availableDate.value;
    const typeee = form.guestType.value.trim();
    const note = form.notes.value.trim();


    // Validate the input


    if (isPastDate(availableDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${typeee}</p>
  <p>${availableDate}</p>
  `;

    form.reset();
    updateStudentField();
    updateNotesField();
});
