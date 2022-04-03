import { Box, SimpleGrid } from '@chakra-ui/react';
import  ProjectCard from './ProjectCard';
import data from './../data/projects.json';

const Projects = ()=>{
    return(
	<section id="projects">
	    <Box>
		<SimpleGrid columns={{base:1, md:3}}>
		    {
			data.map(item => {
			    return(
				<ProjectCard key={item.id}  project={item} />
			    )
		        })
		    }
		</SimpleGrid>
	    </Box>
	</section>
    );
}

export default Projects;
