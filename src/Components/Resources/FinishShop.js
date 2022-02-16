import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom/";
import { Stack, Text, Container, Image, Button, Tooltip } from '@chakra-ui/react';
import { FaCopy } from "react-icons/fa";

import smileImg from 'Assets/smile.jpg';

const FinishShop = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [orderId, setOrderId] = useState(null);
  const [tooltipMsg, setToolTipMsg] = useState('Copiar');
  
  useEffect(() => {
    if (state) {
      const order = state.order ? state.order : null
      if(order) setOrderId(order)
    }
    else navigate('/error')

    return(
      setToolTipMsg('Copiar')
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[state])

  const handleCopy = () => {
    navigator.clipboard.writeText(orderId)
    setToolTipMsg('Copiado!')
  }

  return (
    <Container marginTop={'8vh'} maxW={{base:'400px', sm:'container.lg'}} centerContent>
      <Stack
      minH={{base: '320px'}}
      spacing={'2'}
      bgColor={'primary'} 
      shadow={'-1px 1px 15px 4px #FFFFFF'}
      borderRadius={'15px'}
      p={'10px'}
      alignItems={'center'}
      justifyContent={'space-around'}
      >
        <Text
        color={'white'}
        fontWeight={'bold'}
        align={'center'}
        fontSize={46}
        >
          Muchas gracias!
        </Text>
        <Stack
          spacing={'2'}
          direction='row'
          alignItems={'baseline'}
        >
          <Text
          color={'white'}
          fontWeight={'bold'}
          align={'center'}
          fontSize={30}
          >
            Order de compra:
          </Text>
          <Stack
          p={'0px 0px 0px 15px'}
          borderRadius={'15px'}
          spacing={'4'}
          direction='row'
          alignItems={'center'}
          bgColor={'black'}
          >
            <Text
            color={'white'}
            fontWeight={'bold'}
            align={'center'}
            fontSize={20}
            >
              {orderId}
            </Text>
            <Tooltip 
            label={tooltipMsg}
            closeOnClick={false}
            >
              <Button
              variant='navBtn'
              onClick={handleCopy}
              >
                <FaCopy 
                fontSize={24}
                />
              </Button>
            </Tooltip>
          </Stack>
        </Stack>
        <Image 
        src={smileImg}
        alt={'Lee Jung Jae sonriendo'}
        h={'300px'}
        w={'500px'}
        borderRadius={'15px'}
        />
        <Text
        color={'white'}
        fontWeight={'bold'}
        align={'center'}
        fontSize={23}
        >
          Gracias por comprar en Squid Store! 
        </Text>
        <Text
        color={'white'}
        fontWeight={'bold'}
        align={'center'}
        fontSize={23}
        >
          Lo recaudado ira a la pool reward
        </Text>
        <Link to={`/`}
        >
          <Button
          variant='navBtn'
          >
            Volver al inicio
          </Button>
        </Link>
      </Stack>
    </Container>
  )
}

export default FinishShop;