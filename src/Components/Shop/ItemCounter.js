import React, { useState } from 'react';

import { Container, Button, Text, Stack } from "@chakra-ui/react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const ItemCounter = ({
  name,
  price,
  stock
}) => {

  const priceArgFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' })

  const [counter, setCounter] = useState(1);

  return(
    <Container 
      borderRadius={'0 0 15px 15px'} 
      bgColor={'primary'} 
      maxW={{base:'300px'}} 
      h={'200px'} 
      centerContent display={'flex'} 
      justifyContent={'space-around'}>
        <Text
          color={'white'}
          fontWeight={'bold'}
          fontSize={20}
        >
        {name}
        </Text>
        <Text
          fontWeight={'bold'}
          fontSize={20}
          color={'white'}
        >
        Precio: {priceArgFormat.format(price)}
        </Text>
        <Stack 
        bgColor={'#249f9c'}
        borderRadius={'10px'}
        p={'2px 2px 2px 5px'}
        direction={'row'} 
        alignItems={'center'} 
        spacing={3}
        >
          <Text
          color={'white'}
          fontWeight={'bold'}
          >Cantidad: </Text>
          <Button 
          variant='navBtn'
          isDisabled = {counter === 1}
          onClick={() => setCounter(counter - 1)} 
          >
            <FaArrowDown/>
          </Button>
          <Text
            fontWeight={'bold'}
            fontSize={23}
            color={'white'}
          >
            {counter}
          </Text>
          <Button 
          variant='navBtn'
          isDisabled = {counter === stock}
          onClick={() => setCounter(counter + 1)}
          >
            <FaArrowUp/>
          </Button>
        </Stack>
        <Button variant='navBtn'>Agregar al carrito</Button>
    </Container>
  );
}