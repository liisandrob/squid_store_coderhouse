import { Container } from '@chakra-ui/react';

import { ItemCounter } from './ItemCounter';

export const ItemDetail = ({ name, price, stock }) => {
  return(
    <Container>
      <ItemCounter name={name} price={price} stock={stock}/>
    </Container>
  )
}