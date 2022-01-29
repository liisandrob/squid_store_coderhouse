import { Link } from "react-router-dom/";
import { Stack, Text, Container, Image, Button } from '@chakra-ui/react';

import notFoundImg from 'Assets/notFoundImg.jpg';

const NotFoundMsg = () => {
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
          404 - Not Found
        </Text>
        <Image 
        src={notFoundImg}
        alt={'404 - not found'}
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
          No deberías estar acá, volvé a la tienda
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

export default NotFoundMsg;