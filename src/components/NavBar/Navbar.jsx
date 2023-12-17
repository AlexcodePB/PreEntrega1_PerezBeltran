import CartWidget from '../CartWidget/CardWidget';
import { Button, Center, SimpleGrid } from '@chakra-ui/react';

const Navbar = ({ title }) => {
  return (
    <>
      <Center 
      bg={'teal'}
      color={'white'}
      fontWeight={'bold'}
      fontSize={'1.5em'}
      fontFamily={'Permanent Marker'}
      >
        <h1>{title}</h1>
      </Center>
      <Center>
      <SimpleGrid columns={3}
      spacing={7}>
        
        <Button
          colorScheme="teal"
          variant="ghost"
          fontSize={'1.45em'}
          fontWeight={'bold'}
        >
          About
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          fontSize={'1.45em'}
          fontWeight={'bold'}
        >
          Home
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          fontSize={'1.45em'}
          fontWeight={'bold'}
        >
          Projects
        </Button>
      </SimpleGrid>
      </Center>
      <CartWidget />

    </>
  );
};

export default Navbar;
