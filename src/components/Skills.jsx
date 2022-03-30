import { Box, SimpleGrid, Icon, Stack } from '@chakra-ui/react';
import { DiJsBadge, DiJava, DiPython, DiScriptcs, DiLinux, DiMysql, DiCss3, DiRuby, DiMongodb, DiBootstrap, DiSqllite, DiRust, DiGithubBadge} from "react-icons/di";
import Feature from './Feature';


export default function Skills() {
  return (
      <section id="skills">
	<Box p={14} >
	      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
		<Feature
		  icon={<Icon as={DiJsBadge} w={90} h={80} color="yellow.300" />}
		  title={'JavaScript'}
		  front={"ReactJS, NextJS, VanillaJS, NestJs, Express"}
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
		  front={".net, core, windowsForms"}
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
		  front={"ParrotOS, Debian, CuteOS, Bash"}
		  text={
		    'I love linux, cause this environment is awesome having nice tools for create software'
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
        </section>
  );
}
