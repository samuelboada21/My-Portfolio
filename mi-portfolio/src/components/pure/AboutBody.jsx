import { Text, Flex, useMediaQuery, useColorMode } from "@chakra-ui/react";
import theme from "../../utils/Chakra-theme";

function AboutBody() {

  const {colorMode} = useColorMode();
  const [w] = useMediaQuery("(min-width: 768px)");

  const iconList = [
    "devicon-react-original colored",
    "devicon-javascript-plain colored",
    "devicon-spring-plain colored",
    "devicon-nodejs-plain colored",
    "devicon-java-plain",
    "devicon-mysql-plain",
    "devicon-mongodb-plain colored",
  ];

  const renderIcons = (icons) => (
    <Flex mt={"10px"} justifyContent={"center"} gap={"10px"}>
      {icons.map((iconClass, index) => (
        <i key={index} className={iconClass} style={{ fontSize: "3rem" }}></i>
      ))}
    </Flex>
  );

  return (
    <>
      <Flex direction={"column"} w={"610px"} mt={"-20px"} >
        <Flex
          boxShadow={"md"}
          borderRadius="10px"
          p={6}
          m={3}
          direction={"column"}
          bg={colorMode==='light' ? theme.colors.gradient.triclaro : theme.colors.gradient.trioscuro}
        >
          <Text fontWeight="semibold">
            Soy desarrollador, cuasi-ingeniero en sistemas de la Universidad
            Francisco de Paula Santander en Cúcuta, Colombia. Me gusta el
            desarrollo web, ya que considero que es una herramienta poderosa
            para optimizar procesos, brindar eficiencia y mejorar la experiencia
            de usuarios. Disfruto tocar el piano y reforzar conocimientos como
            pasatiempos.
          </Text>
          <Text fontWeight={"semibold"} mt={2}>
            Las tecnologías en las cuales trabajo son: React.js, JavaScript,
            SpringBoot, Node.js, Java, MySQL, MongoDB.
          </Text>
        </Flex>
        {w ? (
          <>{renderIcons(iconList)}</>
        ) : (
          <>
            {renderIcons(iconList.slice(0, 4))}
            {renderIcons(iconList.slice(4))}
          </>
        )}
      </Flex>
    </>
  );
}

export default AboutBody;
