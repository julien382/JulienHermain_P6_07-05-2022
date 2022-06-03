/*export const formHandler = () => {
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
}*/

class Lightbox{

    static init () {
        const links = document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
            .forEach(link => link.addEventListener('click', e =>
            {
                e.preventDefault()
                new Lightbox(e.currentTarget.getAttribute('href'))
            }))
    }

    constructor (url){
        const element = this.buildDOM(url)
        document.body.appendChild(element)
    }

    buildDOM(url){
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `<div class="lightbox__container_all">
        <div class="lightbox__container">
              <button class="lightbox__close lightbox_close"></button>
              <button class="lightbox__next"></button>
              <button class="lightbox__prev"></button>
              <div class="lightbox_image">
                <img  src="/assets/photographers/MimiKeel.jpg" alt="">
              </div>
              <div class="lightbox_text">
                <p class="title_image">Arc-en-ciel</p>
              </div>
        </div>
      </div>`
    }
}

/*
<div id="lightbox_modal" class="lightbox">
      <div class="lightbox__container_all">
        <div class="lightbox__container">
              <button class="lightbox__close lightbox_close"></button>
              <button class="lightbox__next"></button>
              <button class="lightbox__prev"></button>
              <div class="lightbox_image">
                <img  src="/assets/photographers/MimiKeel.jpg" alt="">
              </div>
              <div class="lightbox_text">
                <p class="title_image">Arc-en-ciel</p>
              </div>
        </div>
      </div>
    </div>
    */
Lightbox.init()