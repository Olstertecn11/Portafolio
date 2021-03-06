import { ChakraProvider } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import Nav from './components/Nav';
import Me from './components/Me';
import Separator from './components/Separator'
import Skills from './components/Skills';
import GoTopButton from './components/GoTopButton';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
	return (
	    <ChakraProvider>
		<Nav />
		<Fade bottom> <Me /> </Fade>
		<Fade clear> <Separator showTitle={true}  text="Skills"/> </Fade>
		<Fade bottom> <Skills />  </Fade>
		<Fade clear> <Separator showTitle={true} text="Projects" /> </Fade>
		<Projects />
		<Fade clear> <Separator showTitle={false} text="" /> </Fade>
		<Footer />
		<GoTopButton />
	    </ChakraProvider>
	);
}
export default App;

