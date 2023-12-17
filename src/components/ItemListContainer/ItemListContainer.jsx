import { Center, SimpleGrid } from '@chakra-ui/react';
import grinch from '../../assets/grinch.webp'


const ItemListContainer = ({ greeting }) => {
    const fuente = {
        fontFamily:'Rubik Scribble'
    };
  return (
    <div>
      <Center
        fontFamily={'Sans-serif'}
        fontWeight={'bold'}
        fontSize={'4em'}
        h={'80vh'}
        bg={'tomato'}
        color={'white'}
      >
        <SimpleGrid
          columns={1}
          spacing={4}
        >
          <Center>
            <img
              src={grinch}
              alt="grinch"
              width={'200'}
              height={'200'}
            />
          </Center>
          <h1
          style={fuente}
          >{greeting}</h1>
        </SimpleGrid>
      </Center>
    </div>
  );
};

export default ItemListContainer;
