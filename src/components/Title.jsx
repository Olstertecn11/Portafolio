import { Heading, Text, useBreakpointValue } from '@chakra-ui/react';


export default function Title({text}) {
	return (
		<Heading textAlign="center" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} mb={20}>
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
				{text}
			</Text>
		</Heading>
	);
}
