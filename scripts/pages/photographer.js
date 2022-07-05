import { displayData} from "../factories/pagePhotographers.js";
import { displayMedia } from "../factories/pageMainPhotographers.js";
import { displayMediaLike } from "../utils/totalLike.js";
import { getMedias, getOnePhotographers} from "../utils/dataHandler.js";
import { getParamUrl } from "../utils/paramUrl.js";
import { formHandler } from "../utils/contactForm.js";
import { displayDataName } from "../factories/name.js";
import { Lightbox } from "../utils/lightbox.js";
import { likesHandler } from "../utils/likesHandler.js";
import { sortBy } from "../utils/sort.js";
import { sortByLikes } from "../utils/sort.js";
import { sortByDate } from "../utils/sort.js";
import { sortByTitre } from "../utils/sort.js";

const init = async () => {
    const id = getParamUrl("id")
    const photographer = await getOnePhotographers(id)
    const medias = await getMedias(id)

    displayData(photographer)
    displayMedia(medias, photographer.name)
    displayDataName(photographer)
    displayMediaLike(medias, photographer.price)
    likesHandler()
    formHandler()
    //sortBy(medias, photographer)
    //sortByLikes(medias, photographer)

    
    // !! a faire uniquement quand le DOM est "fabriqué" !!
    const links = Array.from(document.querySelectorAll('.linkLightbox'))
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault()
            new Lightbox(event.currentTarget.getAttribute('href'), medias)
        })
    })

    /*--------------------------------------------------------*/

     const byArrow = document.querySelector('.elementTri__arrow')
         byArrow.addEventListener('click', () => {
            sortBy(medias, photographer)
     })
    // a répéter pour les autre trie
     const byLikesPopularité = document.querySelector('.buttonPopularité')
         byLikesPopularité.addEventListener('click', () => {
            sortByLikes(medias, photographer)
     })

     const byLikesDate = document.querySelector('.buttonDate')
         byLikesDate.addEventListener('click', () => {
            sortByDate(medias, photographer)
     })

     const byLikesTitre = document.querySelector('.buttonTitre')
         byLikesTitre.addEventListener('click', () => {
            sortByTitre(medias, photographer)
     })
    
}
init();
