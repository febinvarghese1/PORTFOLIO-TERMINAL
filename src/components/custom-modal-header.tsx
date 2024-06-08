import { ModalHeader, Flex, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import FullScreen from "../assets/fullscreen.png";

const CustomModalHeader = ({
  onClose,
  onFullScreen,
  isModalFullScreen,
  heading
}: {
  onClose: () => void;
  onFullScreen: () => void;
  isModalFullScreen: boolean;
  heading: string;
}) => {
  return (
    <ModalHeader
      borderTopRadius={isModalFullScreen ? 0 : "md"}
      background="#42423e"
      paddingBlock={2}
      position={"sticky"}
      top={0}
    >
      <Flex alignItems="center" justifyContent={"space-between"}>
        <Text color="white" fontSize="sm" fontWeight="medium  ">
          {heading}
        </Text>
        <Flex gap={3} alignItems="center">
          <Flex
            alignItems="center"
            justifyContent="center"
            background="green"
            rounded="50%"
            w={4}
            h={4}
            cursor="pointer"
            onClick={onFullScreen}
          >
            <img
              src={FullScreen}
              style={{ width: "12px", height: "12px", objectFit: "contain" }}
            />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            background="red"
            rounded="50%"
            w={4}
            h={4}
            cursor="pointer"
            onClick={onClose}
          >
            <CloseIcon bgSize={2} boxSize={2} strokeWidth={2} color="white" />
          </Flex>
        </Flex>
      </Flex>
    </ModalHeader>
  );
};

export default CustomModalHeader;
