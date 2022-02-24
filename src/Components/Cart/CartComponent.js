import { useContext, useState } from 'react';
import { CartContext } from 'Context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

import { Stack, Container, Text, Button } from '@chakra-ui/react';

import CartItem from './CartItem';
import { createOrder, uploadStockAfterBuy } from 'db/fetchFirebase';
import { CartForm } from './CartForm';

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [confirmedItems, setConfirmedItems] = useState(false);
  const [buyer, setBuyer] = useState({ phone: '', name:'', email: '', email2: '' });

  const navigate = useNavigate(); 
  const Cart = useContext(CartContext);
  const {cartList, removeFromCart, clearCart} = Cart;
  const priceArgFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });


  const handleOnChange = (e) => {
    const { id } = e.target;
    let { value } = e.target;

    if( id === 'phone'){
      if( value.length > 8 ) return
      else value = value.replace(/[^0-9]/gi, '');
    }
    if( id === 'email' || id === 'email2' ) value = value.replace(/[^-A-Za-z0-9@.]/gi, '');
    
    setBuyer({
      ...buyer, 
      [id]: value
    })
  }

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartList.forEach( item => {
      return totalPrice += item.price * item.quantity
    });
    return totalPrice;
  }

  const volverVistaAnterior = () => {
    setConfirmedItems(false);
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
      buyer,
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
    <Container
    marginTop={'8vh'}
    maxW={{base:'400px', sm:'container.lg'}}
    centerContent
    >
      <Stack
      spacing={'4'}
      bgColor={'primary'} 
      shadow={'-1px 1px 15px 4px #FFFFFF'}
      borderRadius={'15px'}
      p={'20px'}
      alignItems={'center'}
      justifyContent={'space-around'}
      minW={{base:'400px'}}
      >
        {!confirmedItems ?
        <>
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
                onClick={() => setConfirmedItems(true)}
              >
                {`Confirmar items (Total: ${priceArgFormat.format(calculateTotalPrice())})`}
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
        </>
        :
        <>
          <Text
          color={'white'}
          fontWeight={'bold'}
          align={'center'}
          fontSize={20}
          >
            Datos de contacto:
          </Text>
          <CartForm 
          handleOnChange={handleOnChange} 
          buyer={buyer} 
          buyItems={buyItems} 
          loading={loading} 
          volverVistaAnterior={volverVistaAnterior}
          />
        </>
        }
      </Stack>
    </Container>
  )
}

export default Cart;