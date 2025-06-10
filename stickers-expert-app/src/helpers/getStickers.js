export const getStickers = async(category) => {
    const url = `http://api.giphy.com/v1/stickers/search?api_key=MY_SECRET_API_KEY&q=${category}&limit=20`
    const response = await fetch(url)
    const { data } = await response.json()
    const stickers = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        rating: img.rating,
    }))
    
    return stickers
}