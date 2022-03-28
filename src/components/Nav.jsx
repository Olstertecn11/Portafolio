import './style/Nav.css';
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
  Link
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, PhoneIcon } from '@chakra-ui/icons';

import {useEffect, useState} from 'react';

const Links = ['Skills', 'Projects', 'Contact'];

const NavLink = ({ children })=> (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      // bg: useColorModeValue('gray.100', 'gray.700'),
      bg: useColorModeValue('blue', 'white.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
    const [width, setWidth] = useState(window.innerWidth);
    const { colorMode, toggleColorMode } = useColorMode();
    const [show, setShow] = useState('');

    const handleWindowSizeChange = ()=>{
	setWidth(window.innerWidth);
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
      <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Oliver Tzunun</Box>
	    
	  <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
	      {/* <Button leftIcon={<PhoneIcon />} colorScheme='pink' variant='solid'> */}
		  {/* Contact */}
	      {/* </Button> */}
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
                  <MenuItem>Skills</MenuItem>
                  <MenuItem>Projects</MenuItem>
                  <MenuItem>Contact</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
