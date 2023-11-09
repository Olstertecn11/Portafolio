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
import { BsFillCursorFill, BsXLg } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';


function Contact({ isOpen, onClose }) {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);

  const showSwal = () => {
    Swal.fire({
      icon: "success",
      title: "Correo enviado correctamente",
      backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
    });
  }

  const sendEmail = () => {

    const templateParams = {
      from_name: nameRef.current.value,
      message: contentRef.current.value,
      reply_to: emailRef.current.value,
    };
    onClose();
    showSwal();
    // emailjs.send('service_kt3h13s', 'template_pi4jjid', templateParams, 'a2DG14lDuzHz2Enzj')
    //   .then((result) => {
    //     onClose();
    //     showSwal();
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  }



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
              <Input ref={nameRef} placeholder="Oscar" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={emailRef} placeholder="oscar123@gmail.com" />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea ref={contentRef} placeholder="Hi there, I want to hire you..." />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} colorScheme="green" rightIcon={<BsFillCursorFill />} onClick={sendEmail}>Send</Button>
            <Button colorScheme='red' rightIcon={<BsXLg />} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Contact;

