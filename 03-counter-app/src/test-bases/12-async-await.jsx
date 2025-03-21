// Async/Await

const URL = 'http://api.giphy.com/v1/gifs/random'
const API_KEY = 'QSrX6KCzfZBtOkBu91vQtpf69ug1yXfH'

export const getImage = async() => {
    try {
        const res = await fetch(`${URL}?api_key=${API_KEY}`)
        const data = await res.json()
        const { data: images } = data
        const { url } = images.images.original
        
        return url
    } catch (error) {   
        return 'Not found the image'     
    }
}