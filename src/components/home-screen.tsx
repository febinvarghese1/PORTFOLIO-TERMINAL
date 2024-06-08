import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const HomeScreen = () => {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds()
  });

  const convertToTwoDigit = (number: number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds()
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Flex
      h="100%"
      w="100%"
      justifyContent="flex-end"
      pr={32}
      className="home-screen"

      pt={20}
      alignItems={"flex-start"}
    >
      <Flex
        alignItems="center"
        color="white"
        __css={{
          display: "flex",
          alignItems: "center",
          "& > *": {
            textShadow: "0px 5px 10px rgba(0,0,0,0.8)"
          }
        }}
      >
        <Text fontSize="9xl">{convertToTwoDigit(time.hours)}</Text>
        <Text fontSize="9xl" marginInline={2}>
          :
        </Text>
        <Text fontSize="9xl">{convertToTwoDigit(time.minutes)}</Text>
        <Text fontSize="9xl" marginInline={2}>
          :
        </Text>
        <Text fontSize="9xl">{convertToTwoDigit(time.seconds)}</Text>
        <Text pl={2} fontSize="3xl" color="gray.400">
          {time.hours >= 12 ? " PM" : " AM"}
        </Text>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
