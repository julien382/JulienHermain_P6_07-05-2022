export class Lightbox {

  /**
   * 
   * @param {string} url URL de l'image
   */
  constructor(url) {
    this.element = this.buildDOM(url)
    this.onKeyUp = this.onKeyUp.bind(this)
    document.body.appendChild(this.element)
    document.addEventListener('keyup', this.onKeyUp)
  }

  onKeyUp (e) {
    if (e.key == 'Escape'){
      this.close(e)
    }
  }

  // ferme la lightbox
  close(e) {
    e.preventDefault()
    this.element.classList.add('fadeOut')
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element)
    }, 500)
    document.removeEventListener('keyup', this.onKeyUp)
  }

  buildDOM(url) {
    // regex .mp4 ?
    // const mp4Regex = /^\w+.(mp4)$/ ==> regex .mp4
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.innerHTML = `
    <div class="lightbox__container_all">
      <div class="lightbox__container">
          <button class="lightbox__close lightbox_close"></button>
          <button class="lightbox__next"></button>
          <button class="lightbox__prev"></button>
          <div class="lightbox_image">
            <img src="${url}" alt="">
          </div>
          <div class="lightbox_text">
            <p class="title_image">Arc-en-ciel</p>
          </div>
      </div>
    </div>`
    dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
    return dom
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
