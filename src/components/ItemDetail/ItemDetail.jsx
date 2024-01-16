import ItemCount from '../ ItemCount/ItemCount';
import {
  Stack,
  CardBody,
  Image,
  Card,
  Text,
  Heading,
  CardFooter,
} from '@chakra-ui/react';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <Card
      maxW="sm"
      h="780px"
      margin="30px 0"
      borderRadius="lg"
    >
      <CardBody>
        <Image
          boxSize="400px"
          objectFit="cover"
          src={img}
          alt={name}
          borderRadius="lg"
          margin="0 auto"
        />
        <Stack
          mt="6"
          spacing="2"
        >
          <Heading
            size="md"
            color="teal"
          >
            {name}
          </Heading>
          <Text color="teal">Categoria: {category}</Text>
          <Text color="teal">Descripción: {description}</Text>
          <Text
            color="teal"
            fontSize="2xl"
          >
            ${price}
          </Text>
          <Text color="teal"> stock disponible: {stock}</Text>
        </Stack>
      </CardBody>
      <CardFooter mar>
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}
        />
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;
