export const displayMediaLike = async (medias) => {

    let totalLike = 0

    medias.forEach(media => {
        totalLike += media.likes

        const card = createCard(media)
    });
    console.log(totalLike);
};

const createCard = (media, totalLike) => {
    const mp4Regex = /\.mp4$/

    const card = document.createElement('div');
    card.classList.add('card')
    console.log(totalLike);
    const pLike = document.createElement('p')
    pLike.innerText = "totalLike"
    card.append(pLike)
    
    return card
};