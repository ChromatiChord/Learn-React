import { Box, Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Flex bg="teal.500" color="white" padding="1.5rem">
      <Box marginRight="2rem">
        <Link as={RouterLink} to="/">Home</Link>
      </Box>
      <Box marginRight="2rem">
        <Link as={RouterLink} to="/calculator">Calculator</Link>
      </Box>
      <Box>
        <Link as={RouterLink} to="/memory-game">Memory Game</Link>
      </Box>
    </Flex>
  );
};
