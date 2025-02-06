// Fetch API

const URL = 'http://api.giphy.com/v1/gifs/random'
const API_KEY = 'QSrX6KCzfZBtOkBu91vQtpf69ug1yXfH'

const req = fetch(`${URL}?api_key=${API_KEY}`)
                .then(res => res.json())
                .then(({data}) => {
                    console.log(data.images)
                    console.log(data.images.original.url)
                    const { url } = data.images.original
                    const img = document.createElement('img')
                    img.src = url
                    document.body.append(img)
                })
                .catch(err => console.warn(err))