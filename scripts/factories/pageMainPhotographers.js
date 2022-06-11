export const displayMedia = async (medias, photographerName) => {
    const pictures = document.querySelector(".pictures");

    // Mimi keel ==> Mimi
    const cutName = photographerName.split(' ')[0] // Ellie-Rose

    let totalLike = 0

    medias.forEach(media => {
        totalLike += media.likes
        // const mediaPath = est-ce que true ? si true : si false
        const mediaPath = media.image ? media.image : media.video
        // const mediaPath = media.image ?? media.video

        const path = '../../assets/images/' + cutName + '/' + mediaPath
        const card = createCard(path, media)
        pictures.append(card)
    });

    console.log(totalLike);
};

const createCard = (path, media) => {
    const mp4Regex = /\.mp4$/

    const card = document.createElement('div');
    card.classList.add('card')

    if (!mp4Regex.test(path)) {
        const a = document.createElement('a')
        a.setAttribute("href", path)
        a.classList.add('linkLightbox'); 
        const img = document.createElement('img')
        img.setAttribute("class", "imagesQuadrillage")
        img.src = path
        const divText = document.createElement('div')
        divText.setAttribute("class", "divTextImage")
        const title = document.createElement('h2')
        title.setAttribute("class", "titleImage")
        title.innerText = media.title
        const heart = document.createElement('img')
        heart.setAttribute("class", "heartImage")

        card.append(a)
        a.append(img)
        card.append(divText)
        divText.append(title)
        divText.append(heart)
    } else {
        const a = document.createElement('a')
        a.setAttribute("href", path)
        a.classList.add('linkLightbox');
        const video = document.createElement('video')
        video.controls = true
        video.setAttribute("class", "imagesQuadrillage")
        video.src = path
        const divText = document.createElement('div')
        divText.setAttribute("class", "divTextImage")
        const title = document.createElement('h2')
        title.setAttribute("class", "titleImage")
        title.innerText = media.title
        const heart = document.createElement('img')
        heart.setAttribute("class", "heartImage")

        card.append(a)
        a.append(video)
        card.append(divText)
        divText.append(title)
        divText.append(heart)
    }

    return card
};

/////////////////**/
/*
export const displayMediaName = async (photographerName) => {
    const name = document.querySelector(".name_photographer_section");
console.log(photographerName)
    name.append(card)
    // Mimi keel ==> Mimi

    
    //const card = createName(photographerName)
    //pictures.append(card)
    
};

const createName = (path) => {
    const card = document.createElement('div')
    card.classList.add('p')

    card.append(p)

    return card
};*/
