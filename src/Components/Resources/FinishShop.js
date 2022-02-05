import { Link } from "react-router-dom/";
import { Stack, Text, Container, Image, Button } from '@chakra-ui/react';

import smileImg from 'Assets/smile.jpg';

const FinishShop = () => {
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