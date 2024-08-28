import { useGif } from '../hooks/useGif.jsx'
import { BuscarGif } from './BuscarGif.jsx'
import { ContenedorGifs } from './ContenedorGifs.jsx'
 
//functional component
export const GifApp = () => {
 
    const {handleGetGif, gifs} = useGif()
    return (
        //fragment
        <>
           <BuscarGif handleGetGif={handleGetGif}/>
           <ContenedorGifs gifs={gifs}/>
 
        </>
    )
}
 
