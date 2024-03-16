import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx'
import NavBar from './componentes/NavBar/NavBar.jsx'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { NotificationProvider } from './notificacion/NotificationContext.jsx'
import Cart from './componentes/Cart/Cart.jsx';
import Checkout from './componentes/Checkout/Checkout.jsx';

function App() {
  return (
    <>
    <NotificationProvider>
        <CartProvider>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenid@ a La Academia Profesional!" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'¡Bienvenid@ a La Academia Profesional!'} />} clas/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        
      </Routes>
    </BrowserRouter>  
    </CartProvider>
    </NotificationProvider>
   
      
    </>
  )
}

export default App