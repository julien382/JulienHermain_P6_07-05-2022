//Mettre le code JavaScript lié à la page photographer.html
export const indexPhotographerFactory = (data) => {
    // const name = data.name
    // const portrait = data.portrait
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    const getUserCardDOM = () => {

        const userCardDom = document.createElement( 'article' );
        const div = document.createElement( 'div' );
        const divText = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        const h1 = document.createElement( 'h1' );
        const pCity = document.createElement( 'p' );
        const pTagline = document.createElement( 'p' );

        // on remplie nos balises
        
        userCardDom.setAttribute("class", "pp_photographers")
        h1.textContent = name;
        pCity.textContent = city + ", " + country;
        pCity.setAttribute("class", "pCity__pp_photographers")
        pTagline.textContent = tagline;

        div.setAttribute("class", "img_pp_photographers")
        divText.setAttribute("class", "text_pp_photographers")
        img.setAttribute("src", picture)

        userCardDom.appendChild(div);
        userCardDom.appendChild(divText);
        div.appendChild(img);
        divText.appendChild(h1);
        divText.appendChild(pCity);
        divText.appendChild(pTagline);

        // on retourne la balise article
        return userCardDom;
    }

    return { name, id, city, country, tagline, price, portrait, getUserCardDOM }
}

export const displayData = async (photographer) => {
    const photographersHeader = document.querySelector(".photograph-header");

        const photographerModel = indexPhotographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersHeader.appendChild(userCardDOM);
};