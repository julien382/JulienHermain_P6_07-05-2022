export const getPhotographers = async () => {
    const DATA = await getData()
    return DATA.photographers
}
