import { Link, Navigate } from "react-router-dom"
const Item = ({id,name,price,category,img,stock,description}) =>{
    return (
    
        <div className="catalogo">
            
            <h1 className="name">{name}</h1>
            <img src={img} className="imagenDetail"/>
            <h2>${price}</h2>
            <button className="botonDetalles">< Link to={`/item/${id}`} className="verDetalles">Ver detalle</Link></button>

        </div>
    )
}
export default Item

