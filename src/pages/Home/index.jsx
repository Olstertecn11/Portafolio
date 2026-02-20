import { Grid, Image, useBreakpointValue, Heading, Flex, Icon, HStack, VStack, Box, Text } from "@chakra-ui/react"
import { DiJavascript1 } from 'react-icons/di';
import '../../style/main.css'
import { MdClose } from "react-icons/md";
import AboutMe from "../About";
import React from "react";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../../pages/Contact";

export default function Home() {
  // Guardamos un string para identificar la sección activa
  const [activeSection, setActiveSection] = React.useState('about');

  // Función para renderizar el contenido según el estado
  const renderSection = () => {
    switch (activeSection) {
      case 'about': return <AboutMe />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact isOpen={true} onClose={() => setActiveSection('about')} />;
      case 'projects': return <Projects />;
      default: return <AboutMe />;
    }
  };

  return (
    <div style={{ backgroundColor: '#202f2e', zIndex: -2 }}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh" width="100%" position={'relative'}>
        <Image src="https://decotvframes.com/cdn/shop/products/SA1035_w_1200x.jpg?v=1637669731" position='absolute' w='70%' height={'70%'} zIndex={1} />

        <Box position='relative' zIndex={1} color='white' width='70%' p={4} bg='#546e6e80'
          borderRadius='4px  18px 18px 18px' height={'100vh'} backdropFilter={'blur(22px)'} my={'4rem'}
          border={'1px solid #ffffff61'}
        >

          {/* TAB 1: About Me */}
          <Box position='absolute' top={'-44px'} left={'-1px'} width={'14rem'} height={'2.5rem'}
            // Si el estado es 'about', aplicamos el color activo
            bg={activeSection === 'about' ? '#546e6e80' : '#374f4f5e'}
            borderRadius={'18px 18px 1px 1px'}
            _hover={{ bg: activeSection === 'about' ? '#546e6e80' : '#4a6b6b', cursor: 'pointer' }}
            padding={'0.2rem 1rem'}
            onClick={() => setActiveSection('about')}
          >
            <HStack spacing={0} position={'relative'}>
              <Box color={activeSection === 'about' ? 'white' : 'gray.400'} fontSize={"xl"} fontWeight={"bold"} > Oliver Tzunun.</Box>
              <Icon as={DiJavascript1} color='yellow.500' h={8} w={7} />
              <Icon as={MdClose} color='gray.100' h={4} w={6} marginLeft={'.2rem'} marginTop={'.2vw'} />
            </HStack>
          </Box>

          {/* TAB 2: Skills / Proyectos */}
          <Box position='absolute' top={'-44px'} left={'229px'} width={'14rem'} height={'2.5rem'}
            // Si el estado es 'skills', aplicamos el color activo
            bg={activeSection === 'skills' ? '#546e6e80' : '#374f4f5e'}
            borderRadius={'18px 18px 1px 1px'}
            padding={'0.2rem 1rem'}
            _hover={{ bg: activeSection === 'skills' ? '#546e6e80' : '#4a6b6b', cursor: 'pointer' }}
            onClick={() => setActiveSection('skills')}
          >
            <HStack spacing={0} position={'relative'}>
              <Box color={activeSection === 'skills' ? 'white' : 'gray.400'} fontSize={"xl"} fontWeight={"bold"} > Skills </Box>
              <Icon as={MdClose} color='gray.100' h={4} w={6} marginLeft={'7rem'} marginTop={'.2vw'} />
            </HStack>
          </Box>

          <Box position='absolute' top={'-44px'} left={'458px'} width={'14rem'} height={'2.5rem'}
            // Si el estado es 'skills', aplicamos el color activo
            bg={activeSection === 'projects' ? '#546e6e80' : '#374f4f5e'}
            borderRadius={'18px 18px 1px 1px'}
            padding={'0.2rem 1rem'}
            _hover={{ bg: activeSection === 'projects' ? '#546e6e80' : '#4a6b6b', cursor: 'pointer' }}
            onClick={() => setActiveSection('projects')}
          >
            <HStack spacing={0} position={'relative'}>
              <Box color={activeSection === 'projects' ? 'white' : 'gray.400'} fontSize={"xl"} fontWeight={"bold"} > Projects </Box>
              <Icon as={MdClose} color='gray.100' h={4} w={6} marginLeft={'6rem'} marginTop={'.2vw'} />
            </HStack>
          </Box>

          <Box position='absolute' top={'-44px'} left={'688px'} width={'14rem'} height={'2.5rem'}
            // Si el estado es 'skills', aplicamos el color activo
            bg={activeSection === 'contact' ? '#546e6e80' : '#374f4f5e'}
            borderRadius={'18px 18px 1px 1px'}
            padding={'0.2rem 1rem'}
            _hover={{ bg: activeSection === 'contact' ? '#546e6e80' : '#4a6b6b', cursor: 'pointer' }}
            onClick={() => setActiveSection('contact')}
          >
            <HStack spacing={0} position={'relative'}>
              <Box color={activeSection === 'contact' ? 'white' : 'gray.400'} fontSize={"xl"} fontWeight={"bold"} > Contact </Box>
              <Icon as={MdClose} color='gray.100' h={4} w={6} marginLeft={'6rem'} marginTop={'.2vw'} />
            </HStack>
          </Box>

          {/* Renderizamos el componente correspondiente */}
          <Box overflowY="hidden" height="100%">
            {renderSection()}
          </Box>

        </Box>
      </Flex>
    </div>
  )
}
