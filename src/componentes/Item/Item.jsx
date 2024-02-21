const Item = ({id,name,price,category,img,stock,description}) =>{
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} style={{width:300}}/>
            <h2>${price}</h2>

        </div>
    )
}
export default Item


// {
//     id:'asdsa',
//     name: 'asd',
//     price:'sad',
//     category:'sdfdsc',
//     img:'sdfdsc',
//     stock:'sdfdsc',
//     description:'sdfdsc',
// },