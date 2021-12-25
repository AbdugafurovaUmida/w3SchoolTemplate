let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let messageInput = document.getElementById('messageInput');
let inputBtn = document.getElementById('inputBtn')
let menuSidebar = document.getElementById('sidebar');
let hiddenItems = document.getElementById('hidden-items');
let modal = document.getElementById('overlay-modal');

// Function Input

let nameInputValid = false;
let emailInputValid = false;
let messageInputValid = false;

nameInput.addEventListener("change", (e) => {
    if (e.target.value.length > 0)
        nameInputValid = true;
    handleClick()

});
emailInput.addEventListener("change", (e) => {
    if (e.target.value.length > 0)
        emailInputValid = true;
    handleClick()
});
messageInput.addEventListener("change", (e) => {
    if (e.target.value.length > 0)
        messageInputValid = true;
    handleClick();

});


inputBtn.addEventListener("click", () => {
    console.log(nameInput.value)
    console.log(emailInput.value)
    console.log(messageInput.value)
}
)
const handleClick = () => {
    inputBtn.disabled = nameInputValid && emailInputValid && messageInputValid ? false : true;
}

// Function Hamburger Toggles
function openMenu() {
    menuSidebar.style.display = 'block';
    modal.style.display = 'block';
};

function closeMenu() {
    menuSidebar.style.display = 'none';
    modal.style.display = 'none';
};

