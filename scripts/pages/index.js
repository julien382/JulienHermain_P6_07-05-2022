import { displayData } from "../factories/indexPhotographer.js";
import { getPhotographers } from "../utils/dataHandler.js";

const init = async () => {
    const photographers = await getPhotographers();
    displayData(photographers);
};

init();

    