export const getData = async () => {
    const response = await fetch('../../data/photographers.json');

    if (response.ok) {
        const data = await response.json()
        return data;
    } else {
        console.error('ça va pas:', response.status, response.statusText);
    }
}

export const getPhotographers = async () => {
    const DATA = await getData()
    //console.log(DATA.photographers.id)
    return DATA.photographers
}

export const getOnePhotographers = async (id) => {
    let photographer = null

    const photographers = await getPhotographers()

    for(let i=0; i<photographers.length; i++){
        const photographerId = photographers[i].id
        if (photographerId == id) {
            photographer = photographers[i]
        }
    }
    return photographer
}

export const getMedias = async (id) => {
    const DATA = await getData()
    let medias = []
    DATA.media.forEach((media)=>{
        if (media.photographerId == id){
            medias.push(media)
        }
    })
    return medias
}
