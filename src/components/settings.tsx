import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  Box,
  Flex,
  Text,
  Heading
} from "@chakra-ui/react";
import CustomModalHeader from "./custom-modal-header";
import { WALLPAPER } from "../constants";

const Settings = ({ closeModal, wallpaper, setCurrentWallpaper }: { closeModal: () => void, wallpaper: string; setCurrentWallpaper: (wallpaper: string) => void; }) => {
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
          heading={"Settings"}
          isModalFullScreen={isModalFullScreen}
          onClose={closeModal}
          onFullScreen={() => {
            setModalSize(modalSize === "xl" ? "full" : "xl");
          }}
        />
        <ModalBody p={0}>
          <Flex h={isModalFullScreen ? "calc(100vh - 37px)" : 640}>
            <Box
              borderRight="1px"
              borderColor="gray.400"
              paddingBlock={5}
              maxW={180}
              display={["none", "block"]}
              w="100%"
            >
              <Flex
                pb={3}
                pt={4}
                paddingInline={5}
                background="gray.100"
                cursor="pointer"
              >
                <Text size="sm" fontWeight="medium">
                  Display
                </Text>
              </Flex>
            </Box>
            <Box w={"100%"} h={"100%"} overflowY={"auto"}>
              <Box pt={8} pl={2} mb={5}>
                <Heading size="md">Background</Heading>
              </Box>
              <Flex
                alignItems="center"
                justifyContent="center"
                p={5}
                background="blackAlpha.100"
              >
                <Box
                  style={{
                    backgroundImage: `url(${
                      wallpaper
                    })`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}
                  maxW={500}
                  w="100%"
                  h={230}
                />
              </Flex>
              <Flex
                mt={16}
                justifyContent="center"
                paddingInline={10}
                pb={10}
                gap={10}
                flexWrap="wrap"
              >
                {WALLPAPER.map((wallpaper) => (
                  <Box
                    cursor={"pointer"}
                    key={wallpaper.id}
                    style={{
                      backgroundImage: `url(${wallpaper.link})`,
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover"
                    }}
                    borderRadius={10}
                    maxW={250}
                    w="100%"
                    h={180}
                    onClick={() => {
                        setCurrentWallpaper(wallpaper.link)
                        localStorage.setItem("portfolio_wallpaper_id", `${wallpaper.id}`)}
                    }
                    transition="all .5s ease"
                    _hover={{
                        transform: "scale(1.1)"
                    }}
                  />
                ))}
              </Flex>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Settings;
