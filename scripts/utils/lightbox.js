export class Lightbox {

  /**
   * 
   * @param {string} url URL de l'image
   */
  constructor(url, images) {
    this.element = this.buildDOM(url)
    this.images = images
    this.loadImage(url)
    this.onKeyUp = this.onKeyUp.bind(this)
    document.body.appendChild(this.element)
    document.addEventListener('keyup', this.onKeyUp)
  }

  loadImage (url) {
    this.url = null
    const image = new Image()
    const container = this.element.querySelector('.lightbox_image')
    const loader = document.createElement('div')
    loader.classList.add('lightbox__loader')
    container.innerHTML = ''
    container.appendChild(loader)
    image.onload = () => {
      container.removeChild(loader)
      container.appendChild(image)
      this.url = url
    }
    image.src = url
  }

  onKeyUp (e) {
    if (e.key == 'Escape'){
      this.close(e)
    } else if (e.key == 'ArrowLeft'){
      this.prev(e)
    } else if (e.key == 'ArrowRight'){
      this.next(e)
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

  next (e) {
    e.preventDefault()
    let i = this.images.findIndex(image => image == this.url)
    if (i == this.images.length - 1) {
      i = -1
    }
    this.loadImage(this.images[i + 1])
  }

  prev (e) {
    e.preventDefault()
    let i = this.images.findIndex(image => image == this.url)
    if (i == 0) {
      i = this.images.length
    }
    this.loadImage(this.images[i - 1])
  }

  buildDOM(url) {
    // regex .mp4 ?
    // const mp4Regex = /^\w+.(mp4)$/ ==> regex .mp4
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.innerHTML = `
    <div class="lightbox__container_all">
      <button class="lightbox__close lightbox_close"></button>
      <button class="lightbox__next"></button>
      <button class="lightbox__prev"></button>
      <div class="lightbox__container">
        <div class="lightbox_image">
          <img src="${url}" alt="">
        </div>
        <div class="lightbox_text">
          <p class="title_image">Arc-en-ciel</p>
        </div>
      </div>
    </div>`
    /*dom.innerHTML = `
      <button class="lightbox__close lightbox_close"></button>
      <button class="lightbox__next"></button>
      <button class="lightbox__prev"></button>
      <div class="lightbox__container"></div>`*/
    dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
    dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
    dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
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
