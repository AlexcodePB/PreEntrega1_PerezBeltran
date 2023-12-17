import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/Navbar'
import { ChakraProvider, Grid,  } from '@chakra-ui/react'


function App() {

  return (
    <ChakraProvider>
      <Grid templateColumns='repeat(3, 1fr)' gap={5}>
      <Navbar title={'The Grinch'}/>
      </Grid>
      <ItemListContainer greeting={'Welcome..!!'}/>
    </ChakraProvider>
  )
}

export default App
