import { displayData } from "../factories/pagePhotographers.js";
import { getMedias, getOnePhotographers} from "../utils/dataHandler.js";
import { getParamUrl } from "../utils/paramUrl.js";

const init = async () => {
    const id = getParamUrl("id")
    const photographer = await getOnePhotographers(id)
    const medias = await getMedias(id)
    console.log(medias)

    

    //console.log(photographer)
    //console.log(DATA.photographers.id)
    displayData(photographer)




// récupérer l'id dans l'url
// récupérer les données
// récup les données relatives à l'id pour les afficher
// afficher les data
}
init();