import {
  Button,
  Flex,
  Text,
  Card,
  CardBody,
  Image,
  Icon,
} from "@chakra-ui/react";
import { Link } from "wouter";
import { BiError } from "react-icons/bi";

export default function ErrorPage() {
  return (
    // <Flex
    //   // w={isOpen ? "100%" : ["calc(100% - 70px)","calc(100% - 70px)","calc(100% - 200px)"]}
    //   minHeight={"100vh"}
    //   // left={isOpen ? "0px" : ["70px","70px","200px"]}
    //   position={"absolute"}
    //   transition={"all 0.5s"}
    //   flexDir={"column"}
    //   bgColor={"secundario.100"}
    //   >

    //   <Flex position={"relative"} w={"100%"} h={"100%"}>
    //   <Text>404 Error</Text>
    //   <Button as={Link} to="/">Go to Home</Button>
    // </Flex>
    // </Flex>
    <Flex justifyContent={"center"} pt={32} h={"100vh"} bg={"blackAlpha.800"}>
      <Card
        w={["300px", "300px", "400px"]}
        maxH="370px"
        p={6}
        boxShadow="md"
        bg={"gray"}
        borderRadius={"40px"}
      >
        <Image
          src="/public/Error.jpg"
          alt="Error Image"
          borderRadius="full"
          boxSize="150px"
          mx="auto"
          mt={"15px"}
        />
        <CardBody textAlign={"center"}>
          <Text
            textColor="white"
            fontSize="xl"
            fontWeight="bold"
            mt={2}
            textAlign={"center"}
          >
            <Icon as={BiError} fontSize={"23px"} mr={"5px"}></Icon>404 Error
          </Text>
          <Button
            bg={"blackAlpha.500"}
            color="white"
            mt={"8px"}
            as={Link}
            to="/"
          >
            Go to Home
          </Button>
        </CardBody>
      </Card>
    </Flex>
  );
}
