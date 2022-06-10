export const displayMediaLike = async (medias) => {
    const tLike = document.querySelector(".compteur");

    let totalLike = 0

    medias.forEach(media => {
        totalLike += media.likes

        const card = createCard()
        tLike.append(card)
    });
    console.log(totalLike);
};

const createCard = (media, totalLike) => {

    const card = document.createElement('div');
    card.classList.add('card')
    console.log(totalLike);
    const pLike = document.createElement('p')
    pLike.innerText = totalLike
    card.append(pLike)
    
    return card
};