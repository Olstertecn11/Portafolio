import { Box, SimpleGrid, Icon, Text, Stack, Flex, useColorModeValue, Badge} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { DiJsBadge, DiJava, DiPython, DiScriptcs, DiLinux, DiMysql} from "react-icons/di";


const Feature = ({ title, text, icon, front, back}) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        mb={1}>
	{icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'} textAlign="justify">{text}</Text>
      <Stack align={'left'} justify={'center'} direction={'row'} mt={6}>
	 <Badge
	      textTransform="capitalize"
	      px={2}
	      py={1}
	      color="black"
	      bg={useColorModeValue('yellow.50', 'yellow.300')}
	      fontWeight={'semibold'}>
	      {front}
	</Badge>
      </Stack>
   </Stack>
  );
};

export default function Skills() {
  return (
      <section id="skills">
	<Box p={14} >
	      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
		<Feature
		  icon={<Icon as={DiJsBadge} w={90} h={80} color="yellow.300" />}
		  title={'JavaScript'}
		  front={"ReactJS, NextJS, VanillaJS"}
		  text={
		      'I am JS lover, i have various projects with frameworks and libraries from nodeJS.'
		  }
		/>
		<Feature
		  icon={<Icon as={DiPython} w={90} h={80} color="blue.400"/>}
		  title={'Python'}
		  front={"Flask, Django, OpenCV, Pyfirmata"}
		  text={
		    'Python is the language that i use for multiples applications for variety of packages that he has '
		  }
		/>
		<Feature
		  icon={<Icon as={DiJava} w={90} h={80} color="orange.300"/>}
		  title={'Java'}
		  front={"JSP, Swing, AndroidStudio"}
		  text={
		    'This Language is more used for desktop applications and simple web pages'
		  }
		/>
	      </SimpleGrid>
	      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
		<Feature
		  icon={<Icon as={DiScriptcs} w={90} h={80} color="yellow.300" />}
		  title={'CSharp'}
		  front={".net, core, windowsforms"}
		  text={
		    'Same as Java i use this language for desktop applications'
		  }
		/>
		<Feature
		  icon={<Icon as={DiMysql} w={90} h={80} color="blue.400"/>}
		  title={'Mysql'}
		  front={"Worckbench, PhpMyAdmin, Shell"}
		  text={
		    'i am familiarized with this manager database, working with various managers'
		  }
		/>
		<Feature
		  icon={<Icon as={DiLinux} w={90} h={80} color="gray.300"/>}
		  title={'Linux'}
		  text={
		    'I love linux, cause this environment is awesome having nice tools for create software, also have a light system for hardware'
		  }
		/>
	      </SimpleGrid>
	    </Box>
        </section>
  );
}
