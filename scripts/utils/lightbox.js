export const formHandler = () => {
    const lightbox_modalBtn = document.querySelectorAll(".contact_button");
    const lightbox_cross = document.querySelector(".lightbox_close");
    
    const lightbox_launchModal = () => {
        lightbox_modal.style.display = "block";
    }
    
    const lightbox_closeModal = () => {
        lightbox_modal.style.display = "none";
    }
    
    
    lightbox_modalBtn.forEach((btn) => {
        btn.addEventListener("click", lightbox_launchModal)
    });
    lightbox_cross.addEventListener("click", lightbox_closeModal);
}
