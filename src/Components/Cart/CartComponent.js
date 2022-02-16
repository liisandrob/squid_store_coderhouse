import { useContext, useState } from 'react';
import { CartContext } from 'Context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

import { Stack, Container, Text, Button, Spinner } from '@chakra-ui/react';

import CartItem from './CartItem';
import { createOrder, uploadStockAfterBuy } from 'db/fetchFirebase'; 

const Cart = () => {
  const [loading, setLoading] = useState(false);

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
    setLoading(true)
    let total = 0
    const items = cartList.map(item => {
      const { id, name, price, quantity } = item;
      total += price * quantity;
      return {id, name, price, quantity }
    })
    const order = {
      buyer: {
        name:'pepito',
        email:'pepito@pepito.com',
        phone:'1234567890'
      },
      items,
      total,
      date: new Date()
    }
    
    createOrder(order)
    .then(response => {
      uploadStockAfterBuy(order);
      setLoading(false);
      clearCart();
      navigate('/finished', { state: {order: response.id}});
    })
    .catch(error => {
      setLoading(false)
      console.log(error);
    })
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
            {loading ? 
            <>
              <Spinner
              size='xl'
              thickness='5px'
              speed='0.65s'
              color='secondary'
              />
            </>
            :
            <>
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
            </>
            }
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