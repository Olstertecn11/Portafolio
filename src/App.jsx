
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/Nav';
import Me from './components/Me';
import Separator from './components/Separator'
import Skills from './components/Skills';
import GoTopButton from './components/GoTopButton';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <Routes>
        <Route path='/' exec element={<Me />} />
        <Route path='/Skills' exec element={<Skills />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
      <Footer />
      <GoTopButton />
    </ChakraProvider>
  );
}
export default App;


