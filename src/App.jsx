import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a ZAPASPORT'}/>
      <ItemDetailContainer />
    </>
  )
}

export default App
