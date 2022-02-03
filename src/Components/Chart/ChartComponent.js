import { Link } from 'react-router-dom';
import { Stack, Text, Container, Image, Button } from '@chakra-ui/react';

import inProgress from 'Assets/inprogress.png'

const Chart = () => {
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
          Ups!
        </Text>
        <Image 
        src={inProgress}
        alt={'Work in progress'}
        h={'300px'}
        w={'300px'}
        borderRadius={'15px'}
        />
        <Text
        color={'white'}
        fontWeight={'bold'}
        align={'center'}
        fontSize={23}
        >
          Próximamente..
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

export default Chart;