import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/HomeComponents/ItemListContainer'
function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Hola a todos'} />
    </>
  )
}

export default App
