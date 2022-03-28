import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/Nav';
import Me from './components/Me';

function App() {
	return (
	    <ChakraProvider>
		<Nav />
		<Me />
	    </ChakraProvider>
	);
}

export default App;
