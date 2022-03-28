import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Me() {
  return (
    <section id="me">
	<Stack  minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
	      <Flex p={8} flex={1} align={'center'} justify={'center'}>
		<Stack spacing={6} w={'full'} maxW={'lg'}>
		  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
		    <Text
		      as={'span'}
		      position={'relative'}
		      _after={{
			content: "''",
			width: 'full',
			height: useBreakpointValue({ base: '20%', md: '30%' }),
			position: 'absolute',
			bottom: 1,
			left: 0,
			bg: 'yellow.500',
			zIndex: -1,
		      }}>
		      Software 
		    </Text>
		    <br />{' '}
		    <Text color={'yellow.400'} as={'span'}>
		      Developer 
		    </Text>{' '}
		  </Heading>
		  <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} textAlign={"justify"}>
		      Hello, my name is Oliver, i'm student of systems engineering and programming lover.
		      I like learn and put into practice all that i know, don't know everything but i will
		      always give my all.
		  </Text>
		  <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
		    <Button
		      rounded={'full'}
		      bg={'yellow.400'}
		      fontWeight={'bold'}
		      color={'black'}
		      _hover={{
			bg: 'yellow.500',
		      }}>
		      Dowload CV 
		    </Button>
		      <Button rounded={'full'} bg={'blue.400'} _hover={{bg:'blue.300'}}>Contact</Button>
		  </Stack>
		</Stack>
	      </Flex>
	      <Flex flex={1}>
		<Image
		  alt={'Login Image'}
		  objectFit={'cover'}
		  w={500}
		  src={'https://github.com/Olstertecn11/Profile/blob/main/assets/img/profil.png?raw=true'}
		/>
	      </Flex>
	</Stack>

    </section>
  );
}
