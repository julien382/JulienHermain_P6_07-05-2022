export class Lightbox {

  /**
   * 
   * @param {string} url URL de l'image
   */
  constructor(url, medias) {
    this.medias = medias
    this.element = this.buildDOM(url)
    this.loadMedia(url)
    this.onKeyUp = this.onKeyUp.bind(this)
    document.body.appendChild(this.element)
    document.addEventListener('keyup', this.onKeyUp)
  }

  loadMedia (url) {
    this.url = null

    // on cherche le titre
    const regex = /[\d\w]+\.\w{3,4}$/
    const results = url.match(regex)
    const mediaName = results[0]
    
    let title = ''
    this.medias.forEach(media => {
      if (media.video == mediaName || media.image == mediaName) {
        title = media.title
      }
    });

    const container = this.element.querySelector('.lightbox_image')
    const titleDom = this.element.querySelector('.title_image')

    titleDom.innerHTML = title
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

  next(e) {
    e.preventDefault()

    const regex = /[\d\w]+\.\w{3,4}$/
    const results = this.url.match(regex)
    const mediaName = results[0]

    let i = this.medias.findIndex(media => (media.image == mediaName || media.video == mediaName))
    if (i == this.medias.length - 1) {
      i = -1
    }

    const entry = this.medias[i + 1].image || this.medias[i + 1].video
    this.loadMedia(this.path + entry)
  }

  prev (e) {
    e.preventDefault()

    const regex = /[\d\w]+\.\w{3,4}$/
    const results = this.url.match(regex)
    const mediaName = results[0]

    let i = this.medias.findIndex(media => (media.image == mediaName || media.video == mediaName))
    if (i == 0) {
      i = this.medias.length
    }
    const entry = this.medias[i - 1].image || this.medias[i - 1].video
    this.loadMedia(this.path + entry)
  }

  buildDOM(url) {
    const regex = /^(.+\/)([\w\d_]+\.\w{3,4})/
    const results = url.match(regex)

    // on enregistre le chemin
    this.path = results[1]

    // on cherche le titre
    let title = ''
    const mediaName = results[2]

    this.medias.forEach(media => {
      if(media.video == mediaName || media.image == mediaName) {
        title = media.title
      }
    });

    const dom = document.createElement('div')
    dom.classList.add('lightbox')

    const mp4Regex = /\.mp4$/

    if (!mp4Regex.test(url)) {
      dom.innerHTML = `
      <div class="lightbox__container_all" aria-label='image closeup view'>
        <button class="lightbox__close lightbox_close" alt="Close dialog"></button>
        <button class="lightbox__next" alt="Next image"></button>
        <button class="lightbox__prev" alt="Previous image"></button>
        <div class="lightbox__container">
          <div class="lightbox_image">
            <img src="${url}" alt="">
          </div>
          <div class="lightbox_text">
            <p class="title_image">${title}</p>
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
            <p class="title_image">${title}</p>
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
