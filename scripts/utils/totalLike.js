export const displayMediaLike = (medias, price) => {
    const tLike = document.querySelector(".compteur");

    let totalLike = 0
    medias.forEach(media => {
        totalLike += media.likes
    });

    const card = createCard(totalLike, price)
    tLike.append(card)
};

// createLikesCard
const createCard = (totalLike, price) => {

    const card = document.createElement('div');
    card.classList.add('totalPriceMonth')
    const pLike = document.createElement('p')
    pLike.setAttribute("class", "pNumberLike")
    pLike.innerText = totalLike
    card.append(pLike)
    const heart = document.createElement('img')
    heart.setAttribute("class", "heartTLike")

    heart.classList.add('heartTLike')
    heart.src = "../../assets/icons/heartLikeTotal.svg"

    card.append(heart)
    const priceMonth = document.createElement('p')
    priceMonth.innerText = price
    card.append(priceMonth)
    const textPriceM = document.createElement('p')
    textPriceM.innerText = "€ /jour"
    //console.log(textPriceM);
    card.append(textPriceM)
    
    return card
};