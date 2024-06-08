import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  Input
} from "@chakra-ui/react";
import CustomModalHeader from "./custom-modal-header";

const Notepad = ({
  closeModal,
  text
}: {
  closeModal: () => void;
  text?: string;
}) => {
  const [modalSize, setModalSize] = useState("xl");
  const isModalFullScreen = modalSize === "full";
  const [inputTextValue, setInputTextValue] = useState(
    text ??
      `Welcome to the notepad
    • Navigate to Terminal for the full experience of this portfolio
    • Write down your ideas perhaps???`
  );

  return (
    <Modal
      onClose={closeModal}
      isCentered
      isOpen
      motionPreset="slideInTop"
      size={modalSize}
    >
      <ModalOverlay />
      <ModalContent
        transition={"0.1s ease-in-out"}
        marginInline={isModalFullScreen ? 0 : 5}
        maxW={isModalFullScreen ? "100vw" : 800}
        w="100%"
        p={0}
      >
        <CustomModalHeader
          heading={"Notepad"}
          isModalFullScreen={isModalFullScreen}
          onClose={closeModal}
          onFullScreen={() => {
            setModalSize(modalSize === "xl" ? "full" : "xl");
          }}
        />
        <ModalBody p={6}>
          <Input
            as="textarea"
            border={0}
            outline={0}
            boxShadow={"none"}
            overflow="auto"
            h={isModalFullScreen ? "calc(100vh - 37px - 48px)" : 550}
            resize={"none"}
            value={inputTextValue}
            sx={{
              "::-webkit-scrollbar": {
                display: "none"
              }
            }}
            onChange={(e) => setInputTextValue(e.currentTarget.value)}
            _active={{
              outline: "none"
            }}
            _focusVisible={{
              border: "none"
            }}
            __css={{
              overflow: "auto !important"
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Notepad;
