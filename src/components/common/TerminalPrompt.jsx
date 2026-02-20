import { Box, Text } from '@chakra-ui/react';

const TerminalPrompt = ({ path = "~", command = "" }) => {
  return (
    <Box className="prompt" display="flex" alignItems="center" flexWrap="wrap">
      {/* Parte Izquierda: Usuario (Borde redondeado estilo Modern Powerline) */}
      <span className="sep-0" style={{ color: '##546E6E' }}></span>
      <span className="user" style={{ backgroundColor: '##546E6E', color: 'white', padding: '0 4px' }}>
         olster
      </span>


      {/* Separador Central: Entre Usuario y Path */}
      <span className="sep-1" style={{ color: '##546E6E', backgroundColor: '##192929' }}></span>

      {/* Parte Central: Path */}
      <span className="path" style={{ backgroundColor: '##192929', color: '#eeeeee', padding: '0 8px' }}>
         {path}
      </span>

      {/* Separador Final: Cierre del Path */}
      <span className="sep-2" style={{ color: '##192929', backgroundColor: 'transparent' }}></span>

      {/* El Comando Digitado */}
      <Box as="span" display="flex" alignItems="center" ml={2}>
        {command && (
          <>
            <Text as="span" color="green.500" fontWeight="bold" mr={2}>
              {command.split(' ')[0]} {/* Primera palabra (ej: less) */}
            </Text>
            <Text as="span" color="white" mr={1}>
              {command.split(' ').slice(1).join(' ')} {/* Resto (ej: who_is_oliver.txt) */}
            </Text>
          </>
        )}
        <Text as="span" className="terminal-cursor" color="white">█</Text>
      </Box>
    </Box>
  );
};

export default TerminalPrompt;
