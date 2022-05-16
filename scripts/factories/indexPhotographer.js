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
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const p = document.createElement( 'p' );

        // on remplie nos balises
        img.setAttribute("src", picture)
        img.setAttribute("class", "pp_photographer", userCardDom)
        img.setAttribute("class", "img_pp_photographer", picture)
        h2.textContent = name;
        p.textContent = city;

        // on les insère dans la balise article
        // <article>
        //     <a href='./photographer.html?id=65464'>
        //        <img src='mimikeel.jpg></img>
        //        <h2>Mimi Keel</h2>
        //    </a>
        // </article>
        userCardDom.appendChild(img);
        userCardDom.appendChild(h2);
        userCardDom.appendChild(p);

        // on retourne la balise article
        return userCardDom;
    }

    return { name, city, picture, getUserCardDOM }
}

export const displayData = async (photographers) => {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = indexPhotographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};
