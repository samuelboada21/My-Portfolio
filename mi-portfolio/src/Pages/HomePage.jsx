import { Center, Text, Image, Card, CardBody, Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import '../utils/HomePage.css';

function HomePage() {
  const { colorMode } = useColorMode();

  return (
    
    <Box bg={colorMode==='light' ? '#F7F9C3' : '#604671'} top={0} w="100%" >
        <div className="animated-background"> 
      <Center h="100vh">
        <Card maxW="400px" p={6} boxShadow="md">
        
          <Image
            src="/public/Profile.jpg"
            alt="Foto de Perfil"
            borderRadius="full"
            boxSize="150px"
            mx="auto"
          />
          <CardBody>
            <Text fontSize="xl" fontWeight="bold" mt={4}>
              ¡Hola! Soy Samuel Boada
            </Text>
            <Text mt={2}>
              Bienvenido/a a mi portafolio. Aquí puedes encontrar información
              sobre mí y mis proyectos.
            </Text>
          </CardBody>
      
        </Card>
      </Center> </div>
    </Box>   
  );
}

export default HomePage;
