export const displayMedia = async (medias, photographerName) => {
    const pictures = document.querySelector(".pictures");

    // Mimi keel ==> Mimi
    const cutName = photographerName.split(' ')[0] // Ellie-Rose

    medias.forEach(media => {
        const path = '../../assets/images/' + cutName + '/' + media.image
        const card = createCard(path)
        pictures.append(card)
    });

};

const createCard = (path) => {
    const card = document.createElement('div')
    card.classList.add('card')
    // regex .mp4 ?

    /*const mp4Regex = /^\w+.(mp4)$/*/ // regex .mp4

    /*if ( path = mp4Regex*//* image ou video ?  *//*) {*/
        const img = document.createElement('img')
        img.setAttribute("class", "imagesQuadrillage")
        img.src = path
        card.append(img)
    /*} else {
        const video = document.createElement('source')
        video.setAttribute("class", "imagesQuadrillage")
        video.src = path
        card.append(video)
    }*/

    return card
};

/////////////////**/
/*
export const displayMediaName = async (photographerName) => {
    const name = document.querySelector(".name_photographer_section");
console.log(photographerName)
    name.append(card)
    // Mimi keel ==> Mimi

    
    //const card = createName(photographerName)
    //pictures.append(card)
    
};

const createName = (path) => {
    const card = document.createElement('div')
    card.classList.add('p')

    card.append(p)

    return card
};*/