import { generateMedia } from 'styled-media-query'

export const mediaPoint = {
    xl: '1200px',
    lg: '960px',
    md: '540px',
    sm: '540px',
    xs: '320px'
}

export const mediaQueries = generateMedia(mediaPoint)

export default mediaQueries