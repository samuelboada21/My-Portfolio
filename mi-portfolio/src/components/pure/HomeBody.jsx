import {
  Text,
  Image,
  Card,
  CardBody,
  Icon,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import "../../utils/HomePage.css";
import theme from "../../utils/Chakra-theme";
import { BsGithub, BsDownload } from "react-icons/bs";

function HomePage() {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Card
        bg={
          colorMode === "light"
            ? theme.colors.gradient.triclaro
            : theme.colors.gradient.trioscuro
        }
        w={["280px", "350px", "390px"]}
        p={6}
        boxShadow="md"
      >
        <Image
          src="/public/Profile.jpg"
          alt="Foto de Perfil"
          borderRadius="full"
          boxSize="150px"
          mx="auto"
          boxShadow="md"
        />
        <CardBody>
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            ¡Hola! Soy Samuel Boada
          </Text>
          <Text fontWeight={"semibold"} mt={2}>
            Bienvenido/a a mi portafolio. Aquí puedes encontrar información
            sobre mí y mis proyectos.
          </Text>
          <Flex>
            <Link href="https://github.com/samuelboada21">
              <Icon as={BsGithub} mt={"10px"} mr={"10px"} fontSize={"40px"} />
            </Link>
            <Button
              _hover={{
                backgroundColor: "#E7CECA",
                textDecoration: "none",
              }}
              border={"1px solid"}
              mt={"10px"}
              leftIcon={<BsDownload />}
            >
              CV
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </div>
  );
}

export default HomePage;
