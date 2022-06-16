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
const createCard = (totalLike, data) => {

    //const { name, id, city, country, tagline, price, portrait } = data;

    //const priceDay = document.createElement( 'p' );
    //priceDay.textContent = price;
    //priceDay.setAttribute("class", "name_pp_photographers")
    //divText.appendChild(priceDay);

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
    //const priceMonth = document.createElement('p')
    //priceMonth.innerText = photographers.name.price
    //card.append(priceMonth)
    const textPriceM = document.createElement('p')
    textPriceM.innerText = "€ /jour"
    //console.log(textPriceM);
    card.append(textPriceM)
    
    return card
};