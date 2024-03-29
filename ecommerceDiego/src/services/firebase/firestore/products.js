import { createAdaptedProducts } from "../../../adapters/createAdaptedProducts"
import { db } from "../firebaseConfig"

import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        console.log("categoryId: " + categoryId)
        const productsRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        console.log("productsRef: " + productsRef)
        getDocs(productsRef)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(documentSnapshot => {
                    return createAdaptedProducts(documentSnapshot)
                })
                resolve(productsAdapted)
            })
            .catch(error => {
                reject(error)
            })
    }) 
}

export const getProductById = (itemId) => {
    const productRef = doc(db, 'products', itemId)

    return getDoc(productRef)
                .then(documentSnapshot => {
                    return createAdaptedProducts(documentSnapshot)
                })
                .catch(error => {
                    return error
                })
}