import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

function buttonClickFunction() {
  alert("Button has been clicked!")
}

export default function HomePage() {
  return(
    <VStack>

      <Heading>Home Screen</Heading>

      <Text color="red">This is some text</Text>

      <Button onClick={buttonClickFunction}>This is a button</Button>

      <Box 
        borderWidth="2px" 
        borderRadius={"lg"} 
        width="50vw" 
        height="30vh"
        color={"white"}
        background={"red"}
        padding="50px"
      >
        <Text 
          color="white" 
          fontSize={"3rem"}
        >
          Here's a box with some styling
        </Text>
      </Box>

    </VStack>
  );
}