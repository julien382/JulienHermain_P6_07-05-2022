import { displayMedia } from "../factories/pageMainPhotographers.js";
import { Lightbox } from "./lightbox.js";
import { likesHandler } from "./likesHandler.js";

/* sort arrow plié déplié */
export const sortBy = (choice, medias, photographer) => {
  console.log(choice);
  switch (choice) {
    case 'Date':
      sortByDate(medias, photographer)
    break;

    case 'Titre':
      sortByTitre(medias, photographer)
    break;
  
    default:
      sortByLikes(medias, photographer)
    break;
  }

};

/* sort popularité/date/titre */
export const sortByLikes = (medias, photographer) => {
    medias.sort((a,b) => b.likes - a.likes)

    const picturesDom = document.querySelector('.pictures')
    picturesDom.innerHTML = ''
    
    displayMedia(medias, photographer.name)

    likesHandler()
    
    const links = Array.from(document.querySelectorAll('.linkLightbox'))
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault()
            new Lightbox(event.currentTarget.getAttribute('href'), medias)
        })
    })
};

export const sortByDate = (medias, photographer) => {
  medias.sort((a, b) => new Date(b.date) - new Date(a.date))
 
  const picturesDom = document.querySelector('.pictures')
  picturesDom.innerHTML = ''
  
  displayMedia(medias, photographer.name)

  likesHandler()

  const links = Array.from(document.querySelectorAll('.linkLightbox'))
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault()
            new Lightbox(event.currentTarget.getAttribute('href'), medias)
        })
    })
};

export const sortByTitre = (medias, photographer) => {
  medias.sort((a,b) => a.title?.localeCompare(b.title));

  const picturesDom = document.querySelector('.pictures')
  picturesDom.innerHTML = ''
  
  displayMedia(medias, photographer.name)

  likesHandler()
  
  const links = Array.from(document.querySelectorAll('.linkLightbox'))
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault()
            new Lightbox(event.currentTarget.getAttribute('href'), medias)
        })
    })
};
