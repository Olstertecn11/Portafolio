import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
  ModalBody, Button, ModalCloseButton, FormControl, FormLabel,
  VStack,
  Input, Textarea, Box, Text, HStack, Icon
} from '@chakra-ui/react'
import { useRef } from 'react';
import { BsFillCursorFill, BsXLg } from 'react-icons/bs';
import { DiTerminal } from "react-icons/di";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

function Contact({ isOpen, onClose }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);

  const showSwal = () => {
    Swal.fire({
      icon: "success",
      title: "Payload delivered!",
      text: "Correo enviado correctamente",
      background: '#202f2e',
      color: '#a2b0b0',
      confirmButtonColor: '#4e55bf',
      backdrop: `rgba(0,0,123,0.4) url("/images/nyan-cat.gif") left top no-repeat`
    });
  }

  const sendEmail = () => {
    const templateParams = {
      from_name: nameRef.current.value,
      message: contentRef.current.value,
      reply_to: emailRef.current.value,
    };

    emailjs.send('service_kt3h13s', 'template_pi4jjid', templateParams, 'a2DG14lDuzHz2Enzj')
      .then(() => {
        onClose();
        showSwal();
      }, (error) => {
        console.log(error.text);
      });
  }

  // Estilo común para los inputs tipo terminal
  const inputStyle = {
    bg: "rgba(0,0,0,0.3)",
    border: "1px solid #ffffff22",
    color: "green.300",
    fontFamily: "JetBrains Mono, monospace",
    _focus: { borderColor: "#4e55bf", boxShadow: "none" },
    _placeholder: { color: "gray.600" }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="#1a2625"
        border="1px solid #ffffff61"
        borderRadius="md"
        fontFamily="JetBrains Mono, monospace"
      >
        <ModalHeader borderBottom="1px solid #ffffff22" py={3}>
          <HStack>
            <Icon as={DiTerminal} color="green.400" />
            <Text color="gray.300" fontSize="md">olster@terminal: ~/contact.sh</Text>
          </HStack>
        </ModalHeader>
        <ModalCloseButton color="gray.500" />

        <ModalBody py={6}>
          <VStack spacing={4} align="stretch">
            <Box>
              <Text color="blue.300" fontSize="sm" mb={1}>$ SET SENDER_NAME</Text>
              <Input ref={nameRef} placeholder="Tu nombre..." {...inputStyle} />
            </Box>

            <Box>
              <Text color="blue.300" fontSize="sm" mb={1}>$ SET REPLY_EMAIL</Text>
              <Input ref={emailRef} placeholder="tu@email.com" {...inputStyle} />
            </Box>

            <Box>
              <Text color="blue.300" fontSize="sm" mb={1}>$ WRITE MESSAGE_BODY</Text>
              <Textarea
                ref={contentRef}
                placeholder="Escribe tu mensaje aquí..."
                rows={5}
                {...inputStyle}
              />
            </Box>

            <Text color="gray.500" fontSize="xs">
              [SYSTEM] EmailJS service status: <Text as="span" color="green.500">READY</Text>
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter bg="rgba(0,0,0,0.2)" borderTop="1px solid #ffffff11">
          <Button
            variant="ghost"
            colorScheme="red"
            mr={3}
            leftIcon={<BsXLg />}
            onClick={onClose}
            fontSize="sm"
          >
            CANCEL
          </Button>
          <Button
            bg="#4e55bf"
            color="white"
            _hover={{ bg: "#3f449b" }}
            rightIcon={<BsFillCursorFill />}
            onClick={sendEmail}
            fontSize="sm"
          >
            EXECUTE SEND
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Contact;
