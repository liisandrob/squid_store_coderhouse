import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Stack } from '@chakra-ui/react';

import { ItemCounter } from './ItemCounter';
import { WaitingMsg } from "Components/Resources/WaitingMsg";
import ItemBasicInfo from 'Components/Resources/ItemBasicInfo';

import fetchSimulator from "fetchSimulator";

export const ItemDetail = () => {

  const urlParam = useParams();
  const [errorMsg, setErrorMsg] = useState(null);
  const [itemSelected, setItem] = useState(null);

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
        setItem(null)
      })
  }, [urlParam]);

  return(
    <Container marginTop={'8vh'} maxW={{base:'400px', sm:'container.lg'}} centerContent>
      {itemSelected ? 
        <Stack
        minH={{base: '400px'}}
        maxW={{base:'300px'}} 
        spacing={'2'}
        bgColor={'primary'} 
        shadow={'-1px 1px 15px 4px #FFFFFF'}
        borderRadius={'15px'}
        p={'10px'}
        justifyContent={'space-around'}
        >
          <ItemBasicInfo name={itemSelected.name} price={itemSelected.price} stock={itemSelected.stock} imgUrl={itemSelected.imgUrl} />
          <ItemCounter name={itemSelected.name} price={itemSelected.price} stock={itemSelected.stock}/>
        </Stack>
        : 
        <WaitingMsg greeting={errorMsg ? errorMsg : 'Cargando detalle del producto..'}/> }
    </Container>
  )
}