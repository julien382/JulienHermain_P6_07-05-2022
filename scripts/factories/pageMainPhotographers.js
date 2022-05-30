export const indexPhotographerFactory = (data) => {
    // const name = data.name
    // const portrait = data.portrait
    const { date, id, image, likes, photographerId, price, title } = data;
    const picture = `assets/images/Mimi/Travel_HillsideColor.jpg`;

    const getUserCardDOM = () => {

        const userCardDom = document.createElement( 'section' );

        const trier = document.createElement( 'p' );
        const divImage = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        const title = document.createElement( 'p' );

        // on remplie nos balises
        
        userCardDom.setAttribute("class", "photographers")
        trier.textContent = "Trier par";
        divImage.setAttribute("class", "img_photographers")
        img.setAttribute("src", picture)


        userCardDom.appendChild(trier);
        userCardDom.appendChild(divImage);
        divImage.appendChild(img);

        // on retourne la balise article
        return userCardDom;
    }

    return { date, id, image, likes, photographerId, price, title, getUserCardDOM }
}

export const displayMedia = async (media) => {
    const photographersMain = document.querySelector(".photograph-main");

        const photographerMainModel = indexPhotographerFactory(media);
        const userCardDOM = photographerMainModel.getUserCardDOM();
        photographersMain.appendChild(userCardDOM);
};