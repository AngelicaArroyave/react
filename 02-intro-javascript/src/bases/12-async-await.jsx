// Async/Await

const URL = 'http://api.giphy.com/v1/gifs/random'
const API_KEY = 'QSrX6KCzfZBtOkBu91vQtpf69ug1yXfH'

// Se retorna una promesa
const getImage = async() => {
    try {
        const res = await fetch(`${URL}?api_key=${API_KEY}`)
        const data = await res.json()
        const { data: images } = data
        console.log("🚀 ~ getImage ~ information:", images)
        const { url } = images.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.error(error);        
    }
}

// Forma 1 de imprimir
// console.log(getImage());

// Forma 2 de imprimir
// getImage().then(console.log)
getImage()