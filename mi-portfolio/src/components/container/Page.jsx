import NavBar from "../NavBar";
import {Flex} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export default function Page({ changeOpen, isOpen , componente, msg}) {

  const { colorMode } = useColorMode();
  
  return (
    <Flex
    bg={colorMode === "light" ? "#F7F9C3" : "#604671"}
      w={isOpen ? "100%" : ["calc(100% - 70px)","calc(100% - 70px)","calc(100% - 200px)"]}
      minHeight={"100vh"}
      left={isOpen ? "0px" : ["70px","70px","200px"]}
      position={"relative"}
      transition={"all 0.5s"}
      flexDir={"column"}
      >
      <NavBar
        changeOpen={changeOpen}
        msg={msg}
        isOpen={isOpen}
      />
      <Flex
        justifyContent={"center"}
        pt={32}
      >
      {componente}
      </Flex>
    </Flex>
  );
}