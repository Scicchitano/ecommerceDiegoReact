import { useState, useEffect } from "react"
//import { getProducts, getProductByCategoryId } from "../../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts]=useState([])

    const { categoryId } = useParams()

    console.log("categoryId = " + categoryId)
    
    useEffect(() => {
        if(categoryId){
            getProducts(categoryId)
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