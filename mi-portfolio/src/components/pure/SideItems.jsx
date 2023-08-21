import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useLocation, Link } from "wouter";
import { useState} from "react";

export default function SideItem({ icon, msg, active, index, tamanio, path }) {
  const [ruta] = useState(path);
  const [loc] = useLocation();

  return (
    <>
      <Button
        as={Link}
        to={ruta !== undefined ? ruta : ""}
        w={"100%"}
        borderRadius={"8px"}
        _hover={{
          backgroundColor: "#E7CECA",
          textDecoration: "none",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        // variant={"unstyled"}
        fontWeight={"semibold"}
      >
        <Flex
          w={"100%"}
          gap={"15px"}
          p={"10px"}
          justifyContent={tamanio ? "flex-start" : "center"}
          alignItems={"center"}
        >
          <Icon
            as={icon}
            color={loc == ruta ? "red" : null}
            fontSize="25px"
          />
          {msg != "" ? <Text>{msg}</Text> : msg}
        </Flex>
      </Button>
    </>
  );
}
