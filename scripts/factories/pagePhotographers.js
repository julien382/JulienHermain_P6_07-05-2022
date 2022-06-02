//Mettre le code JavaScript lié à la page photographer.html
export const indexPhotographerFactory = (data) => {
    // const name = data.name
    // const portrait = data.portrait
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/${portrait}`;

    const getUserCardDOM = () => {

        const userCardDom = document.createElement( 'section' );

        const divText = document.createElement( 'div' );
        const h1 = document.createElement( 'h1' );
        const pCity = document.createElement( 'p' );
        const pTagline = document.createElement( 'p' );
        
        const button = document.createElement( 'button' );

        const divImage = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        
        // on remplie nos balises
        
        userCardDom.setAttribute("class", "pp_photographers")

        divText.setAttribute("class", "text_pp_photographers")
        h1.textContent = name;
        h1.setAttribute("class", "name_pp_photographers")
        pCity.textContent = city + ", " + country;
        pCity.setAttribute("class", "pCity__pp_photographers")
        pTagline.textContent = tagline;

        button.setAttribute("class", "contact_button")
        button.textContent = "Contactez-moi";

        divImage.setAttribute("class", "img_pp_photographers")
        img.setAttribute("src", picture)

        //

        userCardDom.appendChild(divText);
        divText.appendChild(h1);
        divText.appendChild(pCity);
        divText.appendChild(pTagline);
        
        userCardDom.appendChild(button)
        
        userCardDom.appendChild(divImage);
        divImage.appendChild(img);

        // on retourne la balise article
        return userCardDom;
    }

    return { name, id, city, country, tagline, price, portrait, getUserCardDOM }
}

export const displayData = (photographer) => {
    const photographersHeader = document.querySelector(".photograph-header");

        const photographerModel = indexPhotographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersHeader.appendChild(userCardDOM);
};
/*
const html = `<div> 
<p>${url}</p>

</div>`*/
///////////////////////////////////////////////////////////////**/ */
