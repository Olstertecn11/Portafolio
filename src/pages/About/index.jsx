
import { Image, useBreakpointValue, Heading, HStack, Box, Text } from "@chakra-ui/react"
import TerminalPrompt from '../../components/common/TerminalPrompt';

export default function AboutMe() {
  return (
    <div style={{ margin: 0, padding: 0 }} >
      <HStack height="20%" width="100%" spacing={44} paddingX={'8rem'} py={'2rem'} justifyContent={'space-between'} >
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
        {/* REUTILIZANDO EL PROMPT AQUÍ */}
        <TerminalPrompt
          path="~/About_Me"
          command="less who_is_oliver.txt"
        />

        <Box mt={6}>
          <Box color={'#a2b0b0'} fontSize={'lg'} fontFamily={'JetBrains Mono, monospace'} textAlign={'justify'} lineHeight={'1.6'}>

            {/* INFO DE USUARIO */}
            <Box mb={6} borderLeft="3px solid #5e81ac" pl={4}>
              <Text as="div"><span style={{ color: '#5e81ac' }}></span> <b>USER:</b> Oliver José Tzunun Dávila</Text>
              <Text as="div"><span style={{ color: '#a3be8c' }}></span> <b>STATUS:</b> Ready for new challenges</Text>
              <Text as="div"><span style={{ color: '#ebcb8b' }}>🚀</span> <b>FOCUS:</b> Full Stack | Cloud | Clean Code</Text>
            </Box>

            {/* CONTENIDO DEL ARCHIVO (Lo que el comando 'less' mostraría) */}
            <Text as="span" color="#81a1c1" fontWeight="bold">DESCRIPTION:</Text>
            <br />
            Ingeniero en Informática con pensum cerrado. Mi enfoque combina la rigurosidad técnica con la agilidad moderna, especializado en transformar requerimientos de negocio en arquitecturas digitales escalables y de alto rendimiento.
            <br /><br />

            {/* TERCER USO DEL PROMPT (Para el historial) */}
            <TerminalPrompt
              path="~/About_Me/History"
              command="cat education_experience.log"
            />
            <Box mt={2} pl={4}>
              <Text fontWeight="bold" color="#eceff4">🎓 Educación</Text>
              <Text> <Text fontWeight='bold'>Licenciatura</Text> - Ingeniería en Informática y Sistemas - Pensum Cerrado <Text as={'span'} fontWeight='bold'> UMG</Text> </Text>
              <Text> <Text fontWeight='bold'>Maestría</Text>     - Seguridad Informática - Primer Año <Text as={'span'} fontWeight='bold'> UMG</Text> </Text>

              <Text fontWeight="bold" color="#eceff4" mt={"3"}>💼 Experiencia</Text>
              <Text>Pasante Desarrollador Jr | Instituto de investigación e ingeniería IN3</Text>
              <Text fontSize="sm" color="#81a1c1" marginLeft={'2rem'}>// Toma de requerimientos y desarrollo de aplicaciones web y móviles.</Text>

              <Text>Desarrollador Middle | Ministerio de Gobernación</Text>
              <Text fontSize="sm" color="#81a1c1" marginLeft={'2rem'}>// Toma de requerimientos, planificación, diseño y desarrollo de plataformas web.</Text>

              <Text>Desarrollador Senior | Ministerio de Gobernación <Text color='green.500' as='span'>(Actual)</Text> </Text>
              <Text fontSize="sm" color="#81a1c1" marginLeft={'2rem'}>// Planificación, diseño y desarrollo de sistemas existentes y nuevos.</Text>
            </Box>

            <Text mt={8} color="#434c5e" textAlign="center">-- END OF FILE --</Text>
          </Box>
        </Box>
      </Box>
    </div >
  );
}
