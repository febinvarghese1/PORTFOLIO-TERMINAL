import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Text,
  Input,
  Flex
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import CustomModalHeader from "./custom-modal-header";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import { TERMINAL } from "../constants";

const Terminal = ({ closeModal }: { closeModal: () => void }) => {
  const [modalSize, setModalSize] = useState("xl");
  const isModalFullScreen = modalSize === "full";
  const [terminalColor, setTerminalColor] = useState("green");
  const [currentIndex, setCurrentIndex] = useState(0);

  const inputRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const [terminalResult, setTerminalResult] = useState<
    Array<{ id: number; htmlCode: string; command?:string }>
  >([
    {
      id: 1,
      htmlCode: TERMINAL.WELCOME_SCREEN
    }
  ]);

  const handleTerminalInput = (inputTextValue: string) => {
    let htmlCode;
    let isFallback = false;
    switch (inputTextValue.toLowerCase()) {
      case "help":
        htmlCode = TERMINAL.HELP;
        break;
      case "about":
        htmlCode = TERMINAL.ABOUT;
        break;
      case "clear":
        setTerminalResult([
          {
            id: 1,
            htmlCode: `<p></p>`
          }
        ]);
        break;
      case "timeline":
        htmlCode = TERMINAL.TIMELINE;
        break;
      case "stats":
        htmlCode = TERMINAL.STATS;
        break;
      case "projects":
        htmlCode = TERMINAL.PROJECTS;
        break;
      case "github":
        window.open("https://github.com/febinvarghese1", "_blank");
        break;
      case "linkedln":
        window.open(
          "https://www.linkedin.com/in/febin-varghese-0530191b8",
          "_blank"
        );
        break;
      case "red":
        setTerminalColor("red");
        break;
      case "yellow":
        setTerminalColor("yellow");
        break;
      case "green":
        setTerminalColor("green");
        break;
      case "blue":
        setTerminalColor("blue");
        break;
      default:
        htmlCode = TERMINAL.FALLBACK;
        isFallback = true;
        break;
    }
    if (!!htmlCode) {
      const obj: { id: number; htmlCode: string; command?: string } = {
        id: terminalResult[terminalResult.length - 1].id + 1,
        htmlCode,
        command: inputTextValue
      };
      if (isFallback) delete obj?.command;
      const result = [...terminalResult, { ...obj }];

      setTerminalResult(result);
      setCurrentIndex(result.length);
    }
  };

  const getCurrentTerminalColor = () => {
    switch (terminalColor) {
      case "red":
        return "#7DF9FF";
      case "blue":
        return "#DE3163";
      case "yellow":
        return "#50C878";
      case "green":
        return "#FFD800";
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [terminalResult.length]);

  return (
    <Modal
      onClose={closeModal}
      isCentered
      isOpen
      motionPreset="slideInTop"
      size={modalSize}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent
        maxW={isModalFullScreen ? "100vw" : 1000}
        w="100%"
        p={0}
        transition={"all .1s ease"}
      >
        <CustomModalHeader
          heading={"Terminal"}
          isModalFullScreen={isModalFullScreen}
          onClose={closeModal}
          onFullScreen={() => {
            setModalSize(modalSize === "xl" ? "full" : "xl");
          }}
        />
        <ModalBody
          className="terminal"
          background={"black"}
          borderBottomRadius={"md"}
        >
          <Box paddingBlock={3}>
            <Box
              h={isModalFullScreen ? "100%" : 550}
              sx={{
                "::-webkit-scrollbar": {
                  display: "none"
                }
              }}
              overflowY="auto"
              overflowX="hidden"
              color={terminalColor}
              __css={{
                "& #terminal": {
                  color: `${getCurrentTerminalColor()}`
                }
              }}
              onClick={() => {
                if (!!inputRef) inputRef.current.focus();
              }}
            >
              <Box ref={containerRef} transition={"all .4s ease"}>
                <Box>
                  {terminalResult.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={index === 0 ? { opacity: 1 } : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div>{parse(result.htmlCode)}</div>
                    </motion.div>
                  ))}
                  <TerminalInput
                    handleTerminalInput={handleTerminalInput}
                    inputRef={inputRef}
                    terminalResult={terminalResult}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const TerminalInput = ({
  handleTerminalInput,
  inputRef,
  terminalResult,
  currentIndex,
  setCurrentIndex
}: {
  handleTerminalInput: (inputTextValue: string) => void;
  inputRef: React.MutableRefObject<null>;
  terminalResult: Array<{ id: number; htmlCode: string; command?:string }>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
}) => {
  const [inputTextValue, setInputTextValue] = useState("");

  const handleTerminalControls = (key: string) => {
    
    if (terminalResult.length) {
      if (key === "ArrowUp") {
        const index = currentIndex > 0 ? currentIndex - 1 : 0;
        if (terminalResult[index].id !== 1 && terminalResult[index]?.command) {
          setInputTextValue(terminalResult[index]?.command);

        }
        setCurrentIndex(index);
      } else {
        const index = currentIndex <= terminalResult.length - 1 ? currentIndex + 1 : terminalResult.length - 1;
        if (terminalResult[index]?.id !== 1 && terminalResult[index]?.command) {
          setInputTextValue(terminalResult[index]?.command);
        }
        setCurrentIndex(index);
      }
    }
  };


  return (
    <Flex gap={2} alignItems="center">
      <Text fontSize={["sm", "md", "lg"]} fontWeight="medium">
        ninja@~portfolio:{" "}
      </Text>
      <Input
        value={inputTextValue}
        border={0}
        outline={0}
        p={0}
        ref={inputRef}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleTerminalInput(inputTextValue);
            setInputTextValue("");
          } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            handleTerminalControls(e.key);
          }
        }}
        boxShadow={"none"}
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
      />
    </Flex>
  );
};

export default Terminal;
