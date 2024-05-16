import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path='/' element= {<ItemListContainer greeting={'Bienvenidos a ZapaSport'}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='*' element={<h2>404 NOT FOUND</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
