export const ContenedorGifs = ({gifs}) => {

return (
    <>
    <div className="d-flex flex-row justify-content-center alig-items-center m-3">
        {gifs.map(({id, title, url})=>{
        return(
          <img key={id} className=" m-5" src={url} alt="image" class="rounded-4 : border border-danger"/>
        )
      })}
    </div>
    </>
  )
}
