import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ChakraProvider, extendTheme, Flex, Spinner, Text } from "@chakra-ui/react";
import { WALLPAPER } from "./constants";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    })
  }
});

function App() {
  const [showCurrentModal, setShowCurrentModal] = useState<string | null>(null);
  const [loader, setLoader] = useState(true);
  const hasWallpaper = localStorage.getItem("portfolio_wallpaper_id");
  const handleSidebarAction = (action: string) => {
    setShowCurrentModal(action);
  };

  const closeModal = () => {
    setShowCurrentModal(null);
  };

  useEffect(() => {
    if (!hasWallpaper) {
      localStorage.setItem("portfolio_wallpaper_id", `${WALLPAPER[0].id}`);
      setTimeout(() => setLoader(false), 100);
    } else {
      setLoader(false);
    }
  }, []);


  return (
    <ChakraProvider theme={theme}>
      {loader && !hasWallpaper ? (
        <Flex justifyContent="center" flexDirection="column" gap={3} alignItems="center" h={"100vh"}>
          <Spinner
            thickness="6px"
            speed="0.65s"
            emptyColor="gray.200"
            color="black"
            size="xl"
          />
          <Text fontSize="sm" fontWeight={"bold"}>Loading....</Text>
        </Flex>
      ) : (
        <div className="container">
          <Header handleSidebarAction={handleSidebarAction} />
          <Home
            showCurrentModal={showCurrentModal}
            closeModal={closeModal}
            handleSidebarAction={handleSidebarAction}
          />
        </div>
      )}
    </ChakraProvider>
  );
}

export default App;
