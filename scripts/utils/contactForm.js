const modalBtn = document.querySelectorAll(".contact_button");
const cross = document.querySelector(".close");


const launchModal = () => {
    contact_modal.style.display = "block";
}

const closeModal = () => {
    contact_modal.style.display = "none";
}


modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
cross.addEventListener("click", closeModal);
