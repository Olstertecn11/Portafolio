import ProjectCard from './ProjectCard';
import data from './../data/projects.json';
import {
  Box,
  SimpleGrid,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  IconButton
} from '@chakra-ui/react'

import { FaArrowDown } from 'react-icons/fa';

const Projects = () => {

  const handleClick = () => {
    const section = document.getElementById('cards');
    section.scrollIntoView({ behavior: 'smooth' });
  }


  return (

    <section id="projects">
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            <b>Please look at</b> <br />
            <Text as={'span'} color={'#FFD700'}>
              my work
            </Text>
          </Heading>
          <Text color={useColorModeValue('gray.800', 'gray.400')}>
            These are some projects that I have done, in some I have been a great collaborator and others are 100% my own, you can see in them a demonstration of what I can do.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              href="#cards"
              onClick={handleClick}
              colorScheme={'green'}
              fontWeight={'bold'}
              bg={'#FFD700'}
              color={useColorModeValue('#1A202C', '#1A202C')}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'yellow.400',
              }}>
              Ver Proyectos
              <IconButton
                background={'transparent'}
                margin={0}
                as="a"
                aria-label="Twitter"
                icon={<FaArrowDown color={'#1A202C'} fontSize="1.25rem" />}
              />
            </Button>
            <Box>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <section id="cards">
        <Box >
          <SimpleGrid columns={{ base: 1, md: 3 }}>
            {
              data.map(item => {
                return (
                  <ProjectCard key={item.id} project={item} />
                )
              })
            }
          </SimpleGrid>
        </Box>
      </section>
    </section>
  );
}

export default Projects;
