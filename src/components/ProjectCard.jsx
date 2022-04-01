import { Center, Stack, Image, Text, Heading, Icon, Button} from '@chakra-ui/react';
import { useColorModeValue, Box} from '@chakra-ui/react';
import { DiJavascript1 } from 'react-icons/di';
import { FaEye } from 'react-icons/fa';

export default function ProjectCard({project}){

    const {id, name, desc, url, img} = project;
    return (
    <Center py={6} px={10}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={img}
            layout={'fill'}
          />
        </Box>
        <Stack >
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
	    {name}
          </Heading>
          <Text color={'gray.500'}>
	      {desc}
          </Text>
        </Stack>
	<br />
	<hr/>
        <Stack mt={4} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
	    <Stack direction={'row'} spacing={2} align={'center'}>
		<DiJavascript1 fontSize={30} color="yellow.400" />
		<Text fontWeight={'bold'}>Javascript</Text>
	    </Stack>
            <Text color={'gray.500'} >VanillaJS with Electron and CSS</Text>
          </Stack>
        </Stack>
	  <Button 
	    leftIcon={<FaEye />} 
	    mt={4} 
	    w={'100%'} 
	    fontWeight="bold" 
	    colorScheme="yellow"
	    _hover={{color: "black", bg:"yellow.400"}}
	    variant="outline"
	    >
		View
	  </Button>
      </Box>
    </Center>
  );



}

