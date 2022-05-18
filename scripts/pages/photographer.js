import { displayData } from "../factories/pagePhotographers.js";
import { getMedias, getPhotographers } from "../utils/dataHandler.js";
import { getParamUrl } from "../utils/paramUrl.js";

const init = async () => {
    const id = getParamUrl("id")
    const photographers = await getPhotographers()
    const medias = await getMedias()

    let photographer = null

    for(let i=0; i<photographers.length; i++){
        const photographerId = photographers[i].id
        if (photographerId == id) {
            photographer = photographers[i]
        }
    }

    console.log(photographer)
    displayData(photographer)

    //displayMedia(media)
};



// récupérer l'id dans l'url
// récupérer les données
// récup les données relatives à l'id pour les afficher
// afficher les data
init();

    