import { Box, ImageList, ImageListItem } from "@mui/material"


export const ImageGallery = ({ images = [] }) => {
    return (
        <Box sx={{ width: '100%', height: 500, overflowY: 'scroll' }}> 
            <ImageList variant="masonry" cols={4} gap={8}>
                {images.map(image => (
                    <ImageListItem key={image}>
                        <img
                            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image}?w=248&fit=crop&auto=format`}
                            alt='Image of the note'
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}