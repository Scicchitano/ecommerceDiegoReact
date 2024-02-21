const products = [
    {
        id:'cremaPulidora',
        name: 'Crema pulidora ',
        price:'12.000',
        category:'Productos',
        img:'http://www.fiorela.com.ar/wp-content/uploads/2020/07/crema-pulidora-con-porcelana-768x768.jpg',
        stock:'5',
        description:'Crema exfoliante para el rostro ',
    },
    {
        id:'cremaHidratante',
        name: 'Crema hidratante para el dia',
        price:'13.000',
        category:'Productos',
        img:'https://www.clara.es/medio/2020/10/28/crema-hidratante-y-nutritiva-de-sephora_f42a7c47_1292x1000.jpg',
        stock:'10',
        description:'Crema hidratante de dia',
    },
    
    ]
    
    
    
    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve(products)
            }, 1000)
         
        })
    }
    
    
    export const getProductById = (id) => {
        return new Promise((resolve) => {
            console.log("El id recibido es : " + id)
            setTimeout(() => {
                resolve(products.find(prod => prod.id === id))
            }, 500)
        })
    }
    
    export const getProductByCategoryId = (categoryId) => {
        return new Promise((resolve) => {
            console.log("El categoryId recibido es : " + categoryId)
            setTimeout(() => {
                resolve(products.filter(prod => prod.category === categoryId))
            }, 500)
        })
    }