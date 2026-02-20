import { Image, useBreakpointValue, Heading, HStack, Box, Text, SimpleGrid, VStack } from "@chakra-ui/react"
import TerminalPrompt from '../../components/common/TerminalPrompt';

export default function Skills() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* HEADER: Se mantiene igual para consistencia visual */}
      <HStack height="20%" width="100%" spacing={44} paddingX={'8rem'} py={'2rem'} justifyContent={'space-between'}>
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
              bg: '#a2b0b0',
              zIndex: -1,
            }}>
            Software
          </Text>
          <br />{' '}
          <Text color={'#72a1a1'} as={'span'}>
            Developer
          </Text>{' '}
        </Heading>
        <Image src="https://github.com/Olstertecn11/imageslol/blob/main/mee.jpeg?raw=true" width="200px" height="200px" borderRadius="full" objectFit={'cover'} />
      </HStack>

      <Box px={'8rem'} mb={16}>
        {/* PROMPT DE INICIO */}
        <TerminalPrompt
          path="~/Skills"
          command="ls -R tech_stack/"
        />

        <Box mt={6}>
          <Text color={'#a2b0b0'} fontSize={'lg'} fontFamily={'JetBrains Mono, monospace'} lineHeight={'1.6'}>

            <Text color="#ebcb8b" fontWeight="bold" mb={4}>
              "Quizás no sepa todo, pero te aseguro que lo que puedas imaginar, puedo hacerlo."
            </Text>

            {/* GRID DE HABILIDADES */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} reverse={true}>

              <VStack align="start" spacing={1}>
                <Text color="red.400" fontWeight="bold"> Laravel/</Text>
                <Text pl={4} fontSize="md">Un artesano con esta tecnología, me ha permitido desarrollar diversos sistemas.</Text>
                <Text pl={4} color="#81a1c1">┗━ Artisan, Elloquent, InertiaJS</Text>
              </VStack>

              {/* JavaScript Group */}
              <VStack align="start" spacing={1}>
                <Text color="#f7df1e" fontWeight="bold"> JavaScript/</Text>
                <Text pl={4} fontSize="md">Amante de JS para Web y Mobile.</Text>
                <Text pl={4} color="#81a1c1">┗━ ReactJS, NextJS, React Native, NestJS, Express</Text>
              </VStack>

              {/* Python Group */}
              <VStack align="start" spacing={1}>
                <Text color="#3776ab" fontWeight="bold"> Python/</Text>
                <Text pl={4} fontSize="md">Múltiples aplicaciones por su versatilidad.</Text>
                <Text pl={4} color="#81a1c1">┗━ Flask, Django, OpenCV, PyFirmata</Text>
              </VStack>

              {/* Linux & Tools */}
              <VStack align="start" spacing={1}>
                <Text color="#98c379" fontWeight="bold"> Linux_Environment/</Text>
                <Text pl={4} fontSize="md">Amo el entorno Linux (Arch BTW).</Text>
                <Text pl={4} color="#81a1c1">┗━ Neovim❤️, Bash, Debian, Arch, ParrotOS</Text>
              </VStack>

              {/* Databases */}
              <VStack align="start" spacing={1}>
                <Text color="#00758f" fontWeight="bold"> Databases/</Text>
                <Text pl={4} fontSize="md">Experiencia con diversos gestores.</Text>
                <Text pl={4} color="#81a1c1">┗━ MySQL, PostgreSQL, MongoDB, SQLite</Text>
              </VStack>


              {/* CSharp */}
              <VStack align="start" spacing={1}>
                <Text color="#239120" fontWeight="bold">󰌛 CSharp/</Text>
                <Text pl={4} fontSize="md">Creación de microservicios y MVC.</Text>
                <Text pl={4} color="#81a1c1">┗━ .NET Core, WindowsForms</Text>
              </VStack>

            </SimpleGrid>

            {/* SECCIÓN FINAL DE STATUS */}
            <Box mt={10}>
              <TerminalPrompt
                path="~/Skills"
                command="check_system_status"
              />
              <Box pl={4} mt={2} borderLeft="3px solid #a3be8c">
                <Text color="#a3be8c">>> [OK] All frameworks loaded successfully.</Text>
                <Text color="#a3be8c">>> [OK] Ready to build the unimaginable.</Text>
              </Box>
            </Box>

            <Text mt={8} color="#555f74" textAlign="center">-- END OF SKILLS --</Text>
          </Text>
        </Box>
      </Box>
    </div>
  );
}
