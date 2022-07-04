import { displayMedia } from "../factories/pageMainPhotographers.js";

export const sortByLikes = async (medias, photographer) => {
    medias.sort((a,b) => a.likes - b.likes)

    const picturesDom = document.querySelector('.pictures')
    picturesDom.innerHTML = ''
    
    displayMedia(medias, photographer.name)

};

export const sortByLikesDate = async (medias, photographer) => {
  medias.sort((a,b) => a.date - b.date)
  console.log(a.date);
  const picturesDom = document.querySelector('.pictures')
  picturesDom.innerHTML = ''
  
  displayMedia(medias, photographer.name)

};

export const sortByLikesTitre = async (medias, photographer) => {
  medias.sort((a,b) => a.title - b.title)

  const picturesDom = document.querySelector('.pictures')
  picturesDom.innerHTML = ''
  
  displayMedia(medias, photographer.name)

  const objArr = ["Shanghai", "Tokyo", "Sao Paulo", "Delhi"]

objArr.sort()

console.log(objArr);

};

 /*const button = document.querySelector('button');
    const nav = document.querySelector('nav');
    const backdrop = document.querySelector('.backdrop');
    
    button.addEventListener('click', () => {
      nav.classList.add('open');
    });
    
    backdrop.addEventListener('click', () => {
      nav.classList.remove('open');
    });

    var elt = document.querySelector('select');
		elt.addEventListener('change', function () {
			console.log(this.value);
		})*/

    /*

    let menuArrow = document.getElementById('.buttonArrow')
    let buttonDateContainer = document.getElementById('.buttonDate')
    let buttonTitleContainer = document.getElementById('.buttonTitre')

    function dropdownmenu() {
    if (menuArrow.classList.contains('rotate-180')) {
        // close the dropdown select-menu
        menuArrow.classList.remove('rotate-180')
        menuArrow.setAttribute('aria-expanded', 'false')
        buttonDateContainer.innerHTML = ''
        buttonTitleContainer.innerHTML = ''
    } else {
        // open the dropdown select-menu
        menuArrow.classList.add('rotate-180')
        menuArrow.setAttribute('aria-expanded', 'true')
        buttonDateContainer.innerHTML = `<button aria-label="trier par date" onclick="sortByDateOnClick()">Date</button>`
        buttonTitleContainer.innerHTML = `<button  aria-label="trier par ordre alphabétique" onclick="sortByNameOnClick()">Titre</button>`
    }
    }
    menuArrow.addEventListener('click', dropdownmenu) 
    */

/*
const objArr = ["Shanghai", "Tokyo", "Sao Paulo", "Delhi"]

objArr.sort()

console.log(objArr);*/

/*const numbers = [1,2,3]

numbers.sort((a,b) => {
    console.log(`${a} - ${b}`);

    return a - b;
})*/