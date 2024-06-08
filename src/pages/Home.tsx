import { useState } from "react";
import { DragHandleIcon } from "@chakra-ui/icons";
import { aboutText, ACTIONS, homeLeftSidebar } from "../constants";
import { Box, Flex, Tooltip } from "@chakra-ui/react";
import Notepad from "../components/notepad";
import FileExplorer from "../components/file-explorer";
import Terminal from "../components/terminal";
import background from "../assets/background.jpg";
import HomeScreen from "../components/home-screen";

const Home = ({
  showCurrentModal,
  closeModal,
  handleSidebarAction
}: {
  showCurrentModal: string | null;
  closeModal: () => void;
  handleSidebarAction: (action: string) => void;
}) => {
  const [isAboutPage, setIsAboutPage] = useState(false);

  const handleAboutText = () => {
    handleSidebarAction(ACTIONS.OPEN_NOTEPAD);
    setIsAboutPage(true);
  };

  return (
    <Box h="calc(100vh - 48px)">
      <Flex
        className="home"
        pt={5}
        pb={5}
        h="100%"
        style={{
          background: `url(${background})`,
          backgroundPosition: "center center"
        }}
        w={"100%"}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex
          flexDirection="column"
          pt={6}
          pl={5}
          pr={5}
          pb={6}
          height={"100%"}
          justifyContent="space-between"
          border="1px"
          borderColor="whiteAlpha.400"
          borderTopEndRadius={10}
          borderBottomEndRadius={10}
          width="max-content"
          borderLeft={0}
          backgroundColor={"rgba(255,255,255,0.1)"}
        >
          <Flex flexDirection="column" gap={10}>
            {homeLeftSidebar.map((sidebar) => (
              <Box
                key={sidebar.id}
                onClick={() => handleSidebarAction(sidebar.action)}
              >
                <Tooltip
                  hasArrow
                  label={sidebar.text}
                  openDelay={100}
                  placement="right"
                >
                  <img src={sidebar.icon} className="home_left-bar--icon" />
                </Tooltip>
              </Box>
            ))}
          </Flex>
          <Tooltip
            hasArrow
            label={"Comming soon"}
            openDelay={100}
            placement="right"
          >
            <DragHandleIcon cursor={"pointer"} boxSize={30} color="white" />
          </Tooltip>
        </Flex>
        <HomeScreen />
      </Flex>
      {showCurrentModal === ACTIONS.OPEN_NOTEPAD && (
        <Notepad
          text={
            isAboutPage
              ? `${aboutText}` +
                "\n" +
                "• For the complete portfolio experience, head over to the Terminal"
              : undefined
          }
          closeModal={() => {
            closeModal();
            setIsAboutPage(false);
          }}
        />
      )}
      {showCurrentModal === ACTIONS.OPEN_FOLDER && (
        <FileExplorer
          handleAboutText={handleAboutText}
          closeModal={closeModal}
        />
      )}
      {showCurrentModal === ACTIONS.OPEN_TERMINAL && (
        <Terminal closeModal={closeModal} />
      )}
    </Box>
  );
};

export default Home;
