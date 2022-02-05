import { Link } from 'react-router-dom';
import { Image, Stack, Text, Button } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

const CartItem = ({item, removeFromCart}) => {

  const priceArgFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });

  return (
    <Stack 
    w={{base: '700px'}}
    direction='row'
    spacing={'30px'}
    justifyContent={'space-between'}
    >
      <Image 
      alt={item.detail} 
      src={item.imgUrl}
      w={'100px'}
      h={'90px'}
      />
      <Stack
      justifyContent={'center'}
      >
        <Text 
          color={'white'}
          fontWeight={'bold'}
          >
          {`Producto: ${item.name}`}
        </Text>
        <Text 
        color={'white'}
        fontWeight={'bold'}
        >
          {`Precio unidad: ${priceArgFormat.format(item.price)}`}
        </Text>
      </Stack>
      <Stack
      justifyContent={'center'}
      >
        <Text 
        color={'white'}
        fontWeight={'bold'}
        align={'center'}
        >
          Cantidad:
        </Text>
        <Text 
        color={'white'}
        fontWeight={'bold'}
        align={'center'}
        >
          {item.quantity}
        </Text>
      </Stack>
      <Stack
      direction='row'
      align={'center'}
      spacing={'4'}
      >
        <Link to={`/item/${item.id}`}>
          <Button
          variant='navBtn'
          >
            <EditIcon />
          </Button>
        </Link>
        <Button
        variant='navBtn'
        onClick={() => removeFromCart(item.id)}
        >
          <DeleteIcon />
        </Button>
      </Stack>
    </Stack>
  )
}

export default CartItem;