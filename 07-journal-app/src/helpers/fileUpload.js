export const fileUpload = async(file) => {
    // if(!file) throw new Error('The file is not defined')
    if(!file) return null
    
    const cloudUrl = 'https://api.cloudinary.com/v1_1/du1qbudpu/upload'
    const formData = new FormData()

    formData.append('file', file)
    formData.append('upload_preset', 'react-journal')

    try {
        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if(!response.ok) throw new Error('Could not upload image')

        const cloudResponse = await response.json()

        return cloudResponse.secure_url
    } catch (error) {
        // console.log(error)
        
        // throw new Error(error.message)

        return null
    }
}