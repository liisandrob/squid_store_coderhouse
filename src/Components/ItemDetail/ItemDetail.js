import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from 'Context/CartContext';

import { Container, Button, Stack } from '@chakra-ui/react';

import { ItemCounter } from './ItemCounter';
import { WaitingMsg } from "Components/Resources/WaitingMsg";
import ItemBasicInfo from 'Components/Resources/ItemBasicInfo';

import { getItemById } from 'db/fetchFirebase';

export const ItemDetail = () => {
  
  const Cart = useContext(CartContext);
  const { cartList, addToCart } = Cart;

  const urlParam = useParams();
  const { itemId } = urlParam;
  const [errorMsg, setErrorMsg] = useState(null);
  const [itemSelected, setItem] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const [quantitySelected, setQuantity] = useState(0);

  const onAdd = (quantity) => {
    setQuantity(quantity);
    addToCart(itemSelected, quantity);
  };

  useEffect(() => {
    getItemById(itemId)
      .then(response => {
        if(!response) return setErrorMsg('No se pudo encontrar item en la base de datos');

        const itemInCart = cartList.find(item => item.id === response.id);
        setItem({...response, quantity: itemInCart?.quantity || 0});
        setIsInCart(!!itemInCart);
      })
      .catch(err => {
        console.log(err);
        setErrorMsg(err);
      })

      return (() => {
        setErrorMsg(null);
        setItem(null);
        setQuantity(0);
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlParam]);

  return(
    <Container marginTop={'8vh'} maxW={{base:'400px', sm:'container.lg'}} centerContent>
      {itemSelected ? 
        <Stack
        minH={{base: '500px'}}
        maxW={{base:'300px'}} 
        spacing={'2'}
        bgColor={'primary'} 
        shadow={'-1px 1px 15px 4px #FFFFFF'}
        borderRadius={'15px'}
        p={'10px'}
        justifyContent={'space-around'}
        >
          <ItemBasicInfo name={itemSelected.name} price={itemSelected.price} stock={itemSelected.stock} imgUrl={itemSelected.imgUrl} />
          {
            quantitySelected > 0 ? 
            <Stack
            direction='row'
            justifyContent={'space-around'}
            >
              <Link to='/'>
                <Button variant='navBtn'>Volver</Button>
              </Link>
              <Link to='/cart'>
                <Button variant='navBtn'>Finalizar compra</Button>
              </Link>
            </Stack>
            :
            <ItemCounter isInCart={isInCart} name={itemSelected.name} price={itemSelected.price} quantity={itemSelected.quantity} stock={itemSelected.stock} onAdd={onAdd}/>
          }
        </Stack>
        : 
        <WaitingMsg greeting={errorMsg ? errorMsg : 'Cargando detalle del producto..'}/> }
    </Container>
  )
}