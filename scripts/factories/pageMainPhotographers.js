export const indexPhotographerFactory = (data) => {
    // const name = data.name
    // const portrait = data.portrait
    const { date, id, image, likes, photographerId, price, title, portrait } = data;
    const picture = `assets/photographers/${portrait}`;

    const getUserCardDOM = () => {

        const userCardDom = document.createElement( 'div' );
        const trier = document.createElement( 'p' );
        const div = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        const title = document.createElement( 'p' );

        // on remplie nos balises
        
        userCardDom.setAttribute("class", "photographers")
        trier.textContent = "Trier par";
        img.setAttribute("src", picture)


        userCardDom.appendChild(trier);
        userCardDom.appendChild(div);
        div.appendChild(img);

        // on retourne la balise article
        return userCardDom;
    }

    return { date, id, image, likes, photographerId, price, title, portrait, getUserCardDOM }
}

export const displayMedia = async (media) => {
    const photographersMain = document.querySelector(".photograph-main");

        const photographerMainModel = indexPhotographerFactory(media);
        const userCardDOM = photographerMainModel.getUserCardDOM();
        photographersMain.appendChild(userCardDOM);
};