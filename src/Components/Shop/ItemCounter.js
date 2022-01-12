import React, { useState } from 'react';

import { Container, Button, Text, Stack } from "@chakra-ui/react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const ItemCounter = ({
  name,
  price
}) => {

  const [counter, setCounter] = useState(0);

  return(
    <Container 
      shadow={'-1px 1px 15px 4px #FFFFFF'}
      borderRadius={'0 0 15px 15px'} 
      bgColor={'primary'} 
      maxW={{base:'300px'}} 
      h={'200px'} 
      centerContent display={'flex'} 
      justifyContent={'space-around'}>
        <Text
          fontWeight={'bold'}
          fontSize={20}
        >
        {name}
        </Text>
        <Text
          fontWeight={'bold'}
          fontSize={20}
        >
        Precio: ${price}
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
          isDisabled = {counter === 0 ? true : false}
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
          onClick={() => setCounter(counter + 1)}
          >
            <FaArrowUp/>
          </Button>
        </Stack>
        <Button variant='navBtn'>Agregar al carrito</Button>
    </Container>
  );
}