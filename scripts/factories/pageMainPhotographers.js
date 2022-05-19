export const indexPhotographerFactory = (data) => {
    // const name = data.name
    // const portrait = data.portrait
    const { id, photographerId, title, image, likes, date, price } = data;

    const picture = `assets/photographers/${portrait}`;

    const getUserCardDOM = () => {

        const userCardDom = document.createElement( 'div' );
        //const div = document.createElement( 'div' );
        //const divText = document.createElement( 'div' );
        const image = document.createElement( 'img' );
        const title = document.createElement( 'p' );

        // on remplie nos balises
        
        userCardDom.setAttribute("class", "photographers")

        //div.setAttribute("class", "img_pp_photographers")
        //divText.setAttribute("class", "text_pp_photographers")
        img.setAttribute("src", picture)

        userCardDom.appendChild(div);
        div.appendChild(img);

        // on retourne la balise article
        return userCardDom;
    }

    return { name, id, city, country, tagline, price, portrait, getUserCardDOM }
}

export const displayMedia = async (media) => {
    const photographersMain = document.querySelector(".photograph-main");

        const photographerMainModel = indexPhotographerFactory(media);
        const userCardDOM = photographerMainModel.getUserCardDOM();
        photographersMain.appendChild(userCardDOM);
};