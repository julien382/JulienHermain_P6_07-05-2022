//Mettre le code JavaScript lié à la page photographer.html
export const Factory = (data) => {
    // const name = data.name
    // const portrait = data.portrait
    const { name} = data;

    const getUserCardDOM = () => {
        const userCardDom = document.createElement( 'div' );

        const h2Contact = document.createElement( 'h2' );
        const pName = document.createElement( 'p' );
   
        h2Contact.textContent = "Contactez-moi";
        h2Contact.setAttribute("class", "contactezMoi")
        pName.setAttribute("class", "name__pp_photographers")
        pName.textContent = name;
        
        userCardDom.appendChild(h2Contact);
        userCardDom.appendChild(pName);

        return userCardDom;
    }

    return { name, getUserCardDOM }
}

export const displayDataName = (photographer) => {
    const photographersHeader = document.querySelector(".name_photographer_section");

        const photographerModel = Factory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersHeader.appendChild(userCardDOM);
};