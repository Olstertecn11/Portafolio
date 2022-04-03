import './style/Nav.css';
import NavLink  from './NavLink';

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  HStack,
  useColorMode,
  Center,
  Icon
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {useEffect, useState} from 'react';
import { DiJavascript1 } from 'react-icons/di';
const Links = ['Skills', 'Projects', 'Contact'];
const Refs = ['skills', 'projects', 'contact'];

export default function Nav() {
    const [width, setWidth] = useState(window.innerWidth);
    const { colorMode, toggleColorMode } = useColorMode();
    const [show, setShow] = useState('');

    const handleWindowSizeChange = ()=>{
	setWidth(window.innerWidth);
    }

    const goToSection = (section)=>{
	document.getElementById(section).scrollIntoView({behavior: 'smooth'});
    }


    useEffect(()=>{
	window.addEventListener('resize', handleWindowSizeChange);
	if(width >= 768){
	    setShow('none');
	} 
	else{
	    setShow('inline');
	}
	return() =>{
	    window.removeEventListener('resize', handleWindowSizeChange);
	}

    });


  return (
    <>
      <Box bg={useColorModeValue('gray.200', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
	  <HStack spacing={0}>
	      <Box color={'gray.400'} fontSize={"xl"} fontWeight={"bold"} > Oliver Tzunun.</Box>
	      <Icon as={DiJavascript1} color='yellow.500'  h={8} w={7}/>
	  </HStack>
	  <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, index) => (
                <NavLink key={link} ref_section={Refs[index]}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} colorScheme={useColorModeValue('purple', 'orange')}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu >
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
		  style={{display: show}}
                  minW={0}>
                  <Avatar
                    size={'sm'}
		    src={'https://github.com/Olivers11/Images/blob/master/profil_portafolio-modified.png?raw=true'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'} >
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
		      src={'https://github.com/Olivers11/Images/blob/master/profil_portafolio-modified.png?raw=true'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Oliver</p>
                  </Center>
                  <br />
                  <MenuDivider />
		    <MenuItem onClick={()=>goToSection('skills')}>Skills</MenuItem>
		    <MenuItem onClick={()=>goToSection('projects')}>Projects</MenuItem>
		    <MenuItem onClick={()=>goToSection('contact')}>Contact</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
