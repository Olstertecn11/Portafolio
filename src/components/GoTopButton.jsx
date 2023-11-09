import { BiChevronUpCircle} from 'react-icons/bi';
import { Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import './style/GoTopButton.css';


const GoTopButton = () => {

	const [showGoTop, setShowGoTop] = useState(false)

	const handleVisibleButton = () => {
		setShowGoTop(window.pageYOffset > 50)
	}

	const handleScrollUp = () => {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		window.addEventListener('scroll', handleVisibleButton)
	}, [])

	return (
		<>
		    <div className={showGoTop ? 'goTop' : 'goTopHidden' }>
			<Button
			  onClick={handleScrollUp}
			  boxShadow='dark-lg'
			  color='black'
			  fontWeight='bold'
			  bg={'yellow.400'}
			  rounded={'md'}
			  px={4}
			  children={<BiChevronUpCircle  fontSize={20}/>}
			  _hover={{
			    bg: 'yellow.500',
			  }}>
			</Button>
		    </div>
		</>
	);
}
export default GoTopButton;
