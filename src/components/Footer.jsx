import { Container, Stack, Badge, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';


export default function Footer() {
  return (
    <Container as="footer" role="contentinfo" bg="blackAlpha.200" maxW="container.xl" pb={10} align="center" className='footer'>
      <Stack spacing={{ base: '3', md: '5' }}>
        <Stack align={'left'} spacing={10} justify={'center'} direction={'row'} mt={6}>
          <Badge
            textTransform="capitalize"
            px={2}
            py={1}
            bg="transparent"
            fontWeight={'semibold'}>
            <IconButton
              margin={2}
              as="a"
              href="https://twitter.com/OliverDavila20"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
            <IconButton as="a" href="https://github.com/Olivers11" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
            <IconButton
              as="a"
              margin={2}
              href="https://www.facebook.com/oliver.davila.186"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/oliver-tzunun-a76234221/"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
          </Badge>
        </Stack>
        <Text fontSize="sm" color={useColorModeValue('blackAlpha.500', 'whiteAlpha.600')} fontWeight="bold" align="center" >
          &copy; {new Date().getFullYear()} Oliver Tzunun.  All rights reserved.
        </Text>
      </Stack>
    </Container>
  );
}


