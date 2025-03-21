const API_URL = 'http://api.giphy.com/v1/gifs/search'
const API_KEY = 'uNoQinIlwGDuAeSeuSimAWXrOcARaynu'

export const getGifs = async(category) => {
    const url = `${API_URL}?api_key=${API_KEY}&q=${category}&limit=20`
    const response = await fetch(url)
    const { data } = await response.json()
    const gifs = data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }))

    return gifs
}