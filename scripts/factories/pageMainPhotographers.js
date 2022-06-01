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
/*
const createCard = (path) => {
    const card = document.createElement('div')
    card.classList.add('card')*/

    // regex .mp4 ?

   /* if (*//* image ou video ?  *//*) {
        const img = document.createElement('img')
        img.src = path
        card.append(img)
    } else {
        const video = document.createElement('video')
        img.video = path
        card.append(video)
    }

    return card
};*/
