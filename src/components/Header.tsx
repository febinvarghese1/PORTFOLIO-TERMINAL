import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Avatar
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { HEADER_LIST, SOCIAL_LIST } from "../constants";
import Pic from "../assets/pic.jpg";

const Header = ({  handleSidebarAction }: { handleSidebarAction: (action: string) => void  }) => {
  const currentDate = new Date();

  return (
    <div className="header">
      <Menu>
        <MenuButton
          background={"black"}
          color="white"
          as={Button}
          border="none"
          boxShadow="none"
          cursor="pointer"
          height={4}
          rightIcon={<ChevronDownIcon />}
          _active={{
            background: "black",
            color: "white"
          }}
          _hover={{
            background: "black",
            color: "white"
          }}
          _focus={{
            background: "black",
            color: "white"
          }}
        >
          FV
        </MenuButton>
        <MenuList
          paddingBlock={1}
          background="white"
          border="1px solid gray.900"
          width={200}
          mt={3}
          borderRadius={3}
        >
          {
            HEADER_LIST.map(header => (
              <MenuItem
              key={header.id}
              color="black"
              padding={2}
              onClick={() => handleSidebarAction(header.action)}
              border={"none"}
              width="100%"
              background={"white"}
              fontWeight={"bold"}
              cursor={"pointer"}
              fontSize={13}
              _hover={{
                background: "gray.200"
              }}
            >
             {header.text}
            </MenuItem>
            ))
          }
         
        </MenuList>
      </Menu>

      <Text fontSize="sm">{currentDate.toDateString()}</Text>
      <Menu>
        <MenuButton>
        <Avatar size="sm" name='Febin Varghese' src={Pic} />
        </MenuButton>
        <MenuList
          paddingBlock={1}
          background="white"
          border="1px solid gray.900"
          width={200}
          mt={3}
          borderRadius={3}
        >
          {
            SOCIAL_LIST.map(header => (
              <MenuItem
              key={header.id}
              color="black"
              padding={2}
              onClick={() => window.open(header.action, "_blank")}
              border={"none"}
              width="100%"
              background={"white"}
              fontWeight={"bold"}
              cursor={"pointer"}
              fontSize={13}
              _hover={{
                background: "gray.200"
              }}
            >
             {header.text}
            </MenuItem>
            ))
          }
         
        </MenuList>
        </Menu>
        
    </div>
  );
};

export default Header;
