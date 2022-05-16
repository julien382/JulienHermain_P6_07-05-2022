export const indexPhotographerFactory = (data) => {
    // const name = data.name
    // const portrait = data.portrait
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    const getUserCardDOM = () => {
        // <article></article>
        // <h2></h2>
        // <img></img>
        const userCardDom = document.createElement( 'article' );
        const a = document.createElement( 'a' );
        const div = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const pCity = document.createElement( 'p' );
        const pTagline = document.createElement( 'p' );
        const pPrice = document.createElement( 'p' );

        // on remplie nos balises
        a.setAttribute("href", id)
        div.setAttribute("class", "img_pp_photographer")
        img.setAttribute("src", picture)
        userCardDom.setAttribute("class", "pp_photographer")
        h2.textContent = name;
        pCity.textContent = city + ", " + country;
        pCity.setAttribute("class", "pCity__pp_photographer")
        pTagline.textContent = tagline;
        pPrice.textContent =  price + "€/jour";
        pPrice.setAttribute("class", "pPrice__pp_photographer")
        // on les insère dans la balise article
        // <article>
        //     <a href='./photographer.html?id=65464'>
        //        <img src='mimikeel.jpg></img>
        //        <h2>Mimi Keel</h2>
        //    </a>
        // </article>
        userCardDom.appendChild(a);
        a.appendChild(div);
        div.appendChild(img);
        a.appendChild(h2);
        userCardDom.appendChild(pCity);
        userCardDom.appendChild(pTagline);
        userCardDom.appendChild(pPrice);

        // on retourne la balise article
        return userCardDom;
    }

    return { name, id, city, country, tagline, price, portrait, getUserCardDOM }
}

export const displayData = async (photographers) => {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = indexPhotographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};
