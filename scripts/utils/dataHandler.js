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
    return DATA.photographers
}

export const getMedias = async () => {
    const DATA = await getData()
    return DATA.media
}
