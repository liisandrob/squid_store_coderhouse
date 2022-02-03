import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Container, Button, Stack } from '@chakra-ui/react';

import { ItemCounter } from './ItemCounter';
import { WaitingMsg } from "Components/Resources/WaitingMsg";
import ItemBasicInfo from 'Components/Resources/ItemBasicInfo';

import fetchSimulator from "fetchSimulator";

export const ItemDetail = () => {

  const urlParam = useParams();
  const [errorMsg, setErrorMsg] = useState(null);
  const [itemSelected, setItem] = useState(null);
  const [quantitySelected, setQuantity] = useState(0);

  const onAdd = (quantity) => {
    setQuantity(quantity);
    alert(`se ${quantity > 1 ? 'agregaron' : 'agregó'} ${quantity} ${quantity > 1 ? 'items' : 'item'} a State de ItemDetail.js`)
  };

  useEffect(() => {
    fetchSimulator(urlParam, 2000)
      .then(response => {
        setItem(response);
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
              <Link to='/chart'>
                <Button variant='navBtn'>Finalizar compra</Button>
              </Link>
            </Stack>
            :
            <ItemCounter name={itemSelected.name} price={itemSelected.price} stock={itemSelected.stock} onAdd={onAdd}/>
          }
        </Stack>
        : 
        <WaitingMsg greeting={errorMsg ? errorMsg : 'Cargando detalle del producto..'}/> }
    </Container>
  )
}