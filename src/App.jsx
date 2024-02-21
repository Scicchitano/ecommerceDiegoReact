import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a la academia profesional" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenido a la Acedemia profesional'} />} clas/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        
        
      </Routes>
    </BrowserRouter>  
   
      
    </>
  )
}

export default App