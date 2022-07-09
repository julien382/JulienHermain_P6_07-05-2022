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

    const dropdown = document.querySelector('.elementTri');
    const selected = document.querySelector('.selected');
    const choices = document.querySelectorAll('.elementTri__text');

    // UI dropdown
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('show')
    })

    dropdown.addEventListener('keydown', (e) => {
        if(e.code === "Enter") {
            dropdown.classList.toggle('show')
        }
    })
    
    // gestion du tri
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            selected.innerHTML = choice.innerHTML
            sortBy(choice.innerHTML, medias, photographer)
        })

        choice.addEventListener('keydown', (e) => {
            if(e.code === "Enter") {
                selected.innerHTML = choice.innerHTML
                sortBy(choice.innerHTML, medias, photographer)
            }
        })
    })
    
}
init();
