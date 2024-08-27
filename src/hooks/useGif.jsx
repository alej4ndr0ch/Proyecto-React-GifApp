import { useState } from 'react'
 
export const useGif = () => {
 
    const [gif, setGif] = useState('')
 
    const reqGif = async() => {
        await fetch(`https://api.giphy.com/v1/gifs/random?api_key=PNvB5CbIm4KwsAiJ7i3zh28N5vJcJ4Xv`).then(async(resp) => {
            await resp.json().then(({data}) => {
                setGif(data.images.original.url)
            })
        }).catch(console.error)
    }
 
    const handleGetGif = () => {
        reqGif()
    }
 
    return{
        handleGetGif,
        gif
    }
}