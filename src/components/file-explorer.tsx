import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import HomeIcon from "../assets/home.png";
import PinIcon from "../assets/pin.png";
import TextIcon from "../assets/text.png";
import CustomModalHeader from "./custom-modal-header";
import { SearchIcon } from "@chakra-ui/icons";

const FileExplorer = ({
  closeModal,
  handleAboutText
}: {
  closeModal: () => void;
  handleAboutText: () => void;
}) => {
  const [modalSize, setModalSize] = useState("xl");
  const isModalFullScreen = modalSize === "full";

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
        maxW={isModalFullScreen ? "100vw" : 1200}
        w="100%"
        p={0}
      >
        <CustomModalHeader
          heading={"File explorer"}
          isModalFullScreen={isModalFullScreen}
          onClose={closeModal}
          onFullScreen={() => {
            setModalSize(modalSize === "xl" ? "full" : "xl");
          }}
        />
        <ModalBody p={0}>
          <Flex h={isModalFullScreen ? "calc(100vh - 37px)" : 600}>
            <Box
              borderRight="1px"
              borderColor="gray.400"
              paddingBlock={5}
              maxW={180}
              display={["none", "block"]}
              w="100%"
            >
              <Flex
                alignItems="center"
                justifyContent="space-between"
                pb={3}
                pt={4}
                paddingInline={5}
                cursor="pointer"
              >
                <Flex alignItems="center" gap={2}>
                  <img
                    src={HomeIcon}
                    alt="home"
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain"
                    }}
                  />
                  <Text size="sm" fontWeight="medium">
                    HOME
                  </Text>
                </Flex>
                <img
                  src={PinIcon}
                  alt="pin"
                  style={{
                    width: "8px",
                    height: "8px",
                    objectFit: "contain"
                  }}
                />
              </Flex>
            </Box>
            <Box w={"100%"}>
              <Flex
                justifyContent="flex-end"
                p={4}
                boxShadow="0px 2px 1px rgba(0,0,0,0.04)"
              >
                <InputGroup maxW={300}>
                  <InputRightElement pointerEvents="none">
                    <SearchIcon color="gray.300" />
                  </InputRightElement>
                  <Input type="tel" placeholder="Search" />
                </InputGroup>
              </Flex>
              <Box pt={8} pl={10}>
                <Box
                  w={"max-content"}
                  cursor="pointer"
                  onClick={() => {
                    handleAboutText();
                  }}
                >
                  <img
                    src={TextIcon}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover"
                    }}
                  />
                  <Text fontSize="xs" mt={2} fontWeight="medium">
                    About.txt
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FileExplorer;
