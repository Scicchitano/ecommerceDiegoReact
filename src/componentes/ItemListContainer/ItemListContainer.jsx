import { useState, useEffect } from "react"
import { getProducts, getProductByCategoryId } from "../../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts]=useState([])

    const { categoryId } = useParams()

    console.log("categoryId = " + categoryId)
    
    useEffect(() => {
        if(categoryId){
            getProductByCategoryId(categoryId)
            .then(result => {
                setProducts(result)
            })
        }else{
            getProducts()
            .then(result => {
                setProducts(result)
            })
        }
        console.log(products)
       }, [])
    



    return (
        <>
        <h1 className="greeting">{greeting}</h1>
        <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer