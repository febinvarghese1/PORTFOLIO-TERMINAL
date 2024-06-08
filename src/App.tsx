import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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

  const handleSidebarAction = (action: string) => {
    setShowCurrentModal(action);
  };

  const closeModal = () => {
    setShowCurrentModal(null);
  };
  return (
    <ChakraProvider theme={theme}>
      <div className="container">
        <Header  handleSidebarAction={handleSidebarAction} />
        <Home showCurrentModal={showCurrentModal}closeModal={closeModal} handleSidebarAction={handleSidebarAction} />
      </div> 
    </ChakraProvider>
  );
}

export default App;
