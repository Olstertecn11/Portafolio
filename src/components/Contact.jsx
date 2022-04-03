import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'
import { useRef } from 'react';
import {  BsFillCursorFill, BsXLg } from 'react-icons/bs';


function Contact({isOpen, onClose}) {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);
    


  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
	      <FormControl>
		<FormLabel>Name</FormLabel>
		<Input ref={nameRef} placeholder="Name" />
	      </FormControl>
	      <FormControl>
		<FormLabel>Email</FormLabel>
		<Input ref={emailRef} placeholder="Email" />
	      </FormControl>
	      <FormControl>
		<FormLabel>Message</FormLabel>
		<Textarea ref={contentRef} placeholder="Write your Message..." />
	      </FormControl>
	  </ModalBody>
          <ModalFooter>
	      <Button  mr={3} colorScheme="green" rightIcon={<BsFillCursorFill />}>Send</Button>
	      <Button colorScheme='red' rightIcon={<BsXLg />}  onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Contact;

