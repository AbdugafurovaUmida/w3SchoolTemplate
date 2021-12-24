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
    if (e.target.value != "")
        nameInputValid = true;
    handleClick()
    console.log(e.target.value)
});
emailInput.addEventListener("change", (e) => {
    if (e.target.value != "")
        emailInputValid = true;
    handleClick()
    console.log(e.target.value)
});
messageInput.addEventListener("change", (e) => {
    if (e.target.value != "")
        messageInputValid = true;
    handleClick();
    console.log(e.target.value)
});

const handleClick = () => {
    inputBtn.disabled = nameInput.value.length > 0 && emailInput.value.length > 0 && messageInput.value.length > 0 ? false : true;
};

// Function Hamburger Toggles
function openMenu() {
    menuSidebar.style.display = 'block';
    modal.style.display = 'block';
};

function closeMenu() {
    menuSidebar.style.display = 'none';
    modal.style.display = 'none';
};

