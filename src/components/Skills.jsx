import { Box, SimpleGrid, Icon, Stack, VStack, useBreakpointValue, Button, Flex, Text } from '@chakra-ui/react';
import { DiJsBadge, DiJava, DiPython, DiScriptcs, DiLinux, DiMysql, DiCss3, DiRuby, DiMongodb, DiBootstrap, DiSqllite, DiRust, DiGithubBadge } from "react-icons/di";
import Feature from './Feature';

import { useState } from 'react';


export default function Skills() {

  const [pos, setPos] = useState(0)
  const titles = ["Habilidades de Desarrollo", "Yo en el trabajo"]
  const paraps = [
    "Quizás no sepa todo, pero te aseguro que lo que puedas imaginar, puedo hacerlo, puede que me tarde mucho o poco, pero lo haré.",
    "Tengo buenas habilidades trabajando con colegas productivos, de esta manera creo que nos apoyamos mutuamente como equipo. También me gusta ayudar a los demás."]

  const handleChange = (newpos) => {
    setPos(newpos);
  }


  return (
    <section id="skills">
      <Flex
        w={'full'}
        h={'100vh'}
      >
        <img className='img-container' src="https://github.com/Olstertecn11/imageslol/blob/main/setup.jpg?raw=true" alt="" />
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={8}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
              {titles[pos]}
            </Text>
            <Text
              color={'white'}
              fontWeight={200}
              lineHeight={1.1}
              fontSize={useBreakpointValue({ base: '3xl', md: '3xl' })}>
              {paraps[pos]}
            </Text>
            <Stack direction={'row'}>
              <Button
                onClick={() => handleChange(0)}
                bg={pos == 0 ? 'blue.400' : 'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Habilidades de Desarrollo
              </Button>
              <Button
                onClick={() => handleChange(1)}
                bg={pos == 1 ? 'blue.400' : 'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Yo en el trabajo
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Box p={14} className="blur"  >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={DiJsBadge} w={90} h={80} color="yellow.300" />}
            title={'JavaScript'}
            front={"ReactJS, NextJS, React Native, NestJS, Express"}
            text={
              'Soy un amante de JS, tengo varios proyectos con frameworks y librerías de nodeJS. Para aplicaciones web y móviles'
            }
          />
          <Feature
            icon={<Icon as={DiPython} w={90} h={80} color="blue.400" />}
            title={'Python'}
            front={"Flask, Django, OpenCV, PyFirmata"}
            text={
              'Python es el lenguaje que uso para múltiples aplicaciones por la variedad de paquetes que tiene'
            }
          />
          <Feature
            icon={<Icon as={DiJava} w={90} h={80} color="orange.300" />}
            title={'Java'}
            front={"JSP, Swing, AndroidStudio"}
            text={
              'Este lenguaje lo uso más para aplicaciones de escritorio y páginas web simples'
            }
          />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
          <Feature
            icon={<Icon as={DiScriptcs} w={90} h={80} color="yellow.300" />}
            title={'CSharp'}
            front={".net, core, windowsForms"}
            text={
              'Lo mismo que Java, uso este lenguaje para aplicaciones de escritorio'
            }
          />
          <Feature
            icon={<Icon as={DiMysql} w={90} h={80} color="blue.400" />}
            title={'Mysql'}
            front={"Worckbench, PhpMyAdmin, Shell"}
            text={
              'Estoy familiarizado con este gestor de base de datos, trabajando con varios gestores'
            }
          />
          <Feature
            icon={<Icon as={DiLinux} w={90} h={80} color="gray.300" />}
            title={'Linux'}
            front={"ParrotOS, Debian, Bash, Arch BTW"}
            text={
              'Amo linux, porque este entorno es increíble, tiene herramientas geniales para crear software (Neovim❤️)'
            }
          />
        </SimpleGrid>
        <Stack direction={'row'} w={'100%'} mt={20} justify={'center'}>
          <Icon w={10} h={30} as={DiGithubBadge}></Icon>
          <Icon w={10} h={30} as={DiCss3}></Icon>
          <Icon w={10} h={30} as={DiRuby}></Icon>
          <Icon w={10} h={30} as={DiMongodb}></Icon>
          <Icon w={10} h={30} as={DiRust}></Icon>
          <Icon w={10} h={30} as={DiBootstrap}></Icon>
          <Icon w={10} h={30} as={DiSqllite}></Icon>
        </Stack>
      </Box>
    </section >
  );
}
