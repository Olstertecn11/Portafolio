import { Container, Stack, Badge,IconButton, Text, useColorModeValue} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer(){
    return(
	<Container as="footer" role="contentinfo" w='100%' py={{ base: '12'}} align="center">
	    <Stack spacing={{ base: '3', md: '5' }}>
	      <Stack direction="row" align="center" spacing={4}  textAlign="center">
		  
		  	      </Stack>
	      <Stack align={'left'} spacing={4} justify={'center'}  direction={'row'} mt={6}>
		     <Badge
			  textTransform="capitalize"
			  px={2}
			  py={1}
			  fontWeight={'semibold'}>
			    <IconButton
				margin={2}
				as="a"
				href="#"
				aria-label="Twitter"
				icon={<FaTwitter fontSize="1.25rem" />}
			    />
			    <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
			    <IconButton
				as="a"
				margin={2}
				href="#"
				aria-label="Twitter"
				icon={<FaTwitter fontSize="1.25rem" />}
			      />
			    <IconButton
				as="a"
				href="#"
				aria-label="LinkedIn"
				icon={<FaLinkedin fontSize="1.25rem" />}
			    />
		    </Badge>
		  </Stack>
		  <Text fontSize="sm" color="subtle" align="center" >
		    &copy; {new Date().getFullYear()} Oliver Tzunun,  All rights reserved.
		  </Text>
		</Stack>
      </Container> 
    );
}


