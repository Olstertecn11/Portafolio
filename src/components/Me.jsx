import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  useColorMode
} from '@chakra-ui/react';

import Contact from './Contact';
import './style/main.css';

import {
  Container,
  SimpleGrid,
  Icon,
  StackDivider
} from '@chakra-ui/react'
import { IoLogoGithub, IoBook, IoLogoYoutube } from 'react-icons/io5'

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}
export default function Me() {

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <section id="me">
      <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }} mt={4} className="back">
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
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={colorMode == 'dark' ? 'white' : 'gray.500'} textAlign={"justify"}>
              Hello, my name is Oliver, I'm student of systems engineering and programming lover.
              I like learn and put into practice all that I know, don't know everything but I will
              always give my all.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                onClick={() => window.open("https://drive.google.com/file/d/1ovosAEKkWMPKgdk-y-Jnp1FC1nBN4g8W/view?usp=sharing")}
                rounded={'full'}
                bg={useColorModeValue('yellow.400', 'yellow.400')}
                fontWeight={'bold'}
                color={'black'}
                _hover={{
                  bg: 'yellow.500',
                }}>
                Dowload CV
              </Button>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.300' }}
                onClick={onOpen}
              >
                Contact
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Contact onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            borderRadius={180}
            w={300}
            h={300}
            src={'https://olstertecn11.github.io/Profile/assets/img/profil.png'} />
        </Flex>
      </Stack>
      <img className='img-sep' src="https://github.com/Olstertecn11/imageslol/blob/main/wave-haikei.png?raw=true" width={'100%'} height={'10%'} />
      <Container maxW={'6xl'} py={12} mt={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>

          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://github.com/Olstertecn11/imageslol/blob/main/chanel.png?raw=true'
              }
              objectFit={'contain'}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Who is Oliver?
            </Text>
            <Heading>An obsessive programmer...</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              I took advantage of the pandemic to study a lot about various programming topics, from then on it became a habit for me to be self-taught.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
              }>
              <Feature
                icon={<Icon as={IoLogoYoutube} color={'white.500'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'red.900')}
                text={'Content Creator'}
              />
              <Feature
                icon={<Icon as={IoLogoGithub} color={'white.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'gray.900')}
                text={'Open Source Collaborator'}
              />
              <Feature
                icon={<Icon as={IoBook} color={'white.500'} w={5} h={5} />}
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Programming and Maths tutor'}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </section>
  );
}
