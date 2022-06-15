export const displayMediaLike = (medias) => {
    const tLike = document.querySelector(".compteur");

    let totalLike = 0
    medias.forEach(media => {
        totalLike += media.likes
    });

    const card = createCard(totalLike)
    tLike.append(card)
};

// createLikesCard
const createCard = (totalLike) => {

    const card = document.createElement('div');
    card.classList.add('totalPriceMonth')
    console.log(totalLike);
    const pLike = document.createElement('p')
    pLike.setAttribute("class", "pNumberLike")
    pLike.innerText = totalLike
    card.append(pLike)
    const heart = document.createElement('img')
    heart.setAttribute("class", "heartTLike")
    card.append(heart)
    //const priceMonth = document.createElement('p')
    //priceMonth.innerText = photographers.name.price
    //card.append(priceMonth)
    const textPriceM = document.createElement('p')
    textPriceM.innerText = "€ /jour"
    //console.log(textPriceM);
    card.append(textPriceM)
    
    return card
};