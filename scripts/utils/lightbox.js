export class Lightbox {

  /**
   * 
   * @param {string} url URL de l'image
   */
  constructor(url) {
    const element = this.buildDOM(url)
    document.body.appendChild(element)
  }

  /**
   * 
   * @param {string} url URL de l'image 
   * @return {HTMLElement} 
   */
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
