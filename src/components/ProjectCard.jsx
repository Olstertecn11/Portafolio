import { Center, Stack, Image, Text, Heading, Button } from '@chakra-ui/react';
import { useColorModeValue, Box } from '@chakra-ui/react';
import getIcon from './getIcon';
import { FaEye } from 'react-icons/fa';

export default function ProjectCard({ project }) {

  const { name, desc, url, img, icon, complements, lang } = project;
  const _icon = getIcon(icon);
  const handleClick = () => {
    window.open(url);
  }

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
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
          <Text color={'gray.500'} align="justify" >
            {desc}
          </Text>
        </Stack>
        <br />
        <hr />
        <Stack mt={4} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Stack direction={'row'} spacing={2} align={'center'}>
              {_icon}
              <Text fontWeight={'bold'}>{lang}</Text>
            </Stack>
            <Text color={'gray.500'} >{complements}</Text>
          </Stack>
        </Stack>
        <Button
          onClick={handleClick}
          leftIcon={<FaEye />}
          mt={4}
          w={'100%'}
          fontWeight="bold"
          colorScheme="yellow"
          _hover={{ color: "black", bg: "yellow.400" }}
          variant="outline"
        >
          View
        </Button>
      </Box>
    </Center>
  );



}

