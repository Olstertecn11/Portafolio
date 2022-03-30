import {Flex, Stack, Text, Badge, useColorModeValue} from '@chakra-ui/react';

const Feature = ({ title, text, icon, front}) => {
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

export default Feature;
