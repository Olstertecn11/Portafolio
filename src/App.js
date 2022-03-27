import  { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/Nav';

function App() {
  return (
      <ChakraProvider>
	  <Nav />
      </ChakraProvider>
  );
}

export default App;
