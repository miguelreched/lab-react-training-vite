import { useState } from "react"
function LikeButton() {
  
  const [like, setLike] = useState(0)
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
  
  const handleLikebutton = () => {
    // setLike(like++)
  }
    return (
    <div>
        {/* <button onClick={handleLikebutton} style={}></button> */} comento para evitar error
    </div>
  )
}

//No se que más hacer, me falta los fondos de los botones pero no se como implem,entarlos en el boton.

export default LikeButton