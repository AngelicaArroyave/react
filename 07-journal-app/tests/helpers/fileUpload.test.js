import { fileUpload } from '../../src/helpers/fileUpload'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: '',
    api_key: '',
    api_secret: '',
    secure: true
})

describe('Test in fileUpload', () => {
    test('You must upload the file correctly to Cloudinary', async() => {
        const imageUrl = 'https://zenfolio.com/wp-content/uploads/2022/09/mountainscape-landscape-idea.jpg'
        const response = await fetch(imageUrl)
        const blob = await response.blob()
        const file = new File([blob], 'image.jpg')
        const url = await fileUpload(file)

        expect(typeof url).toBe('string')

        const segments = url.split('/')
        const imageID = segments[segments.length - 1].replace('.jpg', '')

        const cloudResponse = await cloudinary.api.delete_resources([imageID])
        console.log("🚀 ~ test ~ cloudResponse:", cloudResponse)
    })

    test('Must return null', async() => {
        const file = new File([], 'image.jpg')
        const url = await fileUpload(file)

        expect(url).toBe(null)
    }) 
})