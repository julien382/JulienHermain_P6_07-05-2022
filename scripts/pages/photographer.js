import { displayData} from "../factories/pagePhotographers.js";
import { displayMedia } from "../factories/pageMainPhotographers.js";
import { getMedias, getOnePhotographers} from "../utils/dataHandler.js";
import { getParamUrl } from "../utils/paramUrl.js";
import { formHandler } from "../utils/contactForm.js";
import { displayDataName } from "../factories/name.js";


const init = async () => {
    const id = getParamUrl("id")
    const photographer = await getOnePhotographers(id)
    const medias = await getMedias(id)

    displayData(photographer)
    displayMedia(medias, photographer.name)
    displayDataName(photographer)

    formHandler()
}
init();
