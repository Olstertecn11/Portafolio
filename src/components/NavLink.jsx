import {Link, useColorModeValue} from '@chakra-ui/react';

const NavLink = ({ children, ref_section })=> (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      // bg: useColorModeValue('gray.100', 'gray.700'),
      bg: useColorModeValue('purple.500', 'yellow.400'),
      color: useColorModeValue('white', 'black')
    }}
    href={'#' + ref_section}>
    {children}
  </Link>
);

export default NavLink;
