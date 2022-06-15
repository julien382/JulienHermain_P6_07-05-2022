export const likesHandler = () => {
    const pNumberLike = document.querySelector('.pNumberLike')
    const heartImage = document.querySelector('.heartImage')

    heartImage.forEach(div => {
        div.addEventListener('click', () => {
            const parent = div.parentElement
            const nombreLikes = parent.querySelector('.nombreLikes')

            if (div.classList.contains('liked')) {
                const newTotalLikes = parseInt(nombreLikes.innerHTML) - 1
                const newGlobalLikes = parseInt(pNumberLike.innerHTML) - 1
                nombreLikes.innerHTML = newTotalLikes
                pNumberLike.innerHTML = newGlobalLikes
            } else {
                const newTotalLikes = parseInt(nombreLikes.innerHTML) + 1
                const newGlobalLikes = parseInt(pNumberLike.innerHTML) + 1
                nombreLikes.innerHTML = newTotalLikes
                pNumberLike.innerHTML = newGlobalLikes
            }

            div.classList.toggle('liked')
        })
    })
}