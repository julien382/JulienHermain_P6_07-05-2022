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
    card.classList.add('totalPriceMonth')
    console.log(totalLike);
    const pLike = document.createElement('p')
    pLike.setAttribute("class", "pNumberLike")
    pLike.innerText = totalLike
    card.append(pLike)
    //const priceMonth = document.createElement('p')
    //priceMonth.innerText = photographers.name.price
    //card.append(priceMonth)
    const textPriceM = document.createElement('p')
    textPriceM.innerText = "€ /jour"
    console.log(textPriceM);
    card.append(textPriceM)
    
    return card
};