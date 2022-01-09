import React, { useState } from 'react';

import { Container, Button, Text, Stack } from "@chakra-ui/react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const ItemCounter = () => {

  const [counter, setCounter] = useState(0);

  return(
    <Container 
      mt={{base:'30vh', sm:'50vh'}}
      borderRadius={'0 0 15px 15px'} 
      bgColor={'whatsapp.100'} 
      maxW={{base:'300px'}} 
      h={'150px'} 
      centerContent display={'flex'} 
      justifyContent={'space-around'}>
        <Text
          fontWeight={'bold'}
          fontSize={20}
        >
        Nombre item
        </Text>
        <Stack 
        direction={'row'} 
        alignItems={'baseline'} 
        spacing={3}
        >
          <Text>Cantidad: </Text>
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