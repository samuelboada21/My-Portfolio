import { Flex, Icon, useColorMode, Button, Text } from "@chakra-ui/react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import theme from "../utils/Chakra-theme";
import { BsMoon, BsSun } from "react-icons/bs";

export default function NavBar({ changeOpen, msg, isOpen }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorF =
    colorMode === "light"
      ? theme.colors.gradient.claro
      : theme.colors.gradient.oscuro;

  const colorB =
    colorMode === "light"
      ? theme.colors.gradient.redOrange
      : theme.colors.gradient.pinkRose;

  return (
    <Flex
      w={"100%"}
      bg={colorF}
      borderBottom={"1px solid #EBEBE6"}
      h={"70px"}
      p={"10px"}
      alignItems={"center"}
      gap={"20px"}
    >
      <Icon
        cursor={"pointer"}
        onClick={() => {
          changeOpen();
        }}
        as={isOpen ? AiOutlineMenuUnfold : AiOutlineMenuFold}
        fontSize={"20px"}
      ></Icon>
      <Text>{msg}</Text>
      <Button
        onClick={toggleColorMode}
        bg={colorB}
        _hover={{ bg: colorB }}
        color="white"
        ml={"auto"}
      >
        <Icon
          as={colorMode === "light" ? BsMoon : BsSun}
          fontSize={"20px"}
        ></Icon>
      </Button>
    </Flex>
  );
}

// import { Link as WouterLink } from 'wouter';
// import { Box, Flex, Link, Spacer, useColorMode, Button, Image } from '@chakra-ui/react';

// function NavBar() {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <Box bg={colorMode === 'light' ? '#FDE3BC' : 'gray.800'} p={4} shadow="md" top={0} w="100%" >
//       <Flex align="center">
//         <Box>
//           <Image src="/public/Logo.jpg" shadow="md" alt="Logo SB" w="50px" h="50px" borderRadius="full" />
//         </Box>
//         <Spacer />
//         <Flex align="center">
//           <Button onClick={toggleColorMode} mr={4} colorScheme="yellow">
//             {colorMode === 'light' ? 'Dark' : 'Light'} Mode
//           </Button>
//           <Link as={WouterLink} href="/" mr={4} color={colorMode === 'light' ? 'black' : 'white'}>
//             Home
//           </Link>
//           <Link as={WouterLink} href="/about" mr={4} color={colorMode === 'light' ? 'black' : 'white'}>
//             About
//           </Link>
//           <Link as={WouterLink} href="/projects" mr={4} color={colorMode === 'light' ? 'black' : 'white'}>
//             Projects
//           </Link>
//           <Link as={WouterLink} href="/contact" mr={4} color={colorMode === 'light' ? 'black' : 'white'}>
//             Contact
//           </Link>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// }

// export default NavBar;
