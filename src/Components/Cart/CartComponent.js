import { useContext } from 'react';
import { CartContext } from 'Context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

import { Stack, Container, Text, Button } from '@chakra-ui/react';

import CartItem from './CartItem';

const Cart = () => {

  const navigate = useNavigate(); 
  const Cart = useContext(CartContext);
  const {cartList, removeFromCart, clearCart} = Cart;
  const priceArgFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartList.forEach( item => {
      return totalPrice += item.price * item.quantity
    });
    return totalPrice;
  }

  const buyItems = () => {
    clearCart();
    navigate('/finished');
  }

  return (
    <Container marginTop={'8vh'} maxW={{base:'400px', sm:'container.lg'}} centerContent>
      <Stack
      spacing={'8'}
      bgColor={'primary'} 
      shadow={'-1px 1px 15px 4px #FFFFFF'}
      borderRadius={'15px'}
      p={'10px'}
      alignItems={'center'}
      justifyContent={'space-around'}
      >
        {cartList.length > 0 ?
        <>
          {cartList.map((item, i) => { return <CartItem key={i} removeFromCart={removeFromCart} item={item} /> })}
          <Stack
          spacing={'10'}
          direction='row'
          >
            <Button
              variant='navBtn'
              onClick={() => clearCart()}
            >
              Limpiar lista
            </Button>
            <Button
              variant='navBtn'
              onClick={() => buyItems()}
            >
              {`Pagar ${priceArgFormat.format(calculateTotalPrice())}`}
            </Button>
          </Stack>
        </>
        :
        <>
          <Text
          color={'white'}
          fontWeight={'bold'}
          align={'center'}
          fontSize={40}
          >
            Carrito vacio
          </Text>
          <Link  to={'/'}>
            <Button
            variant='navBtn'
            >
              Ir a la tienda
            </Button>
          </Link>
        </>
        
      }
      </Stack>
    </Container>
  )
}

export default Cart;