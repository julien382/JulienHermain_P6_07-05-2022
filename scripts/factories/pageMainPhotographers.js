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
        const img = document.createElement('img')
        const title = document.createElement('h2')
        title.innerText = media.title

        a.setAttribute("href", path)
        a.classList.add('linkLightbox'); 
        img.setAttribute("class", "imagesQuadrillage")
        img.src = path
        card.append(a)
        a.append(img)
        a.append(title)
    } else {
        const video = document.createElement('video')
        video.controls = true
        video.setAttribute("class", "imagesQuadrillage")
        video.src = path
        const title = document.createElement('h2')
        title.innerText = media.title
        card.append(video)
        card.append(title)
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
