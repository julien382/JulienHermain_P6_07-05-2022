import { displayMedia } from "../factories/pageMainPhotographers.js";

export const sortByLikes = async (medias, photographer) => {
    medias.sort((a,b) => a.likes - b.likes)

    const picturesDom = document.querySelector('.pictures')
    picturesDom.innerHTML = ''
    
    displayMedia(medias, photographer.name)
};

/*
const objArr = ["Shanghai", "Tokyo", "Sao Paulo", "Delhi"]

objArr.sort()

console.log(objArr);*/

/*const numbers = [1,2,3]

numbers.sort((a,b) => {
    console.log(`${a} - ${b}`);

    return a - b;
})*/



