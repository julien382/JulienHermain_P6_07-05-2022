export class Lightbox {

  /**
   * 
   * @param {string} url URL de l'image
   */
  constructor(url, images) {
    this.element = this.buildDOM(url)
    this.images = images
    this.loadMedia(url)
    this.onKeyUp = this.onKeyUp.bind(this)
    document.body.appendChild(this.element)
    document.addEventListener('keyup', this.onKeyUp)
  }

  loadMedia (url) {
    this.url = null

    const container = this.element.querySelector('.lightbox_image')
    container.innerHTML = ''
    
    const mp4Regex = /\.mp4$/
    if (!mp4Regex.test(url)) {
      const image = new Image()
      container.appendChild(image)
      this.url = url
      image.src = url
    } else {
      const video = document.createElement('video')
      video.controls = true
      container.appendChild(video)
      this.url = url
      video.src = url
    }
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
    this.loadMedia(this.images[i + 1])
  }

  prev (e) {
    e.preventDefault()
    let i = this.images.findIndex(image => image == this.url)
    if (i == 0) {
      i = this.images.length
    }
    this.loadMedia(this.images[i - 1])
  }

  buildDOM(url) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')

    const mp4Regex = /\.mp4$/

    if (!mp4Regex.test(url)) {
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
    } else {
      dom.innerHTML = `
      <div class="lightbox__container_all">
        <button class="lightbox__close lightbox_close"></button>
        <button class="lightbox__next"></button>
        <button class="lightbox__prev"></button>
        <div class="lightbox__container">
          <div class="lightbox_image">
            <video src="${url}">
          </div>
          <div class="lightbox_text">
            <p class="title_image">Arc-en-ciel</p>
          </div>
        </div>
      </div>`
    }
    dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
    dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
    dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
    return dom
  }
}
