import React, { useState } from "react";
import {
  Image, useBreakpointValue, Heading, HStack, Box,
  Text, SimpleGrid, Link, Badge, VStack, Button
} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import TerminalPrompt from '../../components/common/TerminalPrompt';

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const myProjects = [
    { name: "Python_Editor.js", desc: "Editor de código con ejecución de Python en tiempo real.", tech: ["Javascript", "Electron"], type: "Tool", color: "#f7df1e" },
    { name: "Snake_Game.lua", desc: "Versión del clásico juego Snake usando el motor LÖVE.", tech: ["Lua"], type: "Game", color: "#51a2da" },
    { name: "ChurchApp_GT", desc: "Localizador y gestión de iglesias adventistas en Guatemala.", tech: ["React", "Javascript"], type: "Web App", color: "#61dafb" },
    { name: "OVG_Volcanology", desc: "Panel administrativo para el departamento de vulcanología in3.", tech: ["PHP", "JQuery"], type: "Admin Panel", color: "#777bb4" },
    { name: "GraphicsJS_Lib", desc: "Librería para dibujar espectros y exportar a PDF/Imagen.", tech: ["Javascript"], type: "Library", color: "#f0db4f" },
    { name: "SSG_Mobile", desc: "App de alertas sísmicas para Guatemala (Colaborador).", tech: ["Flutter"], type: "Mobile", color: "#02569b" },
    { name: "Notes_Stack", desc: "Ecosistema de Notas (Frontend + API con NestJS).", tech: ["React", "TypeScript", "NestJS"], type: "Fullstack", color: "#e0234e" },
  ];

  // Extraer tecnologías únicas para los botones de filtro
  const allTechs = ["All", ...new Set(myProjects.flatMap(p => p.tech))];

  // Filtrar la lista según la selección
  const filteredProjects = filter === "All"
    ? myProjects
    : myProjects.filter(p => p.tech.includes(filter));

  return (
    <Box mt={4}>
      <HStack height="20%" width="100%" spacing={44} paddingX={'8rem'} py={'2rem'} justifyContent={'space-between'}>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          <Text as={'span'} position={'relative'} _after={{ content: "''", width: 'full', height: '30%', position: 'absolute', bottom: 1, left: 0, bg: '#a2b0b0', zIndex: -1 }}>
            Software
          </Text>
          <br />
          <Text color={'#72a1a1'} as={'span'}>Developer</Text>
        </Heading>
        <Image src="https://github.com/Olstertecn11/imageslol/blob/main/mee.jpeg?raw=true" width="200px" height="200px" borderRadius="full" objectFit={'cover'} />
      </HStack>

      <Box px={'8rem'} mb={16}>
        <TerminalPrompt path="~/Projects" command={`grep --include='*.{${filter}}' *`} />

        {/* BARRA DE FILTROS (Simulando parámetros de comando) */}
        <HStack spacing={3} mt={6} mb={8} wrap="wrap">
          <Text color="gray.500" fontFamily="mono" fontSize="sm">Filter by:</Text>
          {allTechs.map(tech => (
            <Button
              key={tech}
              size="xs"
              variant="outline"
              fontFamily="mono"
              color={filter === tech ? "white" : "gray.400"}
              borderColor={filter === tech ? "green.400" : "gray.600"}
              bg={filter === tech ? "#2d4a3e" : "transparent"}
              _hover={{ bg: "#2d4a3e", borderColor: "green.400" }}
              onClick={() => setFilter(tech)}
            >
              --{tech.toLowerCase()}
            </Button>
          ))}
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} overflowY="auto" maxHeight="60vh" pr={2}
          sx={{
            '&::-webkit-scrollbar': { width: '8px' },
            '&::-webkit-scrollbar-track': { background: '#2B3439' },
            '&::-webkit-scrollbar-thumb': { background: '#D9E3D9', borderRadius: '4px' },
            '&::-webkit-scrollbar-thumb:hover': { background: '#9FA9A4' },
          }}
        >
          {filteredProjects.map((project, index) => (
            <Box
              key={index}
              p={5}
              border="1px solid #ffffff22"
              borderRadius="md"
              bg="#00000033"
              transition="all 0.3s"
              _hover={{ transform: 'scale(1.02)', borderColor: project.color }}
            >
              <VStack align="start" spacing={2}>
                <HStack width="100%" justifyContent="space-between">
                  <Text fontWeight="bold" fontSize="xl" color={project.color} fontFamily="mono">
                    {project.name}
                  </Text>
                  <Badge variant="subtle" colorScheme="whiteAlpha">{project.type}</Badge>
                </HStack>

                <Text color="#a2b0b0" fontSize="sm" fontFamily="mono">
                  {project.desc}
                </Text>

                <HStack wrap="wrap">
                  {project.tech.map((t) => (
                    <Text key={t} fontSize="xs" color="#81a1c1" fontFamily="mono">
                      #{t}
                    </Text>
                  ))}
                </HStack>

                <Link pt={2} color="green.300" fontSize="xs" _hover={{ color: 'white', textDecoration: 'none' }}>
                  $ run_demo --live <ExternalLinkIcon mx="2px" />
                </Link>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {filteredProjects.length === 0 && (
          <Text color="red.400" fontFamily="mono" mt={10}>
            [ERROR] No projects found with tag: --{filter.toLowerCase()}
          </Text>
        )}
      </Box>
    </Box>
  );
}
