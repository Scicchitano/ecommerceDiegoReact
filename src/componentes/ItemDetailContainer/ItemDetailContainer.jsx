import { useEffect, useState } from "react"
import { getProducts, getProductById } from "../../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    console.log("ItemDetailContainer")
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    console.log("itemId = " + itemId)

    useEffect(() => {
        setLoading(true)

        getProductById(itemId)
            .then(response => {
                setProduct(response)
                console.log("Productos" + product)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <h1>Cargando Producto...</h1>
    }

    if(!product) {
        return <h1>El producto no existe</h1>
    }

    return (
        <main className="mainProductos" style={{ background: 'lavender'}}>
            <h1 className="detail">Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer
