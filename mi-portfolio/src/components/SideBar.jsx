import { useState } from "react";
import { Flex, useMediaQuery, useColorMode, Image } from "@chakra-ui/react";
import SideItem from "./pure/SideItems";
import {
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineCalendar,
} from "react-icons/ai";
import theme from "../utils/Chakra-theme";

export default function SideBar({ isOpen }) {
  const { colorMode } = useColorMode();

  const navItems = [
    { icon: AiOutlineHome, msg: "Principal", active: false, path: "/" },
    {
      icon: AiOutlineAppstore,
      msg: "About",
      active: false,
      path: "/about",
    },
    {
      icon: AiOutlineAppstore,
      msg: "Projects",
      active: false,
      path: "/projects",
    },
    {
      icon: AiOutlineCalendar,
      msg: "Contact",
      active: false,
      path: "/Contact",
    },
  ];

  const [items] = useState(navItems);
  const [w] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Flex
        boxSizing="border-box"
        direction={"column"}
        position={"absolute"}
        w={["70px", "70px", "200px"]}
        h={"100%"}
        alignItems={"center"}
        bg={
          colorMode === "light"
            ? theme.colors.gradient.claro
            : theme.colors.gradient.oscuro
        }
        padding={"15px"}
        // justifyContent={"space-between"}
        transform={isOpen ? "translateX(-100%)" : "translateX(0px)"}
        transition={"all 0.5s"}
        // overflow={"hidden"}
        borderRight={"1px solid #bbb"}
      >
        <Image
            
            src="/public/LogoIn.jpg"
            alt="Foto de Perfil"
            borderRadius="full"
            boxSize={w ? "120px" : "40px"}
            // mx="auto"
            boxShadow="md"
            mt="10px"
            mb={w ? "100px" : "180px"}
            // alignSelf="flex-start"
            // position="relative"
          />
        <Flex direction={"column"} width={"100%"} gap={"15px"}>
          {items.map(({ icon, msg, active, path }, i) => (
            <SideItem
              key={i}
              path={path}
              icon={icon}
              active={active}
              msg={w ? msg : ""}
              tamanio={w}
              index={i}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
